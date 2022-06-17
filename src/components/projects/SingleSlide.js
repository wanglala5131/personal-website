import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slide = styled.div`
  position: relative;
  height: 300px;
  margin: 50px 10px 100px;
  background-color: #fff;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 100%;
    background-color: ${props => props.theme.primary};
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const SingleSlide = ({ project }) => {
  return (
    <>
      <Slide>{project.name}</Slide>
    </>
  );
};

SingleSlide.propTypes = {
  project: PropTypes.object.isRequired,
};
