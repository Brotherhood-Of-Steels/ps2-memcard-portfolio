import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

/**
 * Vite plugin that exposes POST /api/upload-cv
 * Accepts a PDF file via multipart/form-data
 * and writes it directly to public/cv.pdf
 */
export function uploadCvPlugin(): Plugin {
  return {
    name: "upload-cv-plugin",
    configureServer(server) {
      server.middlewares.use("/api/upload-cv", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const chunks: Buffer[] = [];

        req.on("data", (chunk: Buffer) => {
          chunks.push(chunk);
        });

        req.on("end", () => {
          try {
            const body = Buffer.concat(chunks);
            const boundary = req.headers["content-type"]
              ?.split("boundary=")?.[1];

            if (!boundary) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "No boundary found" }));
              return;
            }

            // Parse multipart form data manually
            const parts = parseMultipart(body, boundary);
            const pdfPart = parts.find(
              (p) =>
                p.filename?.endsWith(".pdf") ||
                p.contentType === "application/pdf"
            );

            if (!pdfPart) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "No PDF file found" }));
              return;
            }

            // Write to public/cv.pdf
            const publicDir = path.resolve(process.cwd(), "public");
            const destPath = path.join(publicDir, "cv.pdf");

            // Ensure public directory exists
            if (!fs.existsSync(publicDir)) {
              fs.mkdirSync(publicDir, { recursive: true });
            }

            fs.writeFileSync(destPath, pdfPart.data);

            console.log(`\x1b[32m[upload-cv]\x1b[0m CV saved to ${destPath}`);

            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                success: true,
                message: "CV uploaded successfully",
              })
            );
          } catch (err) {
            console.error("\x1b[31m[upload-cv]\x1b[0m Error:", err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Upload failed" }));
          }
        });
      });
    },
  };
}

interface MultipartPart {
  name: string;
  filename?: string;
  contentType?: string;
  data: Buffer;
}

function parseMultipart(body: Buffer, boundary: string): MultipartPart[] {
  const boundaryBuf = Buffer.from(`--${boundary}`);
  const parts: MultipartPart[] = [];
  let pos = 0;

  while (pos < body.length) {
    // Find next boundary
    const start = body.indexOf(boundaryBuf, pos);
    if (start === -1) break;

    // Move past boundary + CRLF
    const headersStart = start + boundaryBuf.length + 2; // skip \r\n

    // Find end of headers (empty line)
    const headersEnd = body.indexOf("\r\n\r\n", headersStart);
    if (headersEnd === -1) break;

    const headersStr = body.slice(headersStart, headersEnd).toString("utf-8");

    // Find data start (after \r\n\r\n)
    const dataStart = headersEnd + 4;

    // Find next boundary for data end
    const nextBoundary = body.indexOf(boundaryBuf, dataStart);
    if (nextBoundary === -1) break;

    // Data ends 2 bytes before next boundary (\r\n)
    const data = body.slice(dataStart, nextBoundary - 2);

    // Parse headers
    const nameMatch = headersStr.match(/name="([^"]+)"/);
    const filenameMatch = headersStr.match(/filename="([^"]+)"/);
    const ctMatch = headersStr.match(/Content-Type:\s*(\S+)/i);

    parts.push({
      name: nameMatch?.[1] ?? "",
      filename: filenameMatch?.[1],
      contentType: ctMatch?.[1],
      data: Buffer.from(data),
    });

    pos = nextBoundary;
  }

  return parts;
}
