import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../../src/assets/LoginLottie.json";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import avatar from "../../../public/avater.png";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must include at least one special character.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else {
      setError("");
    }

    signUp(email, password).then(async (res) => {
      const user = res.user;

      // Set default display pic using Firebase updateProfile
      await updateProfile(user, {
        displayName: name,
        photoURL: avatar,
      });

      // now user.photoURL has the correct value
      const userData = {
        name,
        email,
        photoURL: user.photoURL,
        createdAt: new Date().toISOString(),
      };

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      });

      Swal.fire({
        toast: true, // enables toast mode
        position: "top-end", // top-right corner
        icon: "success", // "success", "error", "info", etc.
        title: "Sign Up Successful", // the text you want to show
        showConfirmButton: false,
        timer: 2000, // auto-close after 2 seconds
        timerProgressBar: true, // optional progress bar
        background: "#f0f0f0", // optional: change background
        iconColor: "#4ade80", // optional: change icon color
      });

      form.reset();
      navigate("/");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
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
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-purple-600" required />
              <p>
                I agree to the{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms & Conditions
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-md"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
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

export default Register;
