import bannerImg from "/shoe-images/shoe15-removebg-preview.png"; // use transparent background PNG

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 via-white to-orange-50 min-h-screen flex items-center justify-center px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24">
        
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 lg:w-[30rem] lg:h-[30rem]  rounded-full blur-3xl opacity-40"></div>
          <img
            src={bannerImg}
            alt="Shoe"
            className="relative z-10 w-72 h-auto lg:w-[28rem] object-contain drop-shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Step Into <span className="text-green-500">Style</span> &{" "}
            <span className="text-orange-500">Comfort</span>
          </h1>
          <p className="py-6 text-lg text-gray-600 max-w-md">
            Welcome to <span className="text-orange-500 font-semibold">MERN Fashions</span>.  
            Explore and buy your favourite shoes with unbeatable quality & style.  
          </p>
          <button className="btn bg-green-500 text-white px-10 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:bg-green-600 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
