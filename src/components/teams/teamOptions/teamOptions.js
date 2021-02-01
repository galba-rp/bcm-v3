import React from "react";
import Button from "../../UI/button/button";
import Layout from "../../../hoc/layout/layout";

const teamOptions = (props) => {
  const newTeam = () => {
    props.history.push("/new_team");
  };
  const allTeams = () => {
    props.history.push("/all_teams");
  };

  const team = () => {};

  return (
    <Layout>
      <Button btnType={"CardButton"} clicked={newTeam}>
        NOUVELLE<br></br>EQUIPE
      </Button>
      <Button btnType={"CardButton"} clicked={allTeams}>
        LES<br></br>EQUIPE
      </Button>
      <Button btnType={"CardButton"} clicked={team}>
        MODIFIER<br></br> UNE <br></br>EQUIPE
      </Button>
    </Layout>
  );
};

export default teamOptions;
