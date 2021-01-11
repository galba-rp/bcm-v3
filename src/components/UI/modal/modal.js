import React from 'react';
import classes from "./modal.module.css";

const modal = (props) => {
    return ( 
        <div className={props.show ? classes.Show : classes.Hide}>
        <div className={classes.Select}>
          <p onClick={()=>props.choose('YES')}>YES</p>
          <p onClick={()=>props.choose('NO')}>NO</p>
        </div>
        <button className="btn btn-primary" onClick={props.close}>
          Close
        </button>
      </div>
     );
}
 
export default modal;