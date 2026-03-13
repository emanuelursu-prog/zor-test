export default function CTA() {
  return (
    <section className="w-full bg-red-600 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Trimite colete rapid și sigur
        </h2>

        <p className="text-lg mb-8 opacity-90">
          Creează o expediere în mai puțin de 2 minute și urmărește coletul în
          timp real.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Trimite colet
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition">
            Tracking colet
          </button>
        </div>
      </div>
    </section>
  );
}
