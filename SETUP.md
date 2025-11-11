# Easy Risk Register Setup Instructions

## Directory Structure Note

The frontend application directory is currently named `easy-risk-register-frontend-codex-editor` but should be renamed to `easy-risk-register-frontend` to accurately reflect the project's purpose.

### To rename the directory:

If you have the application files not in use, you can rename the directory:

```
easy-risk-register-frontend-codex-editor --> easy-risk-register-frontend
```

This renaming has been reflected in:
- docker-compose.yml
- README documentation references

### If you're running the application:

If you're currently running the development server, you'll need to stop it before renaming the directory.

## Development Setup

1. Navigate to the frontend directory (after renaming if applicable):
   ```
   cd easy-risk-register-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Production Build

To build the application for production:
```
npm run build
```

The build artifacts will be placed in the `dist/` directory, which can be served by any static file server.