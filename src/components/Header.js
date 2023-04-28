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
import { useSelector } from 'react-redux';
import { IconButton, Badge } from '@mui/material';

function Header() {
    const [toggle, setToggle] = useState(false);
    const numberOfItems = useSelector(state => state.cart.totalNumberOfItems);

    function openMenu() {
        setToggle(toggle => !toggle);
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
                    </ul>
                </div>
                <div className={classes.icons}>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <PersonOutline />
                    </IconButton>
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