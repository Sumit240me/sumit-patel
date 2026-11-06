const certificates = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL · IIT Kharagpur',
    description: 'Elite + Silver Medal with a score of 87%.',
    file: '/Java.png',
    type: 'image',
  },
  {
    title: 'LeetCode',
    issuer: 'Problem solving',
    description: 'Solved 300+ problems to strengthen data structures and algorithms.',
    file: '/Leetcode.png',
    type: 'image',
    link: 'https://leetcode.com/u/sumit_patel240/',
  },
  {
    title: 'SQL',
    issuer: 'Database fundamentals',
    description: 'Certificate covering SQL queries and relational database concepts.',
    file: '/SQL.png',
    type: 'image',
  },
]

function CertificateCard({ certificate }) {
  return <a className="certificate-card" href={certificate.link || certificate.file} target="_blank" rel="noreferrer">
    {certificate.type === 'image'
      ? <img src={certificate.file} alt={`${certificate.title} certificate`} />
      : <div className="certificate-pdf" aria-label="Open SQL certificate PDF"><span>PDF</span><strong>SQL certificate</strong></div>}
    <div className="certificate-info">
      <p className="entry-date">{certificate.issuer}</p>
      <h3>{certificate.title}</h3>
      <p>{certificate.description}</p>
    </div>
  </a>
}

export default function ResumeSection() {
  return <section className="section resume" id="resume">
    <div className="resume-heading"><p className="section-number">03 / Background</p><a className="resume-download" href="/gen-ai.pdf" download="Sumit-Patel-Resume.pdf">Download resume as PDF</a></div>
    <div className="resume-grid">
      <div><h2>Education</h2><div className="entry"><p className="entry-date">Aug. 2023 - 2027</p><h3>B.Tech in Computer Science and Engineering</h3><p>Oriental Institute of Science and Technology · CGPA 7.96/10</p></div><div className="entry"><p className="entry-date">2022</p><h3>Class XII · CBSE</h3><p>Rao's Rukmani Devi Public School · 85.4%</p></div><div className="entry"><p className="entry-date">2020</p><h3>Class X · CBSE</h3><p>Rao's Rukmani Devi Public School · 88.17%</p></div></div>
      <div><h2>Achievements</h2><div className="entry"><p className="entry-date">Hackathons</p><h3>Smart India Hackathon</h3><p>Participated in Smart India Hackathon and college-level hackathons.</p></div></div>
      <div className="certificates"><h2>Certificates</h2><div className="certificate-list">{certificates.map((certificate) => <CertificateCard key={certificate.title} certificate={certificate} />)}</div></div>
    </div>
  </section>
}