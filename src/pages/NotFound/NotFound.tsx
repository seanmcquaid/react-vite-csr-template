import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Component: FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Not Found</h1>
      <p>Please try a different route!</p>
      <button onClick={handleOnClick}>Home</button>
    </div>
  );
};
