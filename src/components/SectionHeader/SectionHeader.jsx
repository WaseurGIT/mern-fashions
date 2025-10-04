const SectionHeader = ({ title }) => {
  return (
    <div className="text-center py-8 bg-base-200">
      <h1 className="text-gray-700 text-3xl font-bold border-2 border-x-0 mx-[580px] py-2 border-orange-400">
        {title}
      </h1>
      <p className="text-gray-600 mt-2">
        Explore our exclusive collection of {title.toLowerCase()}.
      </p>
    </div>
  );
};

export default SectionHeader;
