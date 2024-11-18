import { FaStar } from 'react-icons/fa';

const ReviewCard  = ({review}) => {
    const { name, profilePic, rating, comment } = review;
     // Function to render stars based on rating
  const renderStars = (rating) => {
    const validRating = isNaN(rating) ? 0 : Math.min(Math.max(parseInt(rating), 0), 5);

    // Create full and empty star arrays
    const fullStars = Array(validRating).fill(<FaStar className="text-yellow-500" />);
    const emptyStars = Array(5 - validRating).fill(<FaStar className="text-gray-300" />);

    return [...fullStars, ...emptyStars];
  };

    
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src={profilePic}
            alt={`${name}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="text-xl font-semibold">{name}</div>
            <div className="flex space-x-1">{renderStars(rating)}</div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">{comment}</p>
      </div>
    );
};

export default ReviewCard ;