import React from "react";
import Button from "../UI/button/button";
import Layout from "../../hoc/layout/layout";

const players = (props) => {
  const newPlayer = () => {
    props.history.push("/new_player");
  };
  const editPlayer = () => {
    props.history.push("/edit_player");
  };
  return (
    <Layout>
      <Button btnType={"CardButton"} clicked={newPlayer}>
        NOVEAU<br></br>JOUEUR
      </Button>
      <Button btnType={"CardButton"} clicked={editPlayer}>
        MODIFIER<br></br> UN <br></br>JOUEUR
      </Button>
    </Layout>
  );
};

export default players;
