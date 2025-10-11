import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Phani Kumar
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
