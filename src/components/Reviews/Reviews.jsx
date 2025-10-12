import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-16 w-full bg-gradient-to-r from-purple-100 via-white to-purple-100 py-12">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        What Our Customers Say 💬
      </h2>

      <div className="carousel w-full mx-auto">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full flex justify-center"
          >
            {/* Review Card */}
            <div className="max-w-xl flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg text-center mx-4">
              {/* Reviewer Image */}
              <img
                src={review.personImage}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-purple-500 mb-4 object-cover"
              />

              {/* Reviewer Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>

              {/* Rating */}
              <div className="flex my-2">
                {[...Array(5)].map((_, i) =>
                  i < review.reviewer_rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  )
                )}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic">"{review.review}"</p>
            </div>

            {/* Carousel Controls */}
            <div className="absolute inset-y-1/2 -translate-y-1/2 flex justify-between w-full px-6">
              <a
                href={`#slide${index === 0 ? reviews.length : index}`}
                className="btn btn-circle bg-purple-500 border-none text-white hover:bg-purple-600"
              >
                ❮
              </a>
              <a
                href={`#slide${index + 2 > reviews.length ? 1 : index + 2}`}
                className="btn btn-circle bg-purple-500 border-none text-white hover:bg-purple-600"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;