import OurJourney from "../components/AboutPage/OurJourney"
import OurClients from "../components/AboutPage/OurClients"
import OurCoreValues from "../components/AboutPage/OurCoreValues"
import OurApproach from "../components/AboutPage/OurApproach"
import Leadership from "../components/AboutPage/Leadership"
import Reviews from "../components/AboutPage/Reviews"
import OurMission from "../components/AboutPage/OurMission"
import AboutHer from "../components/AboutPage/AboutHer"
import ContactForm from "../components/ContactForm"

const About = () => {
  return (
    <div>
      <AboutHer/>
      <OurMission/>
      <OurJourney/>
      <OurCoreValues/>
      <OurApproach/>
      <Leadership/>
      <Reviews/>
      <OurClients/>
      <ContactForm/>
    </div>
  )
}

export default About