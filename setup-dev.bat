@echo off
REM Setup script for Easy Risk Register local development

echo Setting up Easy Risk Register for local development...

REM Install frontend dependencies
cd easy-risk-register-frontend
npm install

REM Create environment file if it doesn't exist
if not exist .env (
    copy .env.example .env
    echo Created .env file from example
)

echo Setup complete!
echo To start the development server, run:
echo   cd easy-risk-register-frontend
echo   npm run dev
echo.
echo Or from the project root:
echo   npm run dev