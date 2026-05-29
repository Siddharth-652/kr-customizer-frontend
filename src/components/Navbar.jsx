import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
     <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

    <div className="flex items-center justify-center w-full md:w-auto mb-3 md:mb-0">
          <span className="text-lg md:text-2xl font-bold text-yellow-400">
            kr</span><span className="text-2xl md:text-3xl font-bold text-gray-900">customizer</span>
        </div>

    <ul className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
          <li><Link to="/" className="hover:text-yellow-500">Showcase</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">AboutUs</Link></li>
          <li><Link to="/casestudies" className="hover:text-yellow-500">CaseStudies</Link></li>
          <li><Link to="/blog" className="hover:text-yellow-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>

        {/* Buttons */}
    <div className="flex items-center gap-3 ml-2 md:ml-4">
  <Link
  to="/login"
  className="border-2 border-yellow-400 text-yellow-500 text-xs md:text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
>
  Login
</Link>

  <button className="hidden lg:block bg-yellow-400 text-black text-sm font-semibold px-4 lg:px-5 py-2 rounded hover:bg-yellow-500">
    GetDemo
  </button>
</div>
      </div>
    </nav>
  )
}
export default Navbar