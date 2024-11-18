

const Trending = ({brands}) => {
    return (
        <div className="py-8 bg-[#F9FAFB] w-11/12 mx-auto animate__fadeIn animate__delay-2s">
         <div className="text-2xl font-bold text-center mb-6 animate__animated animate__bounce animate__delay-2s animate__infinite">
  Trending Brands
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {brands.slice(0, 3).map((brand) => (
              <div
                key={brand.id}
                className="bg-white p-4 border rounded-lg shadow-md text-center transition transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
              >
                {/* Brand Logo */}
                <img
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} Logo`}
                  className="w-20 h-20 mx-auto mb-4"
                />
                {/* Brand Name */}
                <h3 className="text-lg font-bold text-gray-800">
                  {brand.brand_name}
                </h3>
                {/* Category */}
                <p className="text-sm text-gray-500">{brand.category}</p>
                {/* Button */}
                <a
                  href={brand.shop_link}
                  className="inline-block mt-4 px-4 py-2 bg-[#4CAF50] text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Explore Deals
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Trending;