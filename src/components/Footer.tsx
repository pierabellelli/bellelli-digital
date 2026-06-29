import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Bellelli Digital — Piera Bellelli</span>
        <a href="mailto:ciao@bellelli-digital.it">ciao@bellelli-digital.it</a>
      </div>
    </footer>
  )
}
