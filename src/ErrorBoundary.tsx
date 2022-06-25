import { Component, ReactNode } from 'react';
import AppError from './types/AppError';

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: AppError) {
    return { hasError: true };
  }

  componentDidCatch(error: AppError, errorInfo: AppError) {
    // Report to logging service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line i18next/no-literal-string
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
