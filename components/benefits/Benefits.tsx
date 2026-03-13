const benefits = [
  "Rețea națională mare",
  "Prețuri accesibile",
  "Livrare rapidă",
  "Tracking online"
]

export default function Benefits() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          De ce Poșta Română
        </h2>

        {/* Benefits List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-gray-700 font-medium"
            >
              <span className="text-red-600 font-bold text-xl">✔</span>
              {b}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}