import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading, Text } from '@chakra-ui/react';

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
      <Heading>ERROR</Heading>
      <Text>{errorText}</Text>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default PageError;
