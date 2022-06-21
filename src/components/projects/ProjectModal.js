import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  Close,
  Code,
  InsertDriveFile,
  InsertLink,
  Image,
} from '@styled-icons/material';
import PropTypes from 'prop-types';

import { tablets } from 'components/variables';

const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 800px;
  max-height: 80vh;
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const IconClose = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  color: #fff;
  cursor: pointer;
`;

const IconClass = css`
  margin-right: 5px;
  width: 30px;
  color: ${props => props.theme.primaryDark};
`;

const IconCode = styled(Code)`
  ${IconClass}
`;
const IconInsertDriveFile = styled(InsertDriveFile)`
  ${IconClass}
`;
const IconInsertLink = styled(InsertLink)`
  ${IconClass}
`;
const IconImage = styled(Image)`
  ${IconClass}
`;

const Title = styled.p`
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: ${props => props.theme.primary};
  border-radius: 5px 5px 0 0;
`;

const ModalContent = styled.div`
  flex-grow: 1;
  padding: 0 40px 20px;
  overflow: auto;

  @media ${tablets} {
    padding: 0 20px 20px;
  }

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primaryLight};
    border-radius: 10px;
    min-height: 28px;
  }
`;

const SubTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;

  &:first-child {
    margin-top: 20px;
  }

  &:not(:first-child) {
    margin-top: 35px;
  }
`;
const Content = styled.div`
  font-size: 18px;

  a {
    color: ${props => props.theme.primaryDark};

    & + a {
      &::before {
        content: '/';
        color: ${props => props.theme.fontColor};
        margin: 0 10px;
      }
    }
  }

  li {
    margin-left: 25px;
    list-style: disc;

    & + li {
      margin-top: 10px;
    }
  }

  .testAccount {
    font-size: 16px;
    margin-top: 10px;
    white-space: pre-line;
  }
`;

const ProjectImgList = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 3px solid ${props => props.theme.primaryLight};

  @media ${tablets} {
    flex-direction: column;
  }

  &:last-child {
    border-bottom: 0 solid transparent;
  }

  p {
    margin-left: 10px;
    flex: 1 1 40%;
    white-space: pre-line;

    @media ${tablets} {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

const ProjectImg = styled.div`
  flex: 1 1 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
  }
`;

const ProjectNote = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #adadad;
`;

export const ProjectModal = forwardRef(({ project, closeModal }, ref) => {
  return (
    <ModalBody>
      <IconClose onClick={closeModal} />
      <Title>{project.name}</Title>

      <ModalContent ref={ref}>
        {project.note ? <ProjectNote>{project.note}</ProjectNote> : null}
        <SubTitle>
          <IconInsertLink />
          相關連結：
        </SubTitle>
        <Content>
          {project.links.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
          {project.accounts ? (
            <p className="testAccount">{project.accounts}</p>
          ) : null}
        </Content>

        <SubTitle>
          <IconInsertDriveFile />
          專案介紹：
        </SubTitle>
        <Content>{project.intro}</Content>

        <SubTitle>
          <IconCode />
          專案開發特點：
        </SubTitle>
        <Content>
          <ul>
            {project.develop.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Content>

        <SubTitle>
          <IconImage />
          詳細圖文介紹：
        </SubTitle>
        <Content>
          {project.imgList.map((item, index) => (
            <ProjectImgList key={index}>
              <ProjectImg>
                <img src={item.img} alt={item.desc} />
              </ProjectImg>
              <p>{item.desc}</p>
            </ProjectImgList>
          ))}
        </Content>
      </ModalContent>
    </ModalBody>
  );
});

ProjectModal.displayName = 'ProjectModal';

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  closeModal: PropTypes.func,
};
