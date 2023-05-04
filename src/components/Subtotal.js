import { useSelector } from 'react-redux';
import classes from './Subtotal.module.css';
import { loadStripe } from '@stripe/stripe-js';

function Subtotal() {
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.totalAmount);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

    const handlePayment = async () => {

        let checkoutItems = items.map(item => {
            return {
                price_data: {
                    currency: 'sgd',
                    product_data: {
                        name: item.title + ' - US ' + item.size,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity
            }
        })

        try {
            const stripe = await stripePromise;
            const res = await fetch("http://localhost:4000/payment/checkout",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({items: checkoutItems}),
                }
            );
            const sessionId = await res.json();
            await stripe.redirectToCheckout({
                sessionId: sessionId.id
            })
        } catch (err) {
            console.log(err);
        }
    }

    return <div className={classes.subtotal}>
        <div className={classes.subtotal__price}>
            <p>Subtotal</p>
            <p>${total}</p>
        </div>
        <button className={classes.checkout__btn} onClick={handlePayment} >Checkout</button>
    </div>
}

export default Subtotal;