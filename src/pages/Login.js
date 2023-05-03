import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user';


function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (values) => {
        const loggedInResponse = await fetch("http://localhost:4000/auth/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: values,
            }
        );
        const loggedIn = await loggedInResponse.json();
        if (loggedIn) {
            dispatch(
                userActions.setLogin({
                    user: loggedIn.userData,
                    token: loggedIn.token,
                })
            );
            navigate("/");
        }
    }

    return (
        <div className={classes.login}>
            <div className={classes.login__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <Form type={'login'} btnText={'Sign In'} func={login} />
                <p>Don't have an account? <Link to="/signup">Create Now</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;