import styled, { css } from 'styled-components';
import { bigTablets, mobile } from '../variables';
import { Container } from '../Custom';
import { Title } from '../Title';
import { BusinessCenter, School } from '@styled-icons/material';
import experienceData from '../../data/experience.json';

const ExperienceWrapper = styled(Container)`
  width: 60%;

  @media ${bigTablets} {
    width: 100%;
  }
`;

const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;

  &:not(:first-child) {
    margin-top: 50px;

    @media ${mobile} {
      margin-top: 30px;
    }
  }

  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 32.5px;
      bottom: -43px;
      height: 100%;
      width: 5px;
      background-color: ${props => props.theme.primaryLight};

      @media ${mobile} {
        height: 95%;
        left: 27.5px;
        bottom: -23px;
      }
    }
  }
`;

const IconStyle = css`
  flex-shrink: 0;
  color: ${props => props.theme.primaryDark};
  margin: 0 30px 0 15px;
  width: 40px;

  @media ${mobile} {
    margin: 0 15px;
    width: 30px;
  }
`;

const IconBusinessCenter = styled(BusinessCenter)`
  ${IconStyle}
`;

const IconSchool = styled(School)`
  ${IconStyle}
`;

const ExperienceTitle = styled.p`
  margin-top: 7px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;

  @media ${mobile} {
    margin-top: 3px;
    font-size: 18px;
  }
`;

const ExperienceYear = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.primaryDark};

  @media ${mobile} {
    font-size: 16px;
  }
`;

const ExperienceContent = styled.ul`
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.3;

  @media ${mobile} {
    font-size: 16px;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    font-weight: 500;
  }
`;

export const Experience = () => {
  return (
    <div id="experience">
      <Title>Experience</Title>
      <ExperienceWrapper>
        {experienceData.map(item => (
          <ExperienceItem key={item.to}>
            {item.education ? <IconSchool /> : <IconBusinessCenter />}
            <div>
              <ExperienceTitle>
                {item.title} <span>- {item.company}</span>
              </ExperienceTitle>
              <ExperienceYear>{`${item.from} - ${item.to}`}</ExperienceYear>
              {item.content ? (
                <ExperienceContent>
                  {item.content.map((info, index) => (
                    <li key={index}>
                      <span>{info.title}：</span>
                      {info.txt}
                    </li>
                  ))}
                </ExperienceContent>
              ) : null}
            </div>
          </ExperienceItem>
        ))}
      </ExperienceWrapper>
    </div>
  );
};
