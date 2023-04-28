import CheckoutItem from '../components/CheckoutItem';
import Header from '../components/Header';
import Subtotal from '../components/Subtotal';
import classes from './Checkout.module.css';
import { useSelector } from 'react-redux';

function Checkout() {
    const items = useSelector(state => state.cart.items);

    const cartContent = (
        <>
            <h1>Your Cart</h1>
            <div className={classes.checkout__content}>
                <div className={classes.checkout__left}>
                    {items.map(item => (
                        <CheckoutItem key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} quantity={item.quantity} />
                    ))}
                </div>
                <div className={classes.checkout__right}>
                    <Subtotal />
                </div>
            </div>
        </>
    )

    return (
        <>
            <Header />
            <div className={classes.checkout}>
                <div className={classes.checkout__container}>
                    {items.length === 0 && <h1 className={classes.checkout__empty}>Your cart is empty</h1>}
                    {items.length > 0 && cartContent}
                </div>
            </div>
        </>
    )
}

export default Checkout;