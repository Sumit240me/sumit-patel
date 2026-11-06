import { skills } from '../data'

export default function AboutSection() {
  return <section className="section split" id="about">
    <p className="section-number">01 / About</p>
    <div>
      <h2>A practical mind with a soft spot for good details.</h2>
      <p>I am a Computer Science and Engineering student at Oriental Institute of Science and Technology. I enjoy turning practical problems into usable products, from travel planning and movie discovery to AI-assisted feedback analysis.</p>
      <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </div>
  </section>
}