import styled from 'styled-components';
import { bigTablets, mobile } from '../variables';
import { Container } from '../Custom';
import { Title } from '../Title';
import { Info } from './Info';

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
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  @media ${mobile} {
    font-size: 25px;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 22px;
  line-height: 1.1;

  @media ${mobile} {
    margin-bottom: 30px;
    font-size: 18px;
  }
`;

export const About = () => {
  return (
    <div id="about">
      <Title>ABOUT ME</Title>
      <AboutContainer>
        <ImgBox>
          <img src="/img/avatar.jpg" alt="Sue, front-end develop, 王思婕" />
        </ImgBox>

        <AboutInfo>
          <Name>王思婕 Sue</Name>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            eos saepe dolore quia nam magni maxime deleniti fugit illo nisi,
            ipsa reiciendis accusantium numquam reprehenderit, enim sunt eum
            adipisci iusto quaerat fugiat. Laudantium maxime rem ipsam obcaecati
            recusandae, voluptates quibusdam
          </Description>
          <Info />
        </AboutInfo>
      </AboutContainer>
    </div>
  );
};
