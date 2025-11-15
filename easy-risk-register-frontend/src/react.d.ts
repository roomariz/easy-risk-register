declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Declare types for process environment
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }
}

// Declare types for react-dom/client
declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: React.ReactNode): void;
    unmount(): void;
  };
}