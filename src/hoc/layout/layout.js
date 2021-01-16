import classes from './layout.module.css';
import React from 'react';

const layout = (props) => {
    return (
        <div className={classes.Layout}>{props.children}</div>
      );
}
 
export default layout;