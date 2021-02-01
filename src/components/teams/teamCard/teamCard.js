import "./teamCard.module.css";
import React from "react";

const TeamCard = (props) => {
  let buff = props.teamData.img.data.data;
  let base64String = btoa(String.fromCharCode(...new Uint8Array(buff)));
  
  return (
    <button
      type="button"
      className="card"
      onClick={() => props.click(props.teamData.name)}
    >
      <h5 className="card-title">{props.teamData.name}</h5>
      <div className="card-body">
        <img
          className="card-img-top"
          src={"data:image/jpeg;base64," + base64String}
          alt="Card cap"
        ></img>
      </div>
    </button>
  );
};

export default TeamCard;
