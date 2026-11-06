import Arrow from './Arrow'

export default function Header() {
  return <header className="nav">
    <a className="wordmark" href="#top">SP<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#resume">Resume</a>
    </nav>
    <a className="contact-link" href="mailto:sp487330@gmail.com">Let's talk <Arrow /></a>
  </header>
}