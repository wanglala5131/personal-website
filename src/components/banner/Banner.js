import styled, { keyframes } from 'styled-components';
import { mobile, tablets } from '../variables';
import banner from 'assets/img/banner-small.jpeg';

const typing = width => keyframes`
  from { width: 0;}
  to { width:${width}; }
`;

const caret = keyframes`
  50% { border-color: #fff; }
`;

const Banner = styled.div`
  position: relative;
  height: 80vh;

  @media ${mobile} {
    height: 60vh;
  }
`;

const BannerImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 60%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px) brightness(60%);
  font-family: monospace;
  z-index: 1;
`;

const MainText = styled.h1`
  display: inline-block;
  position: relative;
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  border-right: 1px solid;
  border-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  animation: ${() => typing('15ch')} 2s steps(15, end),
    ${caret} 0.75s step-end 3;

  @media ${tablets} {
    font-size: 40px;
  }

  @media ${mobile} {
    font-size: 30px;
  }
`;

const SecondText = styled.h2`
  display: inline-block;
  margin-top: 10px;
  color: ${props => props.theme.primary};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-right: 1px solid;
  border-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  animation: ${() => typing('19ch')} 2s 2.5s steps(19, end) both,
    ${caret} 0.75s 2.5s step-end 4;

  @media ${tablets} {
    font-size: 20px;
  }
`;

export const PageBanner = () => {
  return (
    <Banner id="top">
      <BannerImg />
      <TextContainer>
        <MainText>Hello! I&rsquo;m Sue.</MainText>
        <SecondText>Front-End Developer</SecondText>
      </TextContainer>
    </Banner>
  );
};
