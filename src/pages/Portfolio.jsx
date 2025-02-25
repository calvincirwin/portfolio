import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    { title: "Redux Counter", image: "/projects/redux.png", github: "https://github.com/calvincirwin/redux-counter", live: "https://calvincirwin.github.io/redux-counter/" },
    { title: "Read Me Generator", image: "/project2.jpg", github: "https://github.com/calvincirwin/professional-readme-generator-automation"}title: '},
  ];
  const projects = [
    { 
        title: "Redux Counter", 
        image: "/projects/redux.png", 
        github: "https://github.com/calvincirwin/redux-counter", 
        live: "https://calvincirwin.github.io/redux-counter/"
    },
    { 
        title: "Weather Dashboard", 
        image: "/projects/weather-dashboard.png", 
        github: "https://github.com/calvincirwin/weather-dashboard",
			live: "https://weather-dashboard-frontend-47f9.onrender.com/"

    },
    { 
        title: "Vehicle Builder and Selector", 
        image: "/project2.jpg", 
        github: "https://github.com/calvincirwin/vehichle-builder-and-selector"
    },
    { 
        title: "Social Networking API", 
        image: "/social-networking.jpg", 
        github: "https://github.com/calvincirwin/social-networking-api"
    },
    { 
        title: "Employee Tracker CMS", 
        image: "/projects/employee-tracker-cms.png", 
        github: "https://github.com/calvincirwin/employee-tracker-cms"
    },
    { 
        title: "Professional README Generator", 
        image: "/projects/readme.png", 
        github: "https://github.com/calvincirwin/professional-readme-generator-automation"
    }
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
