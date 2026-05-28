import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
    <div className="flex items-center shrink-0 mr-4 lg:mr-8">
          <span className="text-lg md:text-2xl font-bold text-yellow-400">
            kr</span><span className="text-2xl md:text-3xl font-bold text-gray-900">customizer</span>
        </div>

        <ul className="flex items-center gap-2 md:gap-4 lg:gap-6 text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">
          <li><Link to="/" className="hover:text-yellow-500">Showcase</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">AboutUs</Link></li>
          <li><Link to="/casestudies" className="hover:text-yellow-500">CaseStudies</Link></li>
          <li><Link to="/blog" className="hover:text-yellow-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden xl:flex items-center gap-4 ml-6">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-yellow-500">Login</Link>
          <button className="bg-yellow-400 text-black text-sm font-semibold px-4 lg:px-5 py-2 rounded hover:bg-yellow-500">
            GetDemo
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar