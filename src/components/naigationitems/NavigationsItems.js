import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './naigationitem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            HOME
        </NavigationItem>
        <NavigationItem link="/createpost">
            CREATE A POST
        </NavigationItem>
    </ul>
);

export default NavigationItems;