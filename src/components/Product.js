import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import { useNavigate } from 'react-router-dom';

function Product(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function addItemHandler(e) {
        e.stopPropagation();
        dispatch(cartActions.add_item({
            item: {
                id: props.id,
                img: props.img,
                title: props.title,
                price: props.price,
                quantity: 1
            }
        }));
    }

    return (
        <div className={classes.product__container} onClick={() => navigate(`/item/${props.id}`)}>
            <img className={classes.product__img} src={props.img} alt="" />
            <div className={classes.product__content}>
                <p>{props.title}</p>
                <p className={classes.product__color}>{props.color}</p>
                <div className={classes.product__sub__container}>
                    <p>${props.price}</p>
                    <button className={classes.product__btn} onClick={addItemHandler}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product;