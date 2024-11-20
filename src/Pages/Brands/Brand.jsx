import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, rating, description, brand_logo, isSaleOn, id } = brand;

  return (
    <div className="relative flex max-w-full border rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105">
      {/* Brand Logo (Left Side) */}
      <div className="w-1/3">
        <img
          src={brand_logo}
          alt={brand_name}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>

      {/* Content (Right Side) */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Brand Name and Rating */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{brand_name}</h3>
            <span className="text-green-500 text-sm font-medium">⭐ {rating}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>

        {/* Sale Indicator and Button */}
        <div className="mt-4">
          {isSaleOn && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-bounce">
              Sale is on!
            </div>
          )}
          <Link to={`/brand/${id}`}>
            <button
              disabled={!isSaleOn}
              className={`w-full text-sm py-2 rounded-lg transition duration-300 ${
                isSaleOn
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              View Coupons
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
