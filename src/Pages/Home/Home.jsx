import Banner from "../../components/Navbar/Banner";
import SellBrands from "../../components/topBrands/SellBrands";
import TopBrands from "../../components/topBrands/TopBrands";


const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <TopBrands></TopBrands>
            <SellBrands></SellBrands>
        </div>
    );
};

export default Home;