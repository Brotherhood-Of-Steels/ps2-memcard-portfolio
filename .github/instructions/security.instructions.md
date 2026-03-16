---
applyTo: "**/*.ts,**/*.tsx,**/*.html,**/*.json"  
description: "Security best practices for the portfolio project"
---

# Security Guidelines

## Input Validation and Sanitization

- Validate all user inputs, even in a portfolio context
- Sanitize any dynamic content before rendering
- Use TypeScript's strict types to prevent type-based vulnerabilities  
- Avoid using `dangerouslySetInnerHTML` unless absolutely necessary
- Implement proper form validation for contact forms or interactive elements

## Dependency Security

- Keep all dependencies updated using `bun update`
- Use `bun audit` regularly to check for known vulnerabilities
- Review new dependencies before adding them to the project
- Pin dependency versions in package.json for reproducible builds
- Remove unused dependencies to reduce attack surface

## Client-Side Security

- Implement proper Content Security Policy (CSP) headers
- Use HTTPS for all production deployments
- Avoid storing sensitive data in localStorage or sessionStorage
- Implement proper error handling without exposing stack traces
- Use secure coding practices for any API integrations

## Build and Deployment Security

- Ensure build process doesn't include development secrets
- Use environment variables for configuration values
- Implement proper CORS settings if connecting to external APIs
- Sanitize build outputs and avoid including sensitive files
- Use secure deployment practices with proper access controls

## Third-Party Integrations

- Validate any external APIs or services used
- Implement proper error handling for third-party failures
- Use minimal permissions for any external service integrations  
- Review privacy implications of any analytics or tracking
- Implement fallbacks for when external services are unavailable

## Code Security Practices

- Avoid eval() or other dynamic code execution
- Use safe parsing methods for JSON and external data
- Implement proper access controls for administrative features
- Use the principle of least privilege for any privileged operations
- Regularly review and update security practices

## Privacy Considerations

- Implement clear data handling practices
- Minimize data collection and storage
- Ensure compliance with privacy regulations where applicable
- Provide clear information about any data usage
- Implement opt-out mechanisms for tracking or analytics

## Monitoring and Incident Response

- Implement proper error logging without exposing sensitive data
- Monitor for unusual activity patterns in production
- Have a plan for responding to security incidents
- Test security measures regularly
- Keep security documentation up to date