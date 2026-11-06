import Arrow from './Arrow'

function ProjectCard({ project, index }) {
  return <article className="project-card">
    <a className={`project-image project-image-link color-${index % 3}`} href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} project`}>
      {project.image.startsWith('http') || project.image.startsWith('/') ? <img src={project.image} alt={`${project.title} screenshot`} /> : <span>{project.image}</span>}
    </a>
    <div className="project-info">
      <div><h3>{project.title}</h3><p>{project.description}</p></div>
      <div className="project-bottom"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}> <Arrow /></a></div>
    </div>
  </article>
}

export default function ProjectsSection({ projects }) {
  return <section className="section" id="work">
    <div className="section-heading">
      <div><p className="section-number">02 / Selected work</p><h2>A few things I've made.</h2></div>
    </div>
    <div className="projects">{projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />)}</div>
  </section>
}