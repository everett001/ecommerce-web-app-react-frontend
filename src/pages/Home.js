import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Product from "../components/Product";
import classes from './Home.module.css';
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

function HomePage() {
    const DUMMY_DATA = useSelector(state => state.cart.DUMMY_DATA);

    return (
        <>
            <Header />
            <div className={classes.home}>
                <HomeCarousel />
                <div className={classes.home__container}>
                    <h1 className={classes.title}>Best Sellers</h1>
                    <div className={classes.products__container}>
                        {DUMMY_DATA.map((item) => <Product key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} color={item.color}/>)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default HomePage;