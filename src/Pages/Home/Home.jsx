import { useEffect, useState } from "react";
import Banner from "../../components/Navbar/Banner";
import SellBrands from "../../components/topBrands/SellBrands";
import TopBrands from "../../components/topBrands/TopBrands";
import Trending from "../../components/topBrands/Trending";
import ReviewCard from "../../components/topBrands/ReviewCard ";


const Home = () => {
    const [brands, setBrands] = useState([])
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/brands.json')
        .then((res) => res.json())
        .then((data) => setBrands(data))
    }, [])
    useEffect(() => {
        fetch('/reviews.json')
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <TopBrands></TopBrands>
            <SellBrands brands = {brands}></SellBrands>
            <Trending  brands = {brands}></Trending>
         <div className="w-11/12 mx-auto bg-[#F9FAFB] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center mb-3">Customer Reviews & Ratings</h1>
            <p className="text-gray-500 w-3/5 mx-auto text-center mb-3">Browse through our collection of customer reviews and see why so many people love what we offer! Honest feedback, real experiences.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
                reviews.map((review) => <ReviewCard key={review.name} review ={review}></ReviewCard>)
            }
          </div>
         </div>

        </div>
    );
};

export default Home;