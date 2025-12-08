import { Link } from "react-router-dom";
import bgImageSignIn from './../../assets/bgSignUp.jpg'


export default function SignUp() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center bg-cover bg-center bg-no-repeat justify-center p-6"
            style={{ backgroundImage: `url(${bgImageSignIn})` }}
        >

            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 w-full max-w-md shadow-xl">

                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Create Account
                </h2>

                <form className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-all"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-300 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg py-3 transition-all duration-200"
                    >
                        Create Account
                    </button>

                </form>

                {/* Link to login */}
                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link to="/signIn" className="text-sky-400 hover:text-sky-300 font-semibold">
                        Sign in
                    </Link>
                </p>

            </div>
        </div>
    );
}
