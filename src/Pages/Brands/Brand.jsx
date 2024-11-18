import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, rating, description, brand_logo, isSaleOn, id } = brand;
  return (
    <div className="relative max-w-sm border rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105">
      {/* Brand Logo */}
      <img
        src={brand_logo}
        alt={brand_name}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Brand Name and Rating */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{brand_name}</h3>
          <span className="text-green-500 text-sm font-medium">
            ⭐ {rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Sale Indicator */}
        {isSaleOn && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-bounce">
            Sale is on!
          </div>
        )}

        {/* View Coupons Button */}
       <Link to = {`/brand/${id}`}>
       <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-lg transition duration-300">
          View Coupons
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Brand;
