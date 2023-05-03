import Header from '../components/Header';
import Footer from '../components/Footer';
import classes from './Profile.module.css';
import { useSelector } from 'react-redux';

const Profile = () => {
    const username = useSelector(state => state.user.user?.username);
    return (
        <>
            <Header />
            <div className={classes.profile}>
                <p className={classes.username}>Hi, {username?.toUpperCase()}</p>
                <p className={classes.title}>Welcome to your account</p>
                <div className={classes.profile__container}>
                    <div className={classes.card}>
                        <p>My Orders</p>
                    </div>
                    <div className={classes.card}>
                        <p>Wish List</p>
                    </div>
                    <div className={classes.card}>
                        <p>My Details</p>
                    </div>

                    <div className={classes.card}>
                        <p>Saved Cards</p>
                    </div>
                    <div className={classes.card}>
                        <p>Addresses</p>
                    </div>
                    <div className={classes.card}>
                        <p>Email Preferences</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile