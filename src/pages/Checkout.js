import { Link } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import Header from '../components/Header';
import Subtotal from '../components/Subtotal';
import classes from './Checkout.module.css';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

function Checkout() {
    const items = useSelector(state => state.cart.items);

    const cartContent = (
        <>
            <h1>Your Cart</h1>
            <div className={classes.checkout__content}>
                <div className={classes.checkout__left}>
                    {items.map(item => (
                        <CheckoutItem key={item.id + '_' + item.size} id={item.id} img={item.img} title={item.title} price={item.price} quantity={item.quantity} color={item.color} size={item.size} />
                    ))}
                </div>
                <div className={classes.checkout__right}>
                    <Subtotal />
                </div>
            </div>
        </>
    )

    const emptyCart = (
        <>
            <div className={classes.checkout__empty}>
                <p className={classes.checkout__empty__title}>Your cart is empty</p>
                <button className={classes.checkout__wishlist__btn}>View Wishlist</button>
                <Link to={'/'}><p>Shop Best Seller</p></Link>
            </div>
        </>
    )

    return (
        <>
            <Header />
            <div className={classes.checkout}>
                <div className={classes.checkout__container}>
                    {items.length === 0 && emptyCart}
                    {items.length > 0 && cartContent}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;