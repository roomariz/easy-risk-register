@echo off
setlocal

echo Building Easy Risk Register Frontend Docker containers...

if "%1"=="dev" (
    echo Building development environment...
    docker-compose up --build
) else if "%1"=="prod" (
    echo Building production image...
    docker build -t easy-risk-register-frontend-codex-editor -f ./easy-risk-register-frontend-codex-editor/Dockerfile .
    echo Starting production container...
    docker run -d --name easy-risk-register-frontend-codex-editor-prod -p 8080:8080 easy-risk-register-frontend-codex-editor
) else (
    echo Usage:
    echo   build-docker.bat dev   - Build and run development environment
    echo   build-docker.bat prod  - Build and run production image
    echo.
    echo For development mode, access the app at http://localhost:5173
    echo For production mode, access the app at http://localhost:8080
)

endlocal