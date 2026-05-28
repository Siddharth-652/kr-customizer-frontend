import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Register
        </h2>

        <p className="text-center text-gray-500 mb-8 font-medium">
          Create your KR Customizer account
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register