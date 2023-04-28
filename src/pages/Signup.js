import { Button, TextField } from '@mui/material';
import classes from './Signup.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Password be at least 8 characters long')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.signup__container}>
            <div className={classes.signup__sub__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <h1>Create An Account</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classes.signup__form}>
                        <div className={classes.signup__input__field}>
                            <label className={classes.form__title} htmlFor="email">Email Address</label>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && formik.errors.email}
                                size="small"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={classes.error}>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className={classes.signup__input__field}>
                            <label className={classes.form__title} htmlFor="password">Password</label>
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                error={formik.touched.password && formik.errors.password}
                                size="small"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className={classes.error}>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup