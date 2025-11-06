import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

const BagDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [disable, setDisable] = useState(false);

  const bag = useLoaderData();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) return; // optionally show a toast

    const newItem = {
      // IMPORTANT: use "email" to match server's query field
      email: user.email,
      ...bag,
    };

    try {
      setDisable(true);
      await addToCart(newItem); // addToCart updates state
      console.log("Item added to cart!");
    } catch (err) {
      console.error("Failed to add to cart:", err);
    } finally {
      setDisable(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!bag) {
    return <p className="text-center text-gray-500 mt-10">Bag not found</p>;
  }

  const { name, image, price, rating, features, description } = bag;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-orange-50 py-12 px-6 flex justify-center">
      <div className="max-w-5xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-contain rounded-lg drop-shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-2">${price}</p>
          <p className="text-gray-500 mb-4">Rating: {rating} ⭐</p>
          <p className="text-gray-600 mb-6">
            {description ||
              "This premium steel body water bottle is designed to keep your drinks hot or cold for hours. Perfect for work, travel, or outdoor adventures."}
          </p>

          <h2 className="text-lg font-semibold mb-2">Features:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {features?.map((f, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-green-50 border border-green-300 text-green-700"
              >
                {f}
              </span>
            ))}
          </div>

          <button
            onClick={handleGoBack}
            className="btn px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition-all duration-700 ease-in-out hover:scale-110 mr-4"
          >
            Back
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!user || disable}
            className="btn px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-all duration-700 ease-in-out hover:scale-110"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagDetails;
