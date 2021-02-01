import classes from "./navbar.module.css";
import NavItem from "./navItem/navItem";

const navBar = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavItems}>
        {/* <NavItem link="/new_player" name="AJOUTER UN JOUEUR"></NavItem>
        <NavItem link="/new_team" name="CRÉER L'ÉQUIPE"></NavItem> */}
        <NavItem link="/team_options" name="LES ÉQUIPE"></NavItem>
        <NavItem link="/players" name="LES JOUERS"></NavItem>
      </ul>
    </nav>
  );
};

export default navBar;