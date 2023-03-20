import { useContext } from 'react';
import CartContext from '../store/cart-context';
import classes from './Subtotal.module.css';

function Subtotal() {
    const cartCtx = useContext(CartContext);

    return <div className={classes.subtotal}>
        <div className={classes.subtotal__price}>
            <p>Subtotal</p>
            <p>${cartCtx.totalAmount}</p>
        </div>
        <button className={classes.checkout__btn} >Checkout</button>
    </div>
}

export default Subtotal;