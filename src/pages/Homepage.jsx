import About from "../components/HomePage/About"
import Brands from "../components/HomePage/Brands"
import Hero from "../components/HomePage/Hero"
import Services from "../components/HomePage/Services"
import ContactForm from "../components/ContactForm"
import Expectations from "../components/HomePage/Expectations"
import Testimonials from "../components/HomePage/Testimonials"

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Brands />
      <Expectations />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default Homepage