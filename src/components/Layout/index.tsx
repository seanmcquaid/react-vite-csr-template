import { FC } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingOverlay from '../LoadingOverlay';
import ErrorBoundary from '../../ErrorBoundary';
import Navbar from './Navbar';

const Layout: FC = () => {
  const navigation = useNavigation();
  const isNavigating =
    navigation.state === 'loading' || navigation.state === 'submitting';
  return (
    <StyledContainer>
      <Navbar />
      <StyledContentContainer>
        <LoadingOverlay isLoading={isNavigating} />
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 72px;
`;

export default Layout;
