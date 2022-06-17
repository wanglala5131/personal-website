import styled from 'styled-components';
import { Title } from '../Title';
import { Container } from '../Custom';
import { ProjectsSwiper } from './ProjectsSwiper';
import ProjectData from '../../data/projects.json';

const ProjectsWrapper = styled.div`
  margin: 100px 0;
`;

export const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectsWrapper>
        {ProjectData.map(item => (
          <ProjectsSwiper key={item.category} item={item} />
        ))}
      </ProjectsWrapper>
    </Container>
  );
};
