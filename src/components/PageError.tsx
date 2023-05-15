import { FC } from 'react';
import { useNavigate } from '../router';

interface PageErrorProps {
  errorText: string;
}

const PageError: FC<PageErrorProps> = ({ errorText }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>ERROR</h1>
      <p>{errorText}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PageError;
