export default function Project({ title, image, github, live }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </p>
      </div>
    );
  }
  