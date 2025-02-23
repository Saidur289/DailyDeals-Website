import { Link } from "react-router-dom";



const Card = ({brand}) => {
    const { brand_name, brand_logo, coupons, category } = brand;

    return (
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        {/* Brand Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={brand_logo}
            alt={`${brand_name} Logo`}
            className="w-24 h-24 object-contain"
          />
        </div>
  
        {/* Brand Name */}
        <h3 className="text-lg font-bold text-gray-800 text-center">
          {brand_name}
        </h3>
  
        {/* Category */}
        <p className="text-sm text-gray-500 text-center mt-2">
          Category: <span className="font-medium">{category}</span>
        </p>
  
        {/* Total Coupons */}
        <p className="text-sm text-gray-500 text-center mt-2">
          Total Coupons:{" "}
          <span className="font-medium">{coupons.length}</span>
        </p>
  
        {/* Action Button */}
        <div className="mt-4 text-center">
         <Link to = '/brands' title="Go To Brands"> <button className="px-4 py-2 text-white bg-[#4CAF50] rounded hover:bg-orange-700">
            View Offers
          </button></Link>
        </div>
      </div>
    );
  };
  

export default Card;