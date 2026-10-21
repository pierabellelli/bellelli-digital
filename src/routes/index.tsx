import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { SmartWebsite } from '../components/SmartWebsite'
import { AboutMe } from '../components/AboutMe'
import { Problems } from '../components/Problems'
import { Services } from '../components/Services'
import { Products } from '../components/Products'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { Method } from '../components/Method'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

export function LandingPage() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <SmartWebsite />
        <Problems />
        <Services />
        <Products />
        <Method />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
