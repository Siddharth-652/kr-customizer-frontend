import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-sm bg-white">
      
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-yellow-400">kr</span>customizer
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium text-gray-700">
        <li><Link to="/" className="hover:text-yellow-500">Showcase</Link></li>
        <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
        <li><Link to="/casestudies" className="hover:text-yellow-500">Case Studies</Link></li>
        <li><Link to="/blog" className="hover:text-yellow-500">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
          Login
        </Link>
        <button className="bg-yellow-400 text-black text-sm font-semibold px-5 py-2 rounded hover:bg-yellow-500">
          Get a demo
        </button>
      </div>

    </nav>
  )
}

export default Navbar