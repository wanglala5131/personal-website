import styled from 'styled-components';

import PropTypes from 'prop-types';
import nullable from 'prop-types-nullable';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => (props.show ? 'all' : 'none')};
  transition: opacity 0.2s ease-in-out;
`;

const ModalMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: background-color 0.2s ease-in-out;
`;

const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <ModalContainer show={isOpen}>
      <ModalMask onClick={closeModal} />
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: nullable(PropTypes.node).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
};
