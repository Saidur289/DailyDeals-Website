import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const TopBrands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('/category.json')
        .then((res) => res.json())
        .then((data) => setBrands(data))
    }, [])
    return (
        <div className='flex flex-col justify-center items-center mb-3 w-11/12 mx-auto bg-[#F9FAFB] p-5'>
             <h1 className="text-2xl font-bold mb-3">Explore Popular Brands</h1>
             <Marquee pauseOnHover>
                {
                    brands.map((brand) => <Link key={brand.id} to = {`/brand/${brand.id}`}>
                        <img src={brand.brand_logo} title={brand.brand_name} className='w-[100px] object-cover rounded-full h-[100px] mr-15 ' alt="" />
                    </Link>)
                }
             </Marquee>
        </div>
    );
};

export default TopBrands;