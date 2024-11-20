import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
    const brands = useLoaderData()

    const [search, setSearch] = useState('')
    const [filterBrand, setFilterBrand] = useState(brands)
    const handleSearch = e => {
      setSearch(e.target.value)
      if(e.target.value){
        const searchData = brands.filter((brand) => 
          brand.brand_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setFilterBrand(searchData)
      }
      else{
        setFilterBrand(brands)
      }
    }
   
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 my-5">
        <input type="text" className="grow" onChange={handleSearch} value={search} placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="bg-[#F9FAFB] rounded-md">
        <h1 className="font-bold text-center text-2xl mb-3">Your Favorite Brands in One Place</h1>
        <p className="text-center   md:w-4/5 mx-auto py-3 mb-3  text-gray-500">Experience the convenience of finding all your favorite brands under one roof! From trending styles to timeless essentials, explore a diverse range of products tailored to your needs. Shop effortlessly and discover exclusive deals, all in one seamless platform</p>
        <div className="w-11/12 mx-auto flex flex-col gap-3">
            {
                filterBrand.map((brand) => <Brand key={brand.id} brand = {brand}></Brand>)
            }
        </div>

      </div>
    </div>
  );
};

export default Brands;
