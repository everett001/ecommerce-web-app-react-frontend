import Banner1 from "../assets/banner/banner1.jpg";
import Banner2 from "../assets/banner/banner2.jpg";
import Banner3 from "../assets/banner/banner3.jpg";
import Banner4 from "../assets/banner/banner4.jpg";
import classes from './HomeCarousel.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const banners = [
    {
        id: 11,
        img: Banner1,
        btnText: 'SHOP NOW'
    },
    {
        id: 22,
        img: Banner2,
        btnText: 'SHOP NIKE'
    },
    {
        id: 33,
        img: Banner3,
        btnText: 'SHOP CARHARTT'
    },
    {
        id: 44,
        img: Banner4,
        btnText: 'SHOP SALES'
    },
]

const HomeCarousel = () => {
    return (
        <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} showIndicators={false} autoPlay={true} stopOnHover={true} swipeable={true} emulateTouch={true}>
            {banners.map((item) =>
                <div>
                    <img src={item.img} alt="" className={classes.banner} />
                    <button className={classes.button}>{item.btnText}</button>
                </div>
            )}
        </Carousel>
    )
}

export default HomeCarousel