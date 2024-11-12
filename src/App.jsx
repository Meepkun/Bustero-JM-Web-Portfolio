import './assets/App.css'
import HomeSection from './components/HomeSection'
import NavBarSection from './components/NavBarSection'
import SkillsSection from './components/SkillsSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  
  return (
    <>
      <NavBarSection/>
      <HomeSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App;
