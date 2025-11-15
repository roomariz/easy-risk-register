# Security Implementation

This document outlines the security measures implemented in the Easy Risk Register application to protect against common web vulnerabilities.

## Input Sanitization

The application implements comprehensive input sanitization to prevent XSS (Cross-Site Scripting) attacks and other injection vulnerabilities.

### HTML Sanitization Library

The application uses `isomorphic-dompurify` to sanitize all user inputs before storage or rendering. This library:
- Removes dangerous HTML tags like `<script>`, `<iframe>`, `<object>`, etc.
- Strips potentially harmful attributes like `onclick`, `onload`, `src`, `href`, etc.
- Allows only safe HTML elements when needed (e.g., `<p>`, `<strong>`, `<em>`, `<ul>`, `<li>`)

### Sanitized Input Fields

All user-entered text fields are sanitized before storage:

1. **Risk Title** - All HTML tags and dangerous content are removed
2. **Risk Description** - HTML is sanitized to allow safe formatting elements only
3. **Mitigation Plan** - Input is sanitized to prevent malicious code injection
4. **Risk Category** - Text is sanitized and normalized
5. **CSV Import** - Imported data is sanitized using the same process as manual entries

### Implementation Details

The sanitization is implemented in `src/utils/sanitization.ts` with:
- `sanitizeTextInput()` - Handles individual text inputs
- `sanitizeRiskInput()` - Sanitizes all fields in a risk input object
- Integration with the risk store to ensure all inputs are sanitized before storage

### Security Configuration

The DOMPurify configuration allows only the following safe HTML elements:
- Text formatting: `<p>`, `<br>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`
- Lists: `<ol>`, `<ul>`, `<li>`
- Headings: `<h1>` to `<h6>`
- Other: `<blockquote>`, `<pre>`, `<code>`

All attributes are stripped by default, and dangerous tags/attributes are explicitly forbidden.

## Client-Side Security Architecture

As a client-side only application:
- All data is stored locally in browser storage with no server transmission
- No external API calls by default
- Input sanitization prevents XSS attacks in local storage
- All data remains on the user's device at all times

## Security Testing

- All sanitization functions are covered by unit tests
- Input validation is tested with malicious content
- CSV import sanitization is verified
- Risk store operations are tested for security compliance