import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Products } from '../components/Products'
import { AboutMe } from '../components/AboutMe'
import { BlogPreview } from '../components/BlogPreview'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

export function LandingPage() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Products />
        <AboutMe />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
