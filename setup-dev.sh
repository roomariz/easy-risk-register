#!/bin/bash
# Setup script for Easy Risk Register local development

echo "Setting up Easy Risk Register for local development..."

# Install frontend dependencies
cd easy-risk-register-frontend
npm install

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from example"
fi

echo "Setup complete!"
echo "To start the development server, run:"
echo "  cd easy-risk-register-frontend"
echo "  npm run dev"
echo ""
echo "Or from the project root:"
echo "  npm run dev"