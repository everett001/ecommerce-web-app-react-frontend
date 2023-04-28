import { useParams } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useSelector } from "react-redux";
import classes from './ItemDetails.module.css';

const ItemDetails = () => {
    const { itemId } = useParams();
    const item = useSelector(state => state.cart.DUMMY_DATA.filter(item => item.id === itemId))[0];

    return (
        <>
            <Header />
            <div className={classes.itemDetails__container}>
                <div className={classes.left}>
                    <img src={item.img} alt="" className={classes.item_img} />
                </div>
                <div className={classes.right}>
                    <p className={classes.title}>{item.title}</p>
                    <p className={classes.color}>{item.color}</p>
                    <p className={classes.price}>${item.price}</p>
                    <div className={classes.sizes}>
                        <div className={classes.size}>US 7</div>
                        <div className={classes.size}>US 7.5</div>
                        <div className={classes.size}>US 8</div>
                        <div className={classes.size}>US 8.5</div>
                        <div className={classes.size}>US 9</div>
                        <div className={classes.size}>US 9.5</div>
                        <div className={classes.size}>US 10</div>
                        <div className={classes.size}>US 10.5</div>
                        <div className={classes.size}>US 11</div>
                    </div>
                    <button className={classes.cartBtn}>ADD TO CART</button>
                    <button className={classes.favBtn}>ADD TO WISHLIST</button>
                    <hr></hr>
                    <p className={classes.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ItemDetails