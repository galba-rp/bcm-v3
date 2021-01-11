import classes from './navItem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
    return ( 
        <li className={classes.Li}>
            <NavLink to={props.link} className={classes.Link}>{props.name}</NavLink>
        </li>
     );
}
 
export default navItem;