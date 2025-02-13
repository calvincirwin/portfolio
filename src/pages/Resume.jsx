export default function Resume() {
    return (
      <section className="resume">
        <h2>Resume</h2>
  
        {/* Download Button */}
        <a href="/resume.pdf" download className="resume-download">Download Resume</a>
  
        {/* List of Proficiencies */}
        <h3>Proficiencies</h3>
        <ul className="resume-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB & SQL</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
        </ul>
      </section>
    );
  }
  