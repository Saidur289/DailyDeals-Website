import { useEffect, useState } from "react";
import Card from "./Card";


const SellBrands = ({brands}) => {
   
    const saleBrands = brands.filter((brand) => brand.isSaleOn)
    console.log(saleBrands);
    return (
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl font-bold text-center mb-3">Shop Brands on Sell</h1>
        <p className="text-center w-4/5 mx-auto mb-3 text-gray-500">Private label brands are brands that are created and owned by retailers, rather than third-party manufacturers. These brands are typically sold exclusively in the retailer's stores or online platform,</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           {
            saleBrands?.map((brand) =><Card key={brand.id} brand = {brand}></Card> )
           }
        </div>
      </div>
    );
};

export default SellBrands;