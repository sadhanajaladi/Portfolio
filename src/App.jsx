import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <header className="header">
        <h2>JALADI SADHANA</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>I'm Sadhana</h1>
        <p>Java Full Stack Developer </p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student specializing in AI & ML with strong skills
          in Java and backend development. I build applications using JDBC,
          Servlets, and MySQL.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
  <h2>Skills</h2>

  <div className="skills-container">

    <div className="skill-box">
      <h3>Programming</h3>
      <p>Java</p>
    </div>

    <div className="skill-box">
      <h3>Backend</h3>
      <p>JDBC, Servlets</p>
    </div>

    <div className="skill-box">
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-box">
      <h3>Database</h3>
      <p>MySQL</p>
    </div>

    <div className="skill-box">
      <h3>Tools</h3>
      <p>Git, GitHub</p>
    </div>

  </div>
</section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>CRM System</h3>
          <p>
            Built a web application to manage customer data using Java,
            Servlets, JDBC, and MySQL.
          </p>
        </div>

        <div className="card">
          <h3>Diabetes Prediction</h3>
          <p>
            Developed ML models using Random Forest and XGBoost for early
            diagnosis.
          </p>
        </div>
      </section>

      {/* Contact */}
  <section id="contact">
  <h2>Contact</h2>

  <div className="contact-container">

    <p>📧 <span>sadhanajaladi13@gmail.com</span></p>
    <p>📞 <span>6301832132</span></p>

    <div className="contact-links">
      <a href="https://www.linkedin.com/in/jaladi-sadhana-379745285/">🔗 LinkedIn</a>
      <a href="https://github.com/sadhanajaladi">💻 GitHub</a>
    </div>

  </div>
</section>

      <footer>
        <p>© 2026 Sadhana</p>
      </footer>

    </div>
  );
}

export default App;