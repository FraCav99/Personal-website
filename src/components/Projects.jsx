import projects from './utility/projects.json';
import Project from './utility/Project';
import LinkOut from '../images/link-out.svg';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-wrapper">
        {projects.map(project => (
          <Project
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubRepoUrl={project.githubRepoUrl}
            liveSiteUrl={project.liveSiteUrl}
            image={project.image}
            key={project.id}
          />
        ))}
      </div>
      <a href="https://github.com/FraCav99" className="github-link">
        Other projects available on my
        <span>
          Github <LinkOut className="link-out" />
        </span>
      </a>
    </div>
  );
};

export default Projects;
