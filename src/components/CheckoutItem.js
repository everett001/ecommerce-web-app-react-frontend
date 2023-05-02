import { cartActions } from '../store/cart';
import classes from './CheckoutItem.module.css';
import { useDispatch } from 'react-redux';

function CheckoutItem(props) {
    const dispatch = useDispatch();

    function removeItemHandler() {
        dispatch(cartActions.remove_item({
            item: {
                id: props.id,
                img: props.img,
                title: props.title,
                price: props.price,
                quantity: 1,
                size: props.size
            }
        }));
    }

    return (
        <div className={classes.checkout__item}>
            <img className={classes.checkout__item__img} src={props.img} alt="" />
            <div className={classes.checkout__item__info}>
                <p className={classes.checkout__title}>{props.title}</p>
                <div className={classes.checkout__details}>
                    <div className={classes.checkout__item__details}>
                        <p className={classes.checkout__price}>{props.color}  •</p>
                        <p className={classes.checkout__price}>US {props.size}  •</p>
                        <p className={classes.checkout__price}>Qty {props.quantity}</p>
                    </div>
                    <p className={classes.checkout__price}>$ {props.price}</p>
                </div>
                <button className={classes.checkout__button} onClick={removeItemHandler}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem;