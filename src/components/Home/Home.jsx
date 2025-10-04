import Bags from "../../productRoutes/Bags/Bags";
import Boots from "../../productRoutes/Boots/Boots";
import Bottles from "../../productRoutes/Bottles/Bottles";
import Shoes from "../../productRoutes/Shoes/Shoes";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bottles></Bottles>
            <Bags></Bags>
            <Shoes></Shoes>
            <Boots></Boots>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;