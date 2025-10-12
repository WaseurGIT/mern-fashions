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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await loginUser(email, password).then(async (res) => {
      const user = res.user;
      const date = new Date();
      const bangladeshTime = new Date(date.getTime() + 6 * 60 * 60 * 1000);
      const lastLoggedIn = bangladeshTime.toISOString();
      console.log(user);

      await fetch(`http://localhost:5000/users/${email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ lastLoggedIn }),
      });

      Swal.fire({
        toast: true, // enables toast mode
        position: "top-end", // top-right corner
        icon: "success", // "success", "error", "info", etc.
        title: "Login Successful", // the text you want to show
        showConfirmButton: false,
        timer: 2000, // auto-close after 2 seconds
        timerProgressBar: true, // optional progress bar
        background: "#f0f0f0", // optional: change background
        iconColor: "#4ade80", // optional: change icon color
      });
    });
    form.reset();
    navigate("/");
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      const email = res.user.email;

      const date = new Date();
      const bangladeshTime = new Date(date.getTime() + 6 * 60 * 60 * 1000);
      const lastLoggedIn = bangladeshTime.toISOString();

      const response = await fetch(`http://localhost:5000/users/${email}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lastLoggedIn }),
      });

      const data = await response.json();
      console.log("Database response:", data);

      Swal.fire({
        toast: true, // enables toast mode
        position: "top-end", // top-right corner
        icon: "success", // "success", "error", "info", etc.
        title: "Login Successful", // the text you want to show
        showConfirmButton: false,
        timer: 2000, // auto-close after 2 seconds
        timerProgressBar: true, // optional progress bar
        background: "#f0f0f0", // optional: change background
        iconColor: "#4ade80", // optional: change icon color
      });

      navigate("/");
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-8">
            Welcome Back 👋
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-[1.02]"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg font-semibold bg-white shadow hover:bg-gray-50 transition duration-300"
            >
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>
          </form>

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
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-4/5 h-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
