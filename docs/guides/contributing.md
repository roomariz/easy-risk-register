# Contributing to Easy Risk Register

Thank you for your interest in contributing to Easy Risk Register! This document outlines the process for contributing to the project.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Initial Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Easy-Risk-Register.git
   ```
3. Navigate to the frontend directory:
   ```bash
   cd easy-risk-register/easy-risk-register-frontend
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

2. Make your changes following the code style guidelines (see below)

3. Run tests to ensure your changes don't break existing functionality:
   ```bash
   npm run test:run
   ```

4. Build the project to make sure everything compiles correctly:
   ```bash
   npm run build
   ```

5. Commit your changes with a clear, descriptive commit message following [Conventional Commits](https://www.conventionalcommits.org/)

6. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

7. Open a pull request to the main repository

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow the existing code style (consistent with the current codebase)
- Use functional components with hooks in React
- Follow React best practices and performance guidelines
- Use meaningful variable and function names
- Keep functions small and focused on a single responsibility

### CSS/Tailwind
- Use Tailwind CSS utility classes when possible
- For complex styles, use the design system components
- Follow the existing design patterns

### Testing
- Write tests for new functionality
- Ensure existing tests continue to pass
- Aim for meaningful test coverage, especially for business logic

## Project Structure

```
easy-risk-register/
├── agents/                 # AI agent configurations and prompts
├── docs/                   # Documentation
├── easy-risk-register-frontend/  # Main frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── design-system/  # Reusable design components
│   │   ├── stores/         # Zustand stores
│   │   └── types/          # TypeScript type definitions
│   └── tests/              # Test files (if separate)
├── scripts/                # Build and deployment scripts
└── ...
```

## Documentation

When adding new features, please update the relevant documentation:
- Add API documentation for new functions/components
- Update user guides if user-facing features are added
- Update architecture documentation if significant changes are made

## Testing Requirements

All pull requests must:
- Include appropriate tests for new functionality
- Pass all existing tests
- Pass the build process
- Include documentation updates if applicable

## Pull Request Guidelines

1. Describe the changes clearly in the pull request description
2. Reference any related issues
3. Include screenshots if UI changes are made
4. Ensure all automated checks pass
5. Keep pull requests focused on a single feature or bug fix when possible

## Questions?

If you have questions about contributing, feel free to open an issue in the repository.