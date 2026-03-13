import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-8">

        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trimite colete rapid prin Poșta Română
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Livrare națională și internațională simplă, rapidă și sigură. Creează o expediere în câteva minute și urmărește coletul online.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/send">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition shadow-sm">
                Trimite colet
              </button>
            </Link>

            <Link href="/tracking">
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition">
                Tracking colet
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/images/delivery-illustration.png" 
            alt="delivery illustration" 
            className="w-full max-w-md"
          />
        </div>

      </div>

    </section>
  )
}