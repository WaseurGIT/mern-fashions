const SectionHeader = ({ title }) => {
  return (
    <div className="text-center py-8 px-4 sm:px-6 md:px-0">
      <h1 className="text-gray-700 text-3xl sm:text-4xl md:text-5xl font-bold border-2 border-x-0 inline-block py-2 border-orange-400">
        {title}
      </h1>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        Explore our exclusive collection of {title.toLowerCase()}.
      </p>
    </div>
  );
};

export default SectionHeader;
