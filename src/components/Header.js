import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from '../assests/logoipsum-228.svg';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Header() {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(toggle => !toggle);
    }

    return <>
        <nav className={classes.nav}>
            <Link to="/">
                <img src={Logo} alt="" />
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
                <SearchIcon className={classes.icon} />
                <FavoriteIcon className={classes.favIcon + ' ' + classes.icon} />
                <ShoppingBagIcon className={classes.icon} />
                <div className={classes.mobile + ' ' + classes.icon} onClick={openMenu}>
                    {!toggle && <MenuIcon />}
                    {toggle && <CloseIcon />}
                </div>
            </div>
        </nav>
    </>
};

export default Header;