import { useLoaderData } from "react-router-dom";


const Details = () => {
    const brand = useLoaderData()
    console.log(brand);
    return (
        <div>
          this is details page  
        </div>
    );
};

export default Details;