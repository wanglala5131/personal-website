import styled from 'styled-components';
import { bigTablets, tablets, mobile } from '../variables';
import { Container } from '../Custom';
import { Title } from '../Title';

const skillArr = [
  {
    category: 'Front-End',
    content: [
      'Vue2 & 3 / Nuxt2 & 3 / Vuex / Vue Router / Pinia (一年以上工作開發經驗)',
      'React / Redux / React Router (自學，於練習專案時開發過)',
      'CSS3 / SASS / SCSS / Styled-component',
      '熟悉手刻切版，具 RWD 與 AWD 經驗',
      '熟悉 API 串接，擅長處理資料',
      '具有網頁效能與 SEO 調整經驗',
      '具有 Bootstrap5 與 BootstrapVue 使用經驗',
      '具有 i18n 使用經驗',
      '對 Socket.io 有基礎概念',
    ],
  },
  {
    category: 'Back-End',
    content: [
      '對 Node.js / Express / Handlebars 有基礎概念 (於練習專案時開發過)',
      '對 MySQL 與 MongoDB 具有基礎概念',
    ],
  },
  {
    category: 'Others',
    content: ['瞭解 git 版控原理和流程', 'Postman', 'npm / yarn / pnpm'],
  },
];

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
  line-height: 1.3;

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
        {skillArr.map(item => (
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
