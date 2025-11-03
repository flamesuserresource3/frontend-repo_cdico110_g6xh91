import { useState } from 'react'

function Metric({ label, value, hint }) {
  return (
    <div className="border border-black/10 rounded-xl p-5 bg-white">
      <div className="text-sm text-black/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-black">{value}</div>
      {hint && <div className="mt-1 text-xs text-black/50">{hint}</div>}
    </div>
  )
}

function MiniBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value)) || 1
  return (
    <div className="border border-black/10 rounded-xl p-5 bg-white">
      <div className="text-sm text-black/60 mb-3">Weekly Bookings</div>
      <div className="flex items-end gap-2 h-32">
        {data.map((d) => (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-black/80 rounded"
              style={{ height: `${(d.value / max) * 100}%` }}
              title={`${d.label}: ${d.value}`}
            ></div>
            <div className="text-[10px] text-black/60">{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoggedIn(true)
      setLoading(false)
    }, 600)
  }

  if (!loggedIn) {
    return (
      <main className="min-h-[70vh] bg-white text-black flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm border border-black/10 rounded-2xl p-6 bg-white">
          <h1 className="text-2xl font-semibold mb-1">Client Login</h1>
          <p className="text-sm text-black/70 mb-6">Access your Velodent dashboard.</p>
          <label className="block text-sm text-black/80">Email</label>
          <input
            type="email"
            required
            className="mt-1 w-full border border-black/20 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="you@clinic.com"
          />
          <label className="block text-sm text-black/80 mt-4">Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full border border-black/20 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="••••••••"
          />
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="bg-white text-black">
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Dashboard</h1>
        <p className="text-black/70 mt-1">Sample analytics and performance metrics.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Metric label="Monthly Bookings" value="482" hint="+18% vs last month" />
          <Metric label="No-Show Rate" value="2.9%" hint="-1.1 pts" />
          <Metric label="Avg. Response" value="7s" hint="AI receptionist" />
          <Metric label="Projected ROI" value="2.4×" hint="60-day window" />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <MiniBarChart
            data={[
              { label: 'Mon', value: 62 },
              { label: 'Tue', value: 74 },
              { label: 'Wed', value: 81 },
              { label: 'Thu', value: 65 },
              { label: 'Fri', value: 72 },
              { label: 'Sat', value: 41 },
              { label: 'Sun', value: 24 },
            ]}
          />
          <div className="border border-black/10 rounded-xl p-5 bg-white md:col-span-2">
            <div className="text-sm text-black/60 mb-3">Conversation Quality</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span>Resolved without human</span>
                <span className="font-medium">78%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Insurance verified</span>
                <span className="font-medium">92%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Recall conversion</span>
                <span className="font-medium">34%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CSAT</span>
                <span className="font-medium">4.7/5</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
