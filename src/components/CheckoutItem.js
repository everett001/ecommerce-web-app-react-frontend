import { useContext } from 'react';
import CartContext from '../store/cart-context';
import classes from './CheckoutItem.module.css';

function CheckoutItem(props) {
    const cartCtx = useContext(CartContext);

    function removeItemHandler() {
        cartCtx.removeItem(props.id);
    }

    return (
        <div className={classes.checkout__item}>
            <img className={classes.checkout__item__img} src={props.img} alt="" />
            <div className={classes.checkout__item__info}>
                <p className={classes.checkout__title}>{props.title}</p>
                <p className={classes.checkout__price}>$ {props.price}</p>
                <button className={classes.checkout__button} onClick={removeItemHandler}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem;