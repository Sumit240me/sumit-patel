import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { defaultProjects } from './data'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'

function App() {
  return <>
    <div className="portfolio-screen">
      <Header />
      <main id="top">
        <Hero />
        <AboutSection />
        <ProjectsSection projects={defaultProjects} />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
