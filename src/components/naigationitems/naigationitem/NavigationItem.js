import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
                <span>{props.children}</span>
            </NavLink>
        </li>
    );
}

export default NavigationItem;