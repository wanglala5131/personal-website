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
  min-width: 450px;
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
    max-width: 500px;
    object-fit: cover;
    object-position: 75% 16%;
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
  line-height: 1.3;

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
            工作上以 Nuxt / Vue 開發，同時自學 React 、TypeScript
            等開發上相關知識。熟悉切版、串接 API ，也負責調整頁面效能與
            SEO。擅長溝通與協調，需要與客戶直接對話快速釐清需求，提供最佳建議。有與人協作專案之經驗，也可獨立進行開發，工作中經常需要決定專案架構與使用技術。
          </Description>
          <Info />
        </AboutInfo>
      </AboutContainer>
    </div>
  );
};
