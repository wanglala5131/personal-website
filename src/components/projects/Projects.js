import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../Title';
import { Modal } from '../Modal';
import { Container } from '../Custom';
import { ProjectsSwiper } from './ProjectsSwiper';
import { ProjectModal } from './ProjectModal';
import ProjectData from '../../data/projects.json';

const ProjectsWrapper = styled.div`
  margin: 100px 0;
`;

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = item => {
    setIsModalOpen(true);
    setModalItem(item);
  };

  return (
    <Container>
      <Title>Projects</Title>
      <ProjectsWrapper>
        {ProjectData.map(item => (
          <ProjectsSwiper
            key={item.category}
            item={item}
            openProjectModal={item => openModal(item)}
          />
        ))}
      </ProjectsWrapper>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalItem ? (
          <ProjectModal project={modalItem} closeModal={closeModal} />
        ) : null}
      </Modal>
    </Container>
  );
};
