import { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Overlays from '../../containers/Overlays';
import Navbar from './Navbar';

const Layout: FC = () => {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContentContainer>
        <Overlays />
        <Outlet />
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
