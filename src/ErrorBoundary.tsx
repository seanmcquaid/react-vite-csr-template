import { Component, ReactNode } from 'react';
import FullAppError from './pages/FullAppError';
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
      return <FullAppError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
