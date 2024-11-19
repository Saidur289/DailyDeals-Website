import { useLoaderData } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from "react-toastify";


const Details = () => {
    const brand = useLoaderData()
    const { brand_name, brand_logo, rating, coupons } = brand;
     // Function to handle copying coupon code
  const handleCopy = (code) => {
    toast.success(`Coupon code "${code}" copied!`, { position: "top-right" });
  };
    
   return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Brand Header */}
      <div className="flex items-center space-x-4 border-b pb-4">
        <img
          src={brand_logo}
          alt={brand_name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{brand_name}</h1>
          <p className="text-yellow-500 font-medium">⭐ {rating}</p>
        </div>
      </div>

      {/* Coupon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">{coupon.coupon_code}</h3>
            <p className="text-gray-700 mt-2">{coupon.description}</p>
            <p className="text-gray-500 text-sm mt-1">
              <strong>Expiry:</strong> {coupon.expiry_date}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              <strong>Condition:</strong> {coupon.condition}
            </p>
            <div className="flex justify-between items-center mt-4">
              {/* Copy Code Button */}
              <CopyToClipboard text={coupon.coupon_code} onCopy={() => handleCopy(coupon.coupon_code)}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Copy Code
                </button>
              </CopyToClipboard>

              {/* Use Now Button */}
              <button
                onClick={() => window.open("https://brand_link.com", "_blank")}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>

     
     
    </div>
    );
};

export default Details;