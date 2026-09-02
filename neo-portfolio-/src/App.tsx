import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import { certifications, journey, profile, projects, skillGroups } from './data/portfolio'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [message, setMessage] = useState('')

  const toggleTheme = () => { setDark(!dark); document.documentElement.classList.toggle('dark', !dark) }

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#top" onClick={() => setMenuOpen(false)}><span className="brand-mark">N</span><span>Neo<span className="muted">/</span>Monamatha</span></a>
      <button className="icon-button mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {[['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'journey'], ['Certifications', 'certifications'], ['GitHub', 'github'], ['Contact', 'contact']].map(([label, href]) => <a key={label} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <button className="icon-button" aria-label="Toggle colour theme" onClick={toggleTheme}>{dark ? <Sun /> : <Moon />}</button>
      </div>
    </nav></header>

    <main id="top">
      <section className="hero page-section">
        <div className="hero-copy"><p className="eyebrow">South Africa · Open to opportunity</p><h1>Business-minded.<br /><em>Technology-driven.</em></h1><p className="hero-lede">I build practical technology solutions that connect business problems with software, data and modern technology.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight /></a><a className="button secondary" href="#contact">Start a conversation</a>{profile.cvAvailable ? <a className="button secondary" href={profile.cvPath} download>Download CV <ArrowUpRight /></a> : <span className="button disabled" aria-disabled="true">CV coming soon</span>}</div><div className="social-links"><a href={profile.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub</a>{profile.linkedinUrl ? <a href={profile.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a> : <span className="muted">LinkedIn profile coming soon</span>}</div></div>
        <div className="hero-aside"><div className="coordinate">26°12′S<br />28°02′E</div><div className="signal"><span /> Building at the intersection<br />of people, process & platform</div></div>
      </section>

      <section className="page-section intro" id="about"><div className="section-label">01 / About</div><div><h2>Technology should make<br /><span>complex things clearer.</span></h2><p className="body-copy">I am completing a Bachelor of Information Technology in Business Information Technology, specialising in Business Information Systems. My work sits where business understanding, problem solving and software development meet.</p><p className="body-copy">I am developing across software engineering, information systems, business analysis, cloud, data, AI, digital transformation, cybersecurity and blockchain. I care about understanding the real problem before reaching for a technical solution.</p></div></section>

      <section className="page-section" id="skills"><div className="section-label">02 / Capabilities</div><div className="section-content"><h2>A growing toolkit,<br /><span>grounded in purpose.</span></h2><div className="skill-grid">{skillGroups.map(group => <div className="skill-group" key={group.label}><h3>{group.label}</h3>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>)}</div></div></section>

      <section className="page-section projects-section" id="projects"><div className="section-label">03 / Selected work</div><div className="section-content"><div className="section-heading"><h2>Projects with a<br /><span>problem behind them.</span></h2><p>Academic work and learning experiments, presented honestly and documented as they mature.</p></div><div className="project-list">{projects.map((project, index) => <article className="project" key={project.name}><div className="project-index">0{index + 1}</div><div className="project-main"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-detail"><strong>Problem</strong><p>{project.problem}</p><strong>Solution</strong><p>{project.solution}</p><strong>Target users</strong><p>{project.targetUsers}</p>{project.architecture && <><strong>Architecture</strong><p>{project.architecture}</p></>}{project.keyFeatures && <><strong>Key features</strong><p>{project.keyFeatures.join(' · ')}</p></>}</div><div className="tag-row">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span className="status">{project.status}</span>{project.repositoryUrl ? <a href={project.repositoryUrl}>View repository <ArrowUpRight /></a> : <span className="muted">Repository link to be added</span>}{project.demoUrl && <a href={project.demoUrl}>Live demo <ArrowUpRight /></a>}{project.documentationUrl && <a href={project.documentationUrl}>Documentation <ArrowUpRight /></a>}</div></div><div className="project-highlights"><span>Focus</span>{project.highlights.map(item => <strong key={item}>{item}</strong>)}</div></article>)}</div></div></section>

      <section className="page-section journey" id="journey"><div className="section-label">04 / Journey</div><div className="section-content"><h2>Learning in public,<br /><span>one step at a time.</span></h2><div className="timeline">{journey.map(([year, title, detail]) => <div className="timeline-row" key={title}><span>{year}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div></div></section>

      <section className="page-section credentials" id="certifications"><div className="section-label">05 / Credentials</div><div className="section-content"><h2>Curiosity with<br /><span>receipts to follow.</span></h2><div className="credential-list">{certifications.map(certification => <div className="credential" key={certification.name}><div><h3>{certification.name}</h3><p>{certification.provider}</p></div><span>{certification.credentialUrl ? <a href={certification.credentialUrl}>Credential</a> : certification.detail}</span></div>)}</div></div></section>

      <section className="page-section github-section" id="github"><div className="section-label">06 / Open source</div><div className="section-content"><h2>Work in progress,<br /><span>in the open.</span></h2><p className="body-copy">GitHub is where I keep projects, experiments and technical work as they take shape. Repository links are added to each project when they are ready to share.</p><a className="button secondary" href={profile.githubUrl} target="_blank" rel="noreferrer"><Github /> Visit GitHub profile <ArrowUpRight /></a></div></section>

      <section className="contact page-section" id="contact"><div className="section-label">07 / Contact</div><div><h2>Have a real problem<br /><span>worth solving?</span></h2><p className="body-copy">I am open to graduate and junior opportunities across software, systems, cloud, data and technology consulting.</p><div className="resume-note">{profile.cvAvailable ? <a className="button secondary" href={profile.cvPath} download>Download CV <ArrowUpRight /></a> : <span className="muted">CV download will appear here when the document is added to <strong>public/cv.pdf</strong>.</span>}</div><form onSubmit={event => { event.preventDefault(); setMessage('Thanks. The form is ready to connect to a provider.'); }}><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label><label>Subject<input required name="subject" /></label><label>Message<textarea required name="message" rows={3} /></label><button className="button primary" type="submit">Send enquiry <ArrowUpRight /></button>{message && <p role="status" className="form-message">{message}</p>}</form></div></section>
    </main>
    <footer><span>© 2026 Neo Monamatha</span><span>Building technology. Solving problems. Creating impact.</span><div className="footer-links"><a href={profile.githubUrl}>GitHub <ArrowUpRight /></a>{profile.linkedinUrl && <a href={profile.linkedinUrl}>LinkedIn <ArrowUpRight /></a>}{profile.email && <a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a>}</div></footer>
  </div>
}

export default App