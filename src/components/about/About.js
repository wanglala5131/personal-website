import styled from 'styled-components';
import { bigTablets, mobile } from '../variables';
import { Container } from 'components/Custom';
import { Title } from 'components/Title';
import { Info } from 'components/about/Info';
import avatar from 'assets/img/avatar.jpeg';

const AboutContainer = styled(Container)`
  display: flex;

  @media ${bigTablets} {
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  flex: 1 0 40%;
  position: relative;
  height: 600px;
  padding: 0 0 100px 100px;

  @media ${bigTablets} {
    flex: 1 0 auto;
    height: 400px;
    width: auto;
    padding: 0;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    object-fit: cover;
    object-position: 50% 25%;
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    border: 20px solid ${props => props.theme.primary};
    border-radius: 5px;
    z-index: -1;

    @media ${bigTablets} {
      display: none;
    }
  }
`;

const AboutInfo = styled.div`
  flex: 1 1 auto;
  margin-left: 5%;

  @media ${bigTablets} {
    margin-left: 0;
  }
`;

const Name = styled.h2`
  margin-top: 20px;
  font-size: 35px;
  font-weight: 700;

  @media ${bigTablets} {
    text-align: center;
  }

  @media ${mobile} {
    font-size: 25px;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 22px;

  @media ${mobile} {
    margin-bottom: 30px;
    font-size: 16px;
  }
`;

export const About = () => {
  return (
    <div id="about">
      <Title>ABOUT ME</Title>
      <AboutContainer>
        <ImgBox>
          <img src={avatar} alt="Sue, front-end develop, 王思婕" />
        </ImgBox>

        <AboutInfo>
          <Name>王思婕 Sue</Name>
          <Description>
            半路出家的前端工程師，工作上以 Nuxt / Vue 開發，並於空閒時自學 React
            和開發上相關知識，工作上除了切版、串接 API
            外，也曾接觸過前端效能調整、基礎 SEO，同時也擁有後端 Node.js 和
            MySQL
            基礎知識。另外，經過之前工作的訓練，也擅於與他人溝通協調、資料查詢統整。
          </Description>
          <Info />
        </AboutInfo>
      </AboutContainer>
    </div>
  );
};
