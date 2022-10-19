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

  clearError = () => {
    this.setState({
      ...this.state,
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return <FullAppError clearError={this.clearError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
