import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    { title: "Reduct Counter", image: "/reduct.png", github: "https://github.com/calvincirwin/redux-counter", live: "https://calvincirwin.github.io/redux-counter/" },
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
