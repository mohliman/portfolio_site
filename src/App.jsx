import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProjectSection from "./components/ProjectSection"
import SkillSection from "./components/SkillSection"

function App() {

  return (
    <div className="bg-primary max-h-auto text-white text-body-text font-spaceGrotesk">
      <div className="w-[96%] mx-auto md:max-w-[1000px]">
        <Hero/>
        <SkillSection/>
        <ProjectSection/>
      </div>
      <div className="bg-dark-gray">
        <div className="w-[96%] mx-auto md:max-w-[1000px]">
          <ContactForm/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
