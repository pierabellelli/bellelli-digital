import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { AboutMe } from '../components/AboutMe'
import { Problems } from '../components/Problems'
import { Services } from '../components/Services'
import { Podcast } from '../components/Podcast'
import { Products } from '../components/Products'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Problems />
        <Services />
        <Podcast />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
