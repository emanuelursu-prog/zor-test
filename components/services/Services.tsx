const services = [
  {
    title: "Livrare națională",
    desc: "Trimite colete oriunde în România"
  },
  {
    title: "Livrare internațională",
    desc: "Expedieri în peste 100 de țări"
  },
  {
    title: "Ridicare de la domiciliu",
    desc: "Curierul vine direct la tine"
  }
]

export default function Services() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Serviciile noastre
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}