import classes from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Signup = () => {
    const navigate = useNavigate();

    const register = async (values) => {
        const savedUserResponse = await fetch("http://localhost:4000/auth/register",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: values,
            }
        );
        const savedUser = await savedUserResponse.json();

        if (savedUser) {
            alert('Registration Successful');
            navigate('/login');
        }
    }

    return (
        <div className={classes.signup}>
            <div className={classes.signup__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <p className={classes.title}>Create An Account</p>
                <Form type={'signup'} btnText={'Sign Up'} func={register}/>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup