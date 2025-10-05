import Bags from "../../productRoutes/Bags/Bags";
import Boots from "../../productRoutes/Boots/Boots";
import Bottles from "../../productRoutes/Bottles/Bottles";
import Shoes from "../../productRoutes/Shoes/Shoes";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner />

            <section id="bottles">
                <Bottles />
            </section>

            <section id="bags">
                <Bags />
            </section>

            <section id="shoes">
                <Shoes />
            </section>

            <section id="boots">
                <Boots />
            </section>

            <section id="reviews">
                <Reviews />
            </section>
        </div>
    );
};

export default Home;
