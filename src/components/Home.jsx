import { useEffect } from 'react'
import Spline from '@splinetool/react-spline'

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-black/70 max-w-2xl mx-auto text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient overlay for contrast, does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white"></div>
        {/* content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-black">
              AI Automation for Modern Dental Clinics
            </h1>
            <p className="mt-4 text-black/80 max-w-3xl mx-auto text-sm md:text-lg">
              Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://cal.com/velodent-ogbkfv/20min"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto px-5 py-3 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: 'AI Receptionist & Full Front Desk Automation',
    desc: '24/7 intelligent call handling, intake, and routing with enterprise-grade accuracy.',
    icon: '🤖',
  },
  {
    title: 'Follow-ups and Appointment Reminders',
    desc: 'Automated SMS, email, and voice reminders tailored to each patient.',
    icon: '⏰',
  },
  {
    title: 'Reduce No-Shows / Fill Empty Slots',
    desc: 'Smart waitlist and rebooking flows to keep your schedule full.',
    icon: '📅',
  },
  {
    title: 'Booking, Rescheduling, and Cancellations',
    desc: 'Frictionless booking experiences that work across channels.',
    icon: '✅',
  },
  {
    title: 'Insurance Verification and Payment Processing',
    desc: 'Automate insurance checks and simplify collections.',
    icon: '💳',
  },
  {
    title: 'Lead Generation from Ads',
    desc: 'Capture, qualify, and convert ad traffic into booked appointments.',
    icon: '📈',
  },
  {
    title: 'Smart Recall Calls',
    desc: '1 day / 1 hour before appointments; 6-month recalls for cleanings or braces.',
    icon: '📞',
  },
  {
    title: 'AI Time Calculation',
    desc: 'Precision scheduling like braces tightening reminders and chair-time optimization.',
    icon: '⌛',
  },
  {
    title: '2× ROI Guarantee',
    desc: 'Guaranteed performance: double your ROI or we make it right.',
    icon: '💠',
  },
]

function Services() {
  return (
    <section id="services" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Automation, handled."
          subtitle="A premium, end-to-end system covering every front-desk workflow."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-black/10 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
              style={{ backdropFilter: 'saturate(1.2)' }}
            >
              <div className="text-3xl mb-3" aria-hidden>{s.icon}</div>
              <h3 className="font-semibold text-black mb-2">{s.title}</h3>
              <p className="text-black/70 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 h-px bg-black/10 w-0 group-hover:w-full transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: 'Dr. Alicia Park',
    clinic: 'Park Dental Group',
    quote:
      'Velodent trimmed our call volume by 62% in 30 days and filled gaps we never could. Patients love it.',
  },
  {
    name: 'Dr. Miguel Santos',
    clinic: 'Harbor Orthodontics',
    quote:
      'No-shows dropped by half. The recall system alone paid for the platform in week two.',
  },
  {
    name: 'Sarah Chen',
    clinic: 'Riverview Family Dental',
    quote:
      'Insurance and payments are finally smooth. Clean, compliant, reliable — exactly what we needed.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Trusted by modern dental teams" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-black/10 rounded-xl p-6 bg-white">
              <p className="text-black/90 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm text-black/70">
                <span className="font-medium text-black">{t.name}</span> · {t.clinic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: 'How does Velodent automate front-desk operations?',
    a: 'We deploy AI agents for intake, scheduling, follow-ups, and call routing — fully integrated with your systems.',
  },
  {
    q: 'Is Velodent’s AI secure and compliant?',
    a: 'Yes. Enterprise-grade security, data minimization, access controls, and strict compliance standards.',
  },
  {
    q: 'How does the 2× ROI guarantee work?',
    a: 'We align on clear metrics. If we don’t deliver at least 2× ROI, we work until we do.',
  },
  {
    q: 'Can it integrate with existing dental software?',
    a: 'We integrate with leading dental practice systems and can scope custom connectors as needed.',
  },
  {
    q: 'How are follow-ups and recalls managed automatically?',
    a: 'Smart cadences (1 day/1 hour before) and 6-month recalls keep chairs filled without manual work.',
  },
  {
    q: 'Is there human support available?',
    a: 'Yes. Dedicated support with escalation paths and on-call coverage.',
  },
]

function FAQ() {
  useEffect(() => {
    // Ensure hash scroll works when arriving on /#faq
    if (window.location.hash === '#faq') {
      const el = document.querySelector('#faq')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="faq" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="divide-y divide-black/10 border border-black/10 rounded-xl overflow-hidden">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-black/5">
              <summary className="list-none cursor-pointer select-none px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">
                <span className="text-black font-medium mr-4">{f.q}</span>
                <span className="text-black/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 md:px-6 pb-5 text-black/80 text-sm leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <section id="about" className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Built for high-performing clinics"
            subtitle="Modern, minimal, enterprise-grade automation tailored to dentistry."
          />
          <div className="max-w-3xl mx-auto text-center text-black/80 leading-relaxed">
            Velodent replaces busywork with compliant AI — from first touch to payment — so your team can focus on care.
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <FAQ />
    </main>
  )
}
