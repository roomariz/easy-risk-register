# Easy Risk Register

A lightweight, privacy-focused risk management application for small and medium-sized businesses (SMBs). The application provides effective tools to manage operational, security, and compliance risks through an intuitive web interface that operates entirely in the browser.

## Overview

Easy Risk Register addresses a critical market gap where SMBs currently rely on outdated methods like Excel spreadsheets or informal processes for risk management, while enterprise-grade tools remain too complex and costly for their needs. The application offers:

- **Privacy-first approach**: All data stored locally in browser storage, no server required
- **Cross-industry applicability**: Universal solution suitable for various business types
- **Cost-effective**: Free to use with no infrastructure costs
- **User-friendly**: Intuitive interface accessible to non-risk experts

## Real-World Use Cases

### Small Healthcare Practice
A medical practice with 15 staff members uses Easy Risk Register to track patient data security risks, equipment failure possibilities, and regulatory compliance issues. They can visualize risks on the probability-impact matrix to prioritize which threats require immediate attention, like potential HIPAA violations or medical device failures.

### Manufacturing Company
A small manufacturing company tracks risks related to supply chain disruptions, workplace safety incidents, and quality control failures. Using the risk scoring feature (probability × impact), they prioritize which risks could have the greatest effect on production and revenue.

### Financial Services Firm
A regional financial advisor firm manages risks including market volatility, cybersecurity threats, and regulatory changes. The CSV export feature allows them to share risk assessments with their compliance team and create reports for stakeholders.

## Features

- Create, edit, and delete risk records with comprehensive details
- Automatic risk scoring using probability × impact calculations
- Interactive probability-impact matrix visualization
- Responsive design that works across devices
- CSV export functionality for reporting
- Real-time updates for risk scores and visualizations
- WCAG 2.1 AA compliant accessibility features
- Content Security Policy (CSP) implementation for enhanced security
- 100% compliance with product requirements

## Architecture

The application follows a client-side-only architecture with no server dependencies:
- All data is stored in browser local storage with robust input sanitization to prevent XSS attacks
- Content Security Policy (CSP) implementation to prevent code injection attacks
- Built with React, TypeScript, Vite, and Tailwind CSS
- Zustand for state management
- Framer Motion for animations
- Chart.js for risk matrices and visualizations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd easy-risk-register-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Docker Setup

For containerized development:
```bash
npm run dev:docker
```

## User Journey Examples

### Creating Your First Risk
1. Click the "Create New Risk" button on the dashboard
2. Fill in the risk details: title, description, probability (1-5 scale), impact (1-5 scale), and category
3. The system automatically calculates the risk score (probability × impact)
4. Add a mitigation plan if applicable
5. Save the risk to add it to your register

### Managing Existing Risks
1. View your risks in the list view or on the probability-impact matrix
2. Filter risks by category, status, or severity to focus on specific areas
3. Edit risks to update probability, impact, or mitigation plans as circumstances change
4. Use the risk score to prioritize which risks need immediate attention

### Exporting for Reports
1. Click the "Export" button on the dashboard or risk list
2. Download the CSV file containing all your risk data
3. Open in Excel or other spreadsheet applications for further analysis

## Testing

### Running Tests

The project uses [Vitest](https://vitest.dev/) for testing. You can run tests using the following commands:

#### Run all tests once:
```bash
npm run test:run
```

#### Run all tests in watch mode:
```bash
npm run test
```

#### Run specific test file:
```bash
npx vitest riskStore.test.ts
```

### Available Test Scripts

- `npm run test` - Run Vitest in watch mode (for development)
- `npm run test:run` - Run all tests once (for CI/verification)

### Test Coverage

Aim for at least 80% test coverage for business logic, especially for:
- Risk calculations (probability × impact)
- Risk store operations (add, update, delete)
- Data import/export functionality
- Filtering and search functionality

For more details on testing, see [Testing Guide](docs/guides/testing.md).

## Tech Stack

- **Frontend Framework**: React.js with Vite for fast builds
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Data Visualization**: Built-in charting components

## Documentation

This section provides a comprehensive index of all project documentation organized by category:

| Documentation Cluster | Documents |
|----------------------|-----------|
| **Guides** | [Setup Guide](docs/guides/setup.md) - Complete setup instructions from quick start to advanced development<br>[Testing Guide](docs/guides/testing.md) - How to run and write tests<br>[Contributing Guide](docs/guides/contributing.md) - Guidelines for contributing to the project<br>[Development Workflow](docs/guides/development-workflow.md) - Standard development process and commands<br>[Code Style Guide](docs/guides/code-style.md) - Coding standards and best practices |
| **Architecture** | [Architecture Documentation](docs/architecture/architecture-output.md) - System architecture and implementation details |
| **Reference** | [System Diagrams](docs/reference/diagrams.md) - Visual representations of system architecture and data flows<br>[High-level Overview](docs/reference/high-level.txt) - High level architecture overview<br>[Current Implementation](docs/reference/high-level-current.txt) - Current implementation summary |
| **Design** | [Design System](docs/design/design-system/) - Style guide and component specifications<br>[Features Documentation](docs/design/features/) - Feature-specific implementation guides<br>[Accessibility Guidelines](docs/design/accessibility/) - Inclusive design standards<br>[Design Assets](docs/design/assets/) - Design tokens and reference materials<br>[Requirements Mapping](docs/design/requirements-mapping.md) - Mapping of requirements to design elements |
| **Product** | [Product Requirements](docs/product/product-requirements.md) - Complete feature specifications and requirements<br>[Tech Stack Preferences](docs/product/tech-stack-pref.md) - Technology stack preferences and decisions |
| **Reports & Analysis** | [Project Report](docs/report/report.pdf) - Project report<br>[Deployment Report](docs/report/report-host-it-publicly.pdf) - Hosting and deployment report<br>[Compliance Report](docs/report/compliance-report.md) - 100% compliance achievement with minor documentation clarifications<br>[Security Analysis Summary](docs/report/security-analysis-summary.md) - Comprehensive security assessment and implementation<br>[Accessibility Implementation Summary](docs/report/accessibility-implementation-summary.md) - WCAG 2.1 AA compliance implementation details |

This README serves as the canonical index for all project documentation, preserving the "single source" promise by providing centralized access to all resources.

## Contributing

We welcome contributions to the Easy Risk Register project. Please read our contributing guidelines for details on our code of conduct and development process.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.