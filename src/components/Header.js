import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import {
    SearchOutlined,
    PersonOutline,
    FavoriteBorderOutlined,
    ShoppingBagOutlined,
    MenuOutlined,
    CloseOutlined
} from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Badge } from '@mui/material';
import { userActions } from '../store/user';

function Header() {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const numberOfItems = useSelector(state => state.cart.totalNumberOfItems);
    const username = useSelector(state => state.user.user?.username);

    function openMenu() {
        setToggle(toggle => !toggle);
    }

    const logout = () => {
        dispatch(
            userActions.setLogout()
        );
    }

    return <>
        <nav className={classes.nav}>
            <div className={classes.nav__container}>
                <Link to="/">
                    <div className={classes.logo}>
                        <p>Small<br /> Store</p>
                    </div>
                </Link>
                <div>
                    <ul className={`${classes.navbar} ${toggle && classes.active}`}>
                        <li>SALE</li>
                        <li>LATEST</li>
                        <li>BRANDS</li>
                        <li>CLOTHING</li>
                        <li>FOOTWEAR</li>
                        <li className={classes.mobile} onClick={logout}>LOGOUT</li>
                    </ul>
                </div>
                <div className={classes.icons}>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <Link to={username ? "/profile" : '/login'}>
                        <IconButton>
                            <PersonOutline />
                        </IconButton>
                    </Link>
                    <IconButton>
                        <FavoriteBorderOutlined />
                    </IconButton>
                    <Link to="/checkout" className={classes.link}>
                        <Badge badgeContent={numberOfItems} color='error'>
                            <IconButton>
                                <ShoppingBagOutlined />
                            </IconButton>
                        </Badge>
                    </Link>
                    {username && <p className={`${classes.logout} ${classes.non__mobile}`} onClick={logout}>LOGOUT</p>}
                    <div className={classes.mobile} onClick={openMenu}>
                        <IconButton>
                            {!toggle && <MenuOutlined />}
                            {toggle && <CloseOutlined />}
                        </IconButton>
                    </div>
                </div>
            </div>
        </nav>
    </>
};

export default Header;