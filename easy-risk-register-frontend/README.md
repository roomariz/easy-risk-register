# Easy Risk Register

A privacy-focused, client-side risk management application for small and medium-sized businesses. Easy Risk Register operates entirely in the browser with no server dependencies, storing all data in local storage for maximum privacy and security.

## Features

- Risk creation, editing, and deletion
- Automatic risk scoring (probability × impact)
- Interactive risk visualization matrix
- CSV export functionality
- Responsive design for all device sizes
- Local storage for data persistence

## Tech Stack

- React (via Vite)
- TypeScript
- Zustand for state management
- Tailwind CSS for styling
- Framer Motion for animations

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Architecture

This application follows a client-side-only architecture with no server dependencies. All data is stored in browser local storage, ensuring complete privacy and data security. The application implements robust security measures including input sanitization to prevent XSS attacks, as detailed in the security.md documentation.

## Components Structure

The codebase follows a modular structure:
- `src/components/` - Reusable UI components organized by category
- `src/pages/` - Page-level components
- `src/stores/` - Zustand stores for state management
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions
- `src/services/` - Business logic and service layer
