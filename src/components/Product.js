import classes from './Product.module.css';
import { useNavigate } from 'react-router-dom';

function Product(props) {
    const navigate = useNavigate();

    return (
        <div className={classes.product__container} onClick={() => navigate(`/item/${props.id}`)}>
            <img className={classes.product__img} src={props.img} alt="" />
            <div className={classes.product__content}>
                <p className={classes.product__title}>{props.title}</p>
                <p className={classes.product__color}>{props.color}</p>
                <div className={classes.product__sub__container}>
                    <p>${props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;