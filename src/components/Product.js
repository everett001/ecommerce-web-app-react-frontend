import { useContext } from 'react';
import CartContext from '../store/cart-context';
import classes from './Product.module.css';

function Product(props) {
    const cartCtx = useContext(CartContext);

    function addItemHandler() {
        cartCtx.addItem({
            id: props.id,
            img: props.img,
            title: props.title,
            price: props.price
        })
    }

    return (
        <div className={classes.product__container}>
            <img className={classes.product__img} src={props.img} alt="" />
            <p className={classes.product__title}>{props.title}</p>
            <div className={classes.product__sub__container}>
                <p>${props.price}</p>
                <button className={classes.product__btn} onClick={addItemHandler}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;