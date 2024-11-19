import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const BrandsDetails = () => {
  const navigate = useNavigate()
    const brands = useLoaderData()
    const {rating, brand_logo, brand_name, category, description, isSaleOn} = brands
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        for (let i = 0; i < fullStars; i++) stars.push(<FaStar className="text-yellow-500" key={`full-${i}`} />);
        if (halfStar) stars.push(<FaStarHalfAlt className="text-yellow-500" key="half" />);
        for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar className="text-gray-300" key={`empty-${i}`} />);
    
        return stars;
      };
    
      return (
        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-4">
            <img
              src={brand_logo}
              alt={`${brand_name} logo`}
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h2 className="text-xl font-bold">{brand_name}</h2>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
          </div>
    
          {/* Rating */}
          <div className="flex items-center mt-2">
            {renderStars(rating)}
            <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
    
          {/* Description */}
          <p className="text-gray-700 mt-4">{description}</p>
    
          {/* Sale Banner */}
          {isSaleOn && (
            <div className="bg-red-100 text-red-600 text-center py-2 rounded mt-4 font-semibold">
              🎉 Sale is On!
            </div>
          )}
    
          {/* Shop Now Button */}
          <button onClick={() => navigate(-1)}
            disable = {!isSaleOn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
          Go To Home
          </button>
        </div>
    );
};

export default BrandsDetails;