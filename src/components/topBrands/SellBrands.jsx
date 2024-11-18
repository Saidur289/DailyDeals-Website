import { useEffect, useState } from "react";
import Card from "./Card";


const SellBrands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('/brands.json')
        .then((res) => res.json())
        .then((data) => setBrands(data))
    }, [])
    const saleBrands = brands.filter((brand) => brand.isSaleOn)
    console.log(saleBrands);
    return (
      <div>
        <h1 className="text-2xl font-bold text-center mb-3">Shop Brands on Sell</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           {
            saleBrands?.map((brand) =><Card key={brand.id} brand = {brand}></Card> )
           }
        </div>
      </div>
    );
};

export default SellBrands;