import { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading }) => (
  <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
    <ClipLoader loading={isLoading} />
  </div>
);

export default LoadingOverlay;
