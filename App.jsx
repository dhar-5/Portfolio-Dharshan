import profilePhoto from "./photo.jpeg";

const skills = [
  {
    title: "Programming",
    items: ["Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Django", "Bootstrap", "Git", "GitHub", "VS Code"],
  },
  {
    title: "AI / Data",
    items: ["Scikit-learn", "Pandas", "NumPy", "NLP Basics"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MS SQL"],
  },
];

const internships = [
  {
    company: "Gradtwin (OPC) Private Limited",
    role: "Machine Learning Intern",
    period: "Jan 2026 - Apr 2026",
    points: [
      "Worked on real-time datasets for preprocessing, cleaning, and feature engineering.",
      "Developed and evaluated machine learning models using Python, Pandas, NumPy, and Scikit-learn.",
    ],
  },
  {
    company: "Nixzy Tech Solutions",
    role: "Web Development Intern",
    period: "Jun 2025 - Jul 2025",
    points: [
      "Developed responsive web pages using HTML and CSS.",
      "Assisted in designing user-friendly interfaces and improving website layouts.",
    ],
  },
];

const projects = [
  {
    name: "Summarix",
    label: "AI Content Summarization Web App",
    tech: "Python, Django, React.js, OpenAI API, SQLite",
    tag: "Full Stack",
    description:
      "Built a full-stack application that summarizes text, PDFs, images, and videos through OpenAI-powered workflows.",
  },
  {
    name: "Movie Success/Failure Prediction",
    label: "Machine Learning Model",
    tech: "Python, Scikit-learn, Pandas, NumPy",
    tag: "Machine Learning",
    description:
      "Created a prediction pipeline for movie performance using classification techniques and feature-driven modeling.",
  },
  {
    name: "VoiceQuery",
    label: "AI Speech-to-SQL Database System",
    tech: "Python, Speech Recognition, NLP, MySQL, SQL",
    tag: "AI + Database",
    description:
      "Converted speech input into SQL queries, enabling dynamic table fetching and smoother database interaction.",
  },
];

const education = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Information Technology",
    place: "University College of Engineering, Nagercoil",
    detail: "CGPA: 7.0",
    active: true,
  },
  {
    year: "2021 - 2022",
    title: "XII Higher Secondary",
    place: "Hebron Matric Higher Secondary School",
    detail: "Percentage: 89%",
    active: false,
  },
  {
    year: "2020",
    title: "X Secondary Education",
    place: "Hebron Matric Higher Secondary School",
    detail: "Percentage: 89%",
    active: false,
  },
];

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=dharshandharsh2004@gmail.com` +
      `&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Dharshan K</div>
          <div className="nav-links">
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="profile-row">
              <img className="profile-photo" src={profilePhoto} alt="Dharshan K" />
            </div>
            <p className="eyebrow">Python Developer | IT Student | AI Enthusiast</p>
            <h1>Building practical AI and web solutions with clean, focused execution.</h1>
            <p className="hero-text">
              Motivated fresher with hands-on project work in backend development,
              machine learning, and AI-driven products. I enjoy turning ideas into
              useful applications and growing through real-world problem solving.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#education">
                View Portfolio
              </a>
              <a className="button secondary" href="/DHARSHAN_K_Resume.pdf" download>
                Download Resume
              </a>
            </div>

            <div className="contact-strip">
              <span>Email: dharshandharsh2004@gmail.com</span>
              <span>Phone: 7708626696</span>
              <span>University College of Engineering, Nagercoil</span>
            </div>
          </div>
        </div>
      </header>

      <main className="content-stack">
        <section className="section about-education-section" id="education">
          <div className="about-education-grid">
            <div className="about-column">
              <div className="light-heading">
                <h2>About Me</h2>
              </div>
              <div className="about-copy">
                <p>
                  I am an Information Technology student with a CGPA of 7.0, dedicated to
                  building practical, user-friendly applications and solving real-world problems.
                </p>
                <p>
                  My technical strengths are in Python, SQL, Django, React.js, and machine learning.
                  I enjoy creating AI-powered tools and web applications that make technology more useful.
                </p>
              </div>
            </div>

            <div className="education-column">
              <div className="light-heading">
                <h2>Education</h2>
              </div>
              <div className="education-timeline">
                {education.map((item) => (
                  <article
                    className={`timeline-education-item${item.active ? " active" : ""}`}
                    key={`${item.year}-${item.title}`}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-track" />
                    <div className="timeline-education-content">
                      <p className="timeline-year">{item.year}</p>
                      <h3>{item.title}</h3>
                      <p>{item.place}</p>
                      <span className="education-badge">{item.detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Technical Toolkit</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skills-cloud">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Internships</h2>
          </div>
          <div className="timeline">
            {internships.map((item) => (
              <article className="timeline-card" key={item.company}>
                <div className="timeline-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Work</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-tag">{project.tag}</span>
                </div>
                <p className="project-label">{project.label}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.tech}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div>
            <p className="section-kicker">Contact Me</p>
            <h2>Send Me a Message</h2>
            <p>
              If you would like to contact me for opportunities, internships, or projects,
              send me a message here.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={handleContactSubmit}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Write your message" rows="5" required />
            <button className="button primary" type="submit">
              Send Message
            </button>
            <p className="contact-help">
              This opens Gmail with your message filled in. If Gmail does not open, use
              the email link below.
            </p>
            <a
              className="contact-direct-link"
              href="mailto:dharshandharsh2004@gmail.com?subject=Portfolio%20Inquiry"
            >
              Email directly: dharshandharsh2004@gmail.com
            </a>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
