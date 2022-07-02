import { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Overlay from './Overlay';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading }) => (
  <Overlay isOpen={isLoading}>
    <ClipLoader loading={isLoading} />
  </Overlay>
);

export default LoadingOverlay;
