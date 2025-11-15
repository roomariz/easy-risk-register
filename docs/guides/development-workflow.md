# Development Workflow

This document outlines the standard development workflow for the Easy Risk Register project.

## Standard Development Process

### 1. Setting up the Development Environment
- Follow the instructions in the [Setup Guide](setup.md) to get your local development environment running
- Make sure you can run the application successfully before starting development

### 2. Working on Features
- Create a new branch for each feature or bug fix
- Follow the coding standards described in the [Contributing Guide](contributing.md)
- Write code that follows the existing patterns in the codebase
- Add tests for new functionality

### 3. Code Quality
- Run the TypeScript compiler to check for type errors: `npm run build`
- Run linting if applicable: `npm run lint` (if available)
- Run tests to ensure functionality works: `npm run test:run`
- Test your changes manually in the browser

### 4. Commit and Push
- Write clear, descriptive commit messages
- Follow conventional commits format when possible
- Push your changes to your fork/branch

### 5. Pull Request Process
- Open a pull request to the main repository
- Fill out the pull request template with details about your changes
- Link any related issues
- Wait for code review and address feedback

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reloading |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run lint` | Run the linter (if configured) |

## Code Review Process

All pull requests must be reviewed by at least one other contributor before merging. Code reviews focus on:
- Correctness of the implementation
- Adherence to coding standards
- Performance considerations
- Test coverage
- Documentation updates
- Code maintainability

## Continuous Integration

The project uses automated testing to ensure code quality. All tests must pass before a pull request can be merged.