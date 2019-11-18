import React from 'react';
import classes from './Footer.css';

const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <p>Copyright &copy; By Spotwikis 2019</p>
            </div>
        </footer>
    );
}

export default Footer;