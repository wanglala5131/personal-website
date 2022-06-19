import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slide = styled.div`
  position: relative;
  margin: 50px 10px 100px;
  background-color: #fff;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;

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

  @media (hover: none) {
    display: flex;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  background-size: cover;

  @media (hover: hover) {
    height: 240px;
  }

  @media (hover: none) {
    height: 140px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px) brightness(50%);
    z-index: 0;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;

const SlideTitle = styled.div`
  height: 60px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  white-space: pre-line;
`;

const SlideMask = styled.div`
  font-size: 18px;
  z-index: 2;
  transition: background-color 0.2s ease-in-out;

  @media (hover: hover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    background-color: rgba(29, 29, 100, 0);
    color: transparent;

    &:hover {
      color: #fff;
      background-color: rgba(74, 74, 255, 0.9);
    }
  }

  @media (hover: none) {
    flex-grow: 1;
    padding: 0px 20px 20px;
  }

  li {
    margin-left: 20px;
    list-style: disc;
    line-height: 1.3;

    & + li {
      margin-top: 7px;
    }
  }
`;

export const SingleSlide = ({ project }) => {
  return (
    <Slide>
      <ImgContainer style={{ backgroundImage: `url(${project.cover})` }}>
        <img src={project.cover} alt={project.name} />
      </ImgContainer>
      <SlideTitle>
        <span>{project.name}</span>
      </SlideTitle>
      <SlideMask>
        <ul>
          {project.desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SlideMask>
    </Slide>
  );
};

SingleSlide.propTypes = {
  project: PropTypes.oneOfType([() => null, PropTypes.object]).isRequired,
};
