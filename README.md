# Easy Risk Register

## Repository Setup Instructions

To complete the remote repository setup:

1. Go to https://github.com and log into your account
2. Click the "+" sign in the top right corner and select "New repository"
3. Give your repository a name (e.g., "easy-risk-register")
4. Optionally add a description: "A lightweight, cross-industry web application for small and medium-sized organizations to manage operational, security, or compliance risks."
5. Select "Public" or "Private" as per your preference
6. Do NOT initialize with a README (since you already have content)
7. Click "Create repository"

After creating the repository on GitHub, open your terminal/command prompt and run the following commands in your project directory:

```bash
git remote add origin https://github.com/[your-username]/easy-risk-register.git
git branch -M main
git push -u origin main
```

Replace `[your-username]` with your actual GitHub username.

## Project Overview

The Easy Risk Register is a lightweight, cross-industry web application designed specifically for small and medium-sized businesses (SMBs) to effectively manage operational, security, and compliance risks. The application addresses a critical market gap where SMBs currently rely on outdated methods like Excel spreadsheets or informal processes for risk management, while enterprise-grade tools remain too complex and costly for their needs.

## Key Features

- Quick addition, editing, and deletion of risks through intuitive forms
- Assignment of probability levels (low/medium/high) and impact levels
- Custom mitigation plans for each risk
- Automatic risk score calculation using probability × impact formulas
- Dynamic probability-impact matrix visualization
- Export capabilities to CSV, PDF, or shareable reports
- Fully client-side operation with local storage for data privacy
- Responsive design for desktop, tablet, and mobile access