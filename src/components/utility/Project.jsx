import GithubSvg from '../../images/github-alt.svg';
import LinkOut from '../../images/link-out.svg';

const Project = ({
  title,
  description,
  tags,
  githubRepoUrl,
  liveSiteUrl,
  image,
}) => {
  return (
    <div className="project">
      <div className="image-container">
        <img src={require('../../images/' + image)} alt="project image" />
      </div>
      <div className="info-container">
        <header className="main-info">
          <h3>{title}</h3>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                #{tag}
              </span>
            ))}
          </div>
        </header>
        <p className="description">{description}</p>
        <div className="links-container">
          <a href={githubRepoUrl}>
            <GithubSvg className="github-alt" />
          </a>
          <a href={liveSiteUrl}>
            <LinkOut className="link-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
