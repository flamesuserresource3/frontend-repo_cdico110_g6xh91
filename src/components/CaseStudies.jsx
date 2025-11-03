export default function CaseStudies() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Case Studies</h1>
        <p className="mt-4 text-center text-black/70 max-w-3xl mx-auto">
          Real outcomes from modern clinics using Velodent.
        </p>

        {/* Case Study 1 */}
        <article className="mt-14 md:mt-20 border border-black/10 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-semibold">Park Dental Group</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium">Client Overview</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                Multi-location family practice with heavy inbound volume and limited front-desk bandwidth.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Problem</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                High no-shows and long hold times led to missed revenue and frustrated patients.
              </p>
            </div>
            <div>
              <h3 className="font-medium">AI Solution</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                AI receptionist with recall cadences and smart rescheduling. Integrated insurance verification.
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">-52%</div>
              <div className="text-sm text-black/70">No-shows</div>
            </div>
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">+31%</div>
              <div className="text-sm text-black/70">Chairs filled</div>
            </div>
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">2.7×</div>
              <div className="text-sm text-black/70">ROI in 60 days</div>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className="mt-10 border border-black/10 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-semibold">Harbor Orthodontics</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium">Client Overview</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                Orthodontic clinic with frequent braces adjustments and variable chair-time.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Problem</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                Hard to predict appointment duration; frequent last-minute cancellations.
              </p>
            </div>
            <div>
              <h3 className="font-medium">AI Solution</h3>
              <p className="text-black/70 mt-2 text-sm leading-relaxed">
                AI time calculation for treatment stages; proactive rescheduling to fill vacated slots.
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">-38%</div>
              <div className="text-sm text-black/70">Cancellations</div>
            </div>
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">+22%</div>
              <div className="text-sm text-black/70">Utilization</div>
            </div>
            <div className="border border-black/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-semibold">2.3×</div>
              <div className="text-sm text-black/70">ROI in 45 days</div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
