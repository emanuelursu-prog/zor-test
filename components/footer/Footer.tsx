import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          © 2026 Poșta Română
        </p>

        {/* Links */}
        <div className="flex gap-6 text-gray-600 text-sm">
          <Link href="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
          <Link href="/termeni" className="hover:text-red-600 transition">
            Termeni
          </Link>
          <Link href="/suport" className="hover:text-red-600 transition">
            Suport
          </Link>
        </div>

      </div>
    </footer>
  )
}