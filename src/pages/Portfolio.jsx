import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    { title: "Project 1", image: "/project1.jpg", github: "#", live: "#" },
    { title: "Project 2", image: "/project2.jpg", github: "#", live: "#" },
  ];

  return (
    <section className="portfolio"> {/* Added className */}
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
