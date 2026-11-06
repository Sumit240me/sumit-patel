import Arrow from './Arrow'

export default function Hero() {
  return <section className="hero section">
    <p className="eyebrow reveal">Computer science student · B.Tech 2027</p>
    <h1 className="reveal delay-1">I build useful things for the web.</h1>
    <p className="hero-copy reveal delay-2">I'm <strong>Sumit Patel</strong>, a full-stack developer exploring thoughtful products with the MERN stack, Next.js, and generative AI.</p>
    <div className="hero-actions reveal delay-3">
      <a className="button" href="#work">See my work <Arrow /></a>
      <a className="text-link" href="#about">A little about me ↓</a>
    </div>
    <div className="scribble" aria-hidden="true">✳</div>
  </section>
}