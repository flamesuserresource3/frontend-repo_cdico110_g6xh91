import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  // If route contains a hash, scroll smoothly to the section
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const onNavClick = (href) => (e) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '#')
      if (location.pathname !== '/') {
        navigate(`/${id}`)
      } else {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-xl text-black">
          Velodent
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onNavClick(item.href)}
              className="text-sm text-black/80 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-sm"
          >
            Book Now
          </a>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors text-sm"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  )
}
