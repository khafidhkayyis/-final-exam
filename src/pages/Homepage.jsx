import CustomCarousel from "../components/CustomCarousel";
import Main from "../components/Main";
import MoreProduct from "../components/MoreProduct";

const Homepage = () => {
    return(
        <div>
            <CustomCarousel />
            <Main />
            <hr className="my-5" />
            <MoreProduct />
        </div>
    )
}

export default Homepage;