import classes from './Signup.module.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Signup = () => {
    return (
        <div className={classes.signup}>
            <div className={classes.signup__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <p className={classes.title}>Create An Account</p>
                <Form type={'signup'} btnText={'Sign Up'} />
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup