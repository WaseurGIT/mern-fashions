import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const userName = form.userName.value;
    const userReview = form.userReview.value;
    const reviewData = { rating, userName, userReview };

    navigate("../Reviews/Reviews.jsx", { state: reviewData });
    console.log("Review submitted successfully!", rating, userName, userReview);
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Write a Review
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Rating
          </label>
          <div className="flex gap-2">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className="hidden"
                  />
                  <FaStar
                    size={28}
                    className={`cursor-pointer transition-colors ${
                      currentRating <= (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="userName"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Your Review
          </label>
          <textarea
            rows="4"
            placeholder="Write your review here..."
            name="userReview"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
