import { TextField } from '@mui/material';
import classes from './Form.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password be at least 8 characters long').required('Required'),
});

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .min(8, 'Password be at least 8 characters long')
        .required('Required'),
});

const Form = (props) => {

    let validateSchema;
    if (props.type === 'login') {
        validateSchema = loginSchema;
    } else {
        validateSchema = signupSchema;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            props.func(JSON.stringify(values));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.form}>
                {props.type === 'signup' && <div className={classes.form__input__field}>
                    <label className={classes.form__label} htmlFor="username">Username</label>
                    <TextField
                        id="username"
                        name="username"
                        type="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        error={Boolean(formik.touched.username) && Boolean(formik.errors.username)}
                        size="small"
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className={classes.form__error}>{formik.errors.username}</div>
                    ) : null}
                </div>}
                <div className={classes.form__input__field}>
                    <label className={classes.form__label} htmlFor="email">Email Address</label>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
                        size="small"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={classes.form__error}>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className={classes.form__input__field}>
                    <label className={classes.form__label} htmlFor="password">Password</label>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
                        size="small"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={classes.form__error}>{formik.errors.password}</div>
                    ) : null}
                </div>
                {props.type === 'login' && <p className={classes.forgot_pass}>Forgot Password?</p>}
                <button className={classes.form__btn} type="submit" variant="contained">{props.btnText}</button>
            </div>
        </form>
    )
}

export default Form