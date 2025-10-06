import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"

const Root = () => {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
            <div className="max-w-[1520px] mx-auto">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};


export default Root