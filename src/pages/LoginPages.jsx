import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Login
        </h2>
        <p className="text-center text-gray-500 mb-8 font-medium">
          Welcome back to KR Customizer
        </p>

        <form className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
            />
          </div>

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 font-medium">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-yellow-500 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login