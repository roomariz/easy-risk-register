# Monthly Security Audit Runbook

## Overview
This document outlines the monthly security audit process for Easy Risk Register. This audit ensures that our security measures remain effective and up-to-date with current best practices.

## Frequency
This security audit should be performed on a monthly basis, with each audit run documented in a GitHub issue.

## Assigned Owner
Each month, rotate the audit ownership among senior team members. The current owner should be posted in the project's README or team documentation.

### Owner Responsibilities
- Execute the full security audit checklist
- Verify all security measures remain effective
- Document any issues found
- Open the required GitHub issue summarizing the audit
- Assign any follow-up security tasks that arise

## Audit Checklist

### 1. Review of CSP, Sanitization, and Encryption Settings (as outlined in SECURITY.md)

#### Content Security Policy (CSP)
- [ ] Verify that the CSP headers are properly configured and effective
- [ ] Check that default-src is set to 'self' to restrict all resources to same-origin by default
- [ ] Confirm script-src allows 'self', 'unsafe-inline', and 'unsafe-eval' as needed for React/Vite
- [ ] Verify style-src allows 'self' and 'unsafe-inline' for stylesheets
- [ ] Ensure img-src allows 'self', data: and https: sources for images
- [ ] Verify frame-ancestors is set to 'none' to prevent clickjacking
- [ ] Check for any newly added content sources that need to be whitelisted
- [ ] Confirm that CSP reports are being logged and monitored (if enabled)
- [ ] Review and validate all CSP directives align with the application's requirements

#### Input Sanitization
- [ ] Verify that all user inputs are sanitized using the `isomorphic-dompurify` library
- [ ] Confirm dangerous HTML tags like `<script>`, `<iframe>`, `<object>` are removed
- [ ] Check that potentially harmful attributes are stripped
- [ ] Verify only safe HTML elements are allowed (e.g., `<p>`, `<strong>`, `<em>`, lists, headings)
- [ ] Check that sanitization is applied at both client and server levels
- [ ] Confirm all form inputs, URL parameters, and headers are sanitized
- [ ] Review any recent changes to input handling for potential XSS vulnerabilities
- [ ] Test for common injection patterns in user-provided data

#### Data Encryption
- [ ] Verify that all risk data stored in browser local storage is encrypted using AES-GCM with 256-bit keys via the Web Crypto API
- [ ] Confirm each encryption operation uses a randomly generated initialization vector
- [ ] Verify encryption occurs before data is saved to localStorage
- [ ] Check that encryption key is stored separately with additional protection
- [ ] Confirm that sensitive data at rest is encrypted using appropriate algorithms
- [ ] Verify that data in transit is encrypted using TLS 1.2 or higher
- [ ] Check for any weak encryption algorithms that need to be updated
- [ ] Validate that encryption keys are properly rotated and managed
- [ ] Confirm that sensitive data is never stored in plaintext

### 2. Verification of Static Assets Tamper-Free Status (Hash Comparison)

- [ ] Generate integrity hashes for all static assets (CSS, JS, etc.)
- [ ] Compare current asset hashes with the expected/certified values
- [ ] Verify SRI (Subresource Integrity) attributes are present on CDN-hosted resources
- [ ] Check that all external dependencies have been verified against known good hashes
- [ ] Confirm that build process includes hash verification
- [ ] Verify that no unauthorized changes have been made to static assets

### 3. Review of Browser Storage Encryption Code for Regressions

- [ ] Verify that localStorage and sessionStorage usage is properly encrypted
- [ ] Check that sensitive data is not stored in unencrypted browser storage
- [ ] Confirm that all stored data follows the principle of data minimization
- [ ] Test that encryption/decryption functions are working as expected
- [ ] Verify that stored session data is properly invalidated when needed
- [ ] Check for any new browser storage usage that may require encryption
- [ ] Review any recent changes to storage-related code for potential regressions

### 4. Threat Model Updates for New Features

- [ ] Review any new features added since the last audit
- [ ] Update the threat model documentation with new potential attack vectors
- [ ] Assess the security implications of new dependencies or libraries
- [ ] Verify that new API endpoints have appropriate authentication/authorization
- [ ] Check that new database schemas don't introduce SQL injection possibilities
- [ ] Review new user roles and permissions for potential privilege escalation
- [ ] Assess any new integrations for security implications
- [ ] Update security documentation to reflect new threats or mitigations

## Post-Audit Actions

### Documentation
- [ ] Open a GitHub issue summarizing the audit findings
- [ ] Document any security improvements that need to be made
- [ ] Record the date of the audit and the name of the auditor
- [ ] Update security documentation as needed based on findings

### Issue Tracking
- [ ] Create GitHub issue in the format: "Security Audit - Month Year - Summary"
- [ ] Include all findings, both positive and requiring action
- [ ] Assign any required follow-up tasks with appropriate priority
- [ ] Link to this runbook for reference

## Audit Completion Checklist

- [ ] All checklist items above have been reviewed
- [ ] Security settings have been validated
- [ ] Threat model has been updated (if applicable)
- [ ] GitHub issue has been created summarizing the audit
- [ ] Next month's audit owner has been assigned
- [ ] Audit completion has been recorded in project tracking

## Escalation

If critical security vulnerabilities are discovered during the audit:
- Immediately notify project maintainers
- Consider whether immediate remediation is required
- Update the security issue handling procedures as needed

## Version History
- Version 1.0: Initial runbook created following project security requirements