import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';


function LoginPage() {
    return (
        <div className={classes.login}>
            <div className={classes.login__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <Form type={'login'} btnText={'Sign In'} />
                <p>Don't have an account? <Link to="/signup">Create Now</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;