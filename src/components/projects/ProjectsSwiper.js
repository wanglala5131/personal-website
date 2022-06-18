import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from '@styled-icons/material';
import { bigTablets, mobile } from '../variables';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

import { SingleSlide } from './SingleSlide';

const ProjectTitle = styled.p`
  display: flex;
  align-items: center;

  span {
    flex-shrink: 0;
    padding: 5px 10px;
    margin: 0 20px;
    background-color: ${props => props.theme.primaryDark};
    border-radius: 5px;
    color: #fff;
    font-size: 25px;
  }

  &::after,
  &::before {
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 3px;
    background-color: ${props => props.theme.primaryLight};
  }

  @media ${mobile} {
    font-size: 20px;
  }
`;

const SwiperContainer = styled.div`
  position: relative;
  margin: 0 20px;
`;

const arrowClass = css`
  width: 100px;
  color: ${props => props.theme.primaryDark};
  position: absolute;
  top: 32%;
  cursor: pointer;

  @media ${bigTablets} {
    width: 70px;
    top: 35%;
  }
`;

const IconLeft = styled(ArrowLeft)`
  ${arrowClass}

  left: -70px;

  @media ${bigTablets} {
    left: -50px;
  }
`;
const IconRight = styled(ArrowRight)`
  ${arrowClass}

  right: -70px;

  @media ${bigTablets} {
    right: -50px;
  }
`;

export const ProjectsSwiper = ({ item }) => {
  const swiperComponent = useRef(null);

  const swiperSlidNum = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const swiperSetting = {
    modules: [Pagination, Navigation],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: { clickable: true },

    breakpoints: {
      768: {
        slidesPerView: swiperSlidNum.tablet,
      },
      1024: {
        slidesPerView: swiperSlidNum.desktop,
      },
    },
  };

  const navClick = value => {
    if (value) {
      swiperComponent.current.slideNext();
    } else {
      swiperComponent.current.slidePrev();
    }
  };
  const setSwiper = swiper => {
    swiperComponent.current = swiper;
  };

  const projectsNum = item.projects.length;
  const [slideNum, setSlideNum] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const setBreakpoint = (swiper, { slidesPerView }) => {
    setSlideNum(slidesPerView);
  };

  const onSlideChange = swiper => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <>
      <ProjectTitle>
        <span>{item.category}</span>
      </ProjectTitle>
      <SwiperContainer>
        <Swiper
          onInit={setSwiper}
          onBreakpoint={setBreakpoint}
          onSlideChange={onSlideChange}
          {...swiperSetting}
        >
          {item.projects.map(project => (
            <SwiperSlide key={project.name}>
              <SingleSlide project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        {projectsNum <= slideNum ? null : (
          <>
            {currentIndex !== 0 ? (
              <IconLeft onClick={() => navClick(false)} />
            ) : null}
            {currentIndex !== projectsNum - slideNum ? (
              <IconRight onClick={() => navClick(true)} />
            ) : null}
          </>
        )}
      </SwiperContainer>
    </>
  );
};

ProjectsSwiper.propTypes = {
  item: PropTypes.object.isRequired,
};
