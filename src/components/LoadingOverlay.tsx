import { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading }) => (
  <div
    className={
      isLoading
        ? 'fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center'
        : 'hidden'
    }
    data-testid="loading-overlay"
  >
    <ClipLoader loading={isLoading} />
  </div>
);

export default LoadingOverlay;
