import bannerImg from "/shoe-images/shoe15-removebg-preview.png"; // use transparent background PNG

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 via-white to-orange-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 sm:gap-12 lg:gap-24">
        
        <div className="relative flex justify-center items-center">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-[30rem] lg:h-[30rem] rounded-full blur-3xl opacity-40"></div>
          <img
            src={bannerImg}
            alt="Shoe"
            className="relative z-10 w-40 sm:w-56 md:w-72 lg:w-[28rem] h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

        <div className="text-center lg:text-left px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Step Into <span className="text-green-500">Style</span> &{" "}
            <span className="text-orange-500">Comfort</span>
          </h1>
          <p className="py-4 sm:py-6 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Welcome to <span className="text-orange-500 font-semibold">MERN Fashions</span>.  
            Explore and buy your favourite shoes with unbeatable quality & style.  
          </p>
          <button className="btn bg-green-500 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg shadow-lg hover:scale-105 hover:bg-green-600 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
