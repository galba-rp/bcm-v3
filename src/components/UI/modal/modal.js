import React from 'react';
import classes from "./modal.module.css";
import { connect } from "react-redux";

const modal = (props) => {
  let message = "error";

  switch (props.messageId) {
    case "team":
      message = (
        <React.Fragment>
        <p onClick={() => props.choose("YES")}>YES</p>
        <p onClick={() => props.choose("NO")}>NO</p>
      </React.Fragment>
      )
      break;
      case "playerAvailability":
        message = props.apiResponse
        break;
      default: ;
  }

    return ( 
        <div className={props.show ? classes.Show : classes.Hide}>
        <div className={classes.Select}>
        <React.Fragment>{message} </React.Fragment>
          {/* <p onClick={()=>props.choose('YES')}>YES</p>
          <p onClick={()=>props.choose('NO')}>NO</p> */}
        </div>
        <button className="btn btn-primary" onClick={props.close}>
          Close
        </button>
      </div>
     );
}

const mapStateToProps = (state) => {
  return{ 
    apiResponse: state.newPlayer.apiResponse,
  }
} 

export default connect(mapStateToProps, null)(modal);