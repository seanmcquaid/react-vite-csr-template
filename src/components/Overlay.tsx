import styled from 'styled-components';

interface OverlayProps {
  isOpen: boolean;
}

const Overlay = styled.div<OverlayProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 998;
`;

export default Overlay;
