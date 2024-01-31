import styles from './Header.module.css'
import Auth from './auth/Auth';
import React, { useState } from 'react';



const Header: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}><h2>LOGO</h2></div>
            <div className="main-menu"><h2>MENU</h2></div>
            <div className={styles.auth}>
                <h2 onClick={()=> setOpen(!open)}>Войти</h2>
                {open && <Auth/>}
            </div>
        </div>
    );
};

export default Header;