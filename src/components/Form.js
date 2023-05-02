import { TextField } from '@mui/material';
import classes from './Form.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = (props) => {

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
      <form onSubmit={formik.handleSubmit}>
          <div className={classes.form}>
              <div className={classes.form__input__field}>
                  <label className={classes.form__label} htmlFor="email">Email Address</label>
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
                      error={formik.touched.password && formik.errors.password}
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