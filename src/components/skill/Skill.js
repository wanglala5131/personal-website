import styled from 'styled-components';
import { bigTablets, tablets, mobile } from '../variables';
import { Container } from '../Custom';
import { Title } from '../Title';
import skillData from '../../data/skill.json';

const SkillWrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${tablets} {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  margin: 0 20px;
`;

const SkillCategory = styled.h3`
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 4px solid ${props => props.theme.primaryLight};
  color: ${props => props.theme.primary};
  font-size: 30px;
  font-weight: 700;
  text-align: center;

  @media ${bigTablets} {
    font-size: 25px;
  }

  @media ${mobile} {
    font-size: 20px;
  }
`;

const SkillContentWrapper = styled.ul`
  padding: 0 5px 20px;
`;

const SkillContent = styled.li`
  font-size: 20px;
  margin: 10px 0 10px 1.2rem;
  text-indent: -1.2rem;

  @media ${bigTablets} {
    font-size: 18px;
  }

  @media ${mobile} {
    font-size: 16px;
  }

  &::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    background-color: ${props => props.theme.primary};
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

export const Skill = () => {
  return (
    <div id="skill">
      <Title>SKILL</Title>
      <SkillWrapper>
        {skillData.map(item => (
          <SkillItem key={item.category}>
            <SkillCategory>{item.category}</SkillCategory>
            <SkillContentWrapper>
              {item.content.map((txt, index) => (
                <SkillContent key={index}>{txt}</SkillContent>
              ))}
            </SkillContentWrapper>
          </SkillItem>
        ))}
      </SkillWrapper>
    </div>
  );
};
