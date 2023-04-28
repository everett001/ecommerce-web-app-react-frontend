import { useSelector } from 'react-redux';
import classes from './Subtotal.module.css';

function Subtotal() {
    const total = useSelector(state => state.cart.totalAmount);

    return <div className={classes.subtotal}>
        <div className={classes.subtotal__price}>
            <p>Subtotal</p>
            <p>${total}</p>
        </div>
        <button className={classes.checkout__btn} >Checkout</button>
    </div>
}

export default Subtotal;