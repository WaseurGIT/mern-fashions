import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/")
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-red-600"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-lg text-gray-700"
      >
        Page not found
      </motion.p>

      <button className="btn btn-error px-5 text-white transition-all duration-700 ease-in-out hover:scale-110" onClick={handleNavigate}>Back To Home</button>
    </div>
  );
};

export default ErrorPage;
