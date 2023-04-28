import {
  FacebookOutlined,
  Instagram,
  Twitter,
  Add,
  RemoveOutlined
} from '@mui/icons-material';
import classes from './Footer.module.css';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';


const Footer = () => {
  const isMobile = useMediaQuery("(max-width:769px)");
  const [toggleAbout, setToggleAbout] = useState(true);
  const [toggleCustomer, setToggleCustomer] = useState(true);
  const [toggleContact, setToggleContact] = useState(true);

  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <div >
          <p className={classes.title} onClick={() => setToggleAbout(!toggleAbout)}>About {toggleAbout && isMobile && <Add />} {!toggleAbout && isMobile && <RemoveOutlined />}</p>
          <div className={`${classes.content} ${toggleAbout ? classes.collapsed : ''}`}>
            <p className={classes.text}>Our Purpose</p>
            <p className={classes.text}>Careers</p>
            <p className={classes.text}>Stores</p>
            <p className={classes.text}>Terms & Conditions</p>
            <p className={classes.text}>Privacy Policy</p>
          </div>
        </div>
        <div>
          <p className={classes.title} onClick={() => setToggleCustomer(!toggleCustomer)}>Customer Service {toggleCustomer && isMobile && <Add />} {!toggleCustomer && isMobile && <RemoveOutlined />}</p>
          <div className={`${classes.content} ${toggleCustomer ? classes.collapsed : ''}`}>
            <p className={classes.text}>Help</p>
            <p className={classes.text}>Track An Order</p>
            <p className={classes.text}>Returns</p>
            <p className={classes.text}>FAQ</p>
          </div>
        </div>
        <div>
          <p className={classes.title} onClick={() => setToggleContact(!toggleContact)}>Contact Us {toggleContact && isMobile && <Add />} {!toggleContact && isMobile && <RemoveOutlined />}</p>
          <div className={`${classes.content} ${toggleContact ? classes.collapsed : ''}`}>
            <p className={classes.text}>(65) 6333 6444</p>
            <p className={classes.text}>hi@smallstore.com</p>
          </div>
          <div className={classes.socials}>
            <FacebookOutlined />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer