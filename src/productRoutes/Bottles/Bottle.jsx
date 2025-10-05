import React from "react";
import { Link } from "react-router-dom";

const Bottle = ({ bottle }) => {
  const { name, rating, features, image, price } = bottle;

  return (
    <Link to={`/bottleDetails/${bottle.id}`}>
      <div className="card w-full sm:w-72 mx-auto mt-6 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl">
        <figure className="p-4">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-contain rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{name}</h2>
          <p className="text-gray-600 mb-2">Rating: {rating} ⭐</p>
          <p className="text-gray-800 font-semibold mb-2">Price: ${price}</p>

          {/* Features displayed as badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {features.map((feature, idx) => (
              <span
                key={idx}
                className="badge badge-outline bg-green-50 text-green-800 border-green-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Bottle;
