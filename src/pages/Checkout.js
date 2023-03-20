import { useContext } from 'react';
import CheckoutItem from '../components/CheckoutItem';
import Subtotal from '../components/Subtotal';
import CartContext from '../store/cart-context';
import classes from './Checkout.module.css';

function Checkout() {
    const cartCtx = useContext(CartContext);

    const cartContent = (
        <>
            <h1>Your Cart</h1>
            <div className={classes.checkout__content}>
                <div className={classes.checkout__left}>
                    {cartCtx.items.map(item => (
                        <CheckoutItem key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />
                    ))}
                </div>
                <div className={classes.checkout__right}>
                    <Subtotal />
                </div>
            </div>
        </>
    )

    return <div className={classes.checkout}>
        <div className={classes.checkout__container}>
            {cartCtx.items.length === 0 && <h1 className={classes.checkout__empty}>Your cart is empty</h1>}
            {cartCtx.items.length > 0 && cartContent}
        </div>
    </div>
}

export default Checkout;