import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContentContainer>{children}</StyledContentContainer>
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
