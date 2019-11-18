import React from 'react';
import classes from './Header.css';
import NavigationItems from '../naigationitems/NavigationsItems';

const Header = (props) => (
    <div className={classes.Header}>
        <NavigationItems/>
    </div>
);

export default Header;