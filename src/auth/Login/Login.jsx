import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../../src/assets/LoginLottie.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        // icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    form.reset();
    navigate("/");
  };

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            Welcome Back 👋
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-md"
            >
              Login
            </button>
            <button
              type="submit"
              className="btn w-full py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-md"
              onClick={handleGoogleSignIn}
            >
              <span className="flex items-center gap-1 justify-center">
                <FcGoogle />
                Google
              </span>
            </button>
          </form>

          {/* Extra Link */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-purple-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
