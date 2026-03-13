const steps = [
  {
    step: "1",
    title: "Completezi formularul",
    desc: "Completezi formularul de expediere rapid și simplu."
  },
  {
    step: "2",
    title: "Predai coletul",
    desc: "Predai coletul la oficiu Poșta Română sau curierul vine la tine."
  },
  {
    step: "3",
    title: "Urmărești livrarea",
    desc: "Urmărești stadiul livrării în timp real, online."
  }
]

export default function HowItWorks() {
  return (
    <section className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Cum funcționează
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}