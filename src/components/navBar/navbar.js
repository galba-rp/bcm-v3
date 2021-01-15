import classes from "./navbar.module.css";
import NavItem from "./navItem/navItem";

const navBar = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavItems}>
        <NavItem link="/new_player" name="AJOUTER UN JOUEUR"></NavItem>
        <NavItem link="/new_team" name="CRÉER L'ÉQUIPE"></NavItem>
        <NavItem link="/teams" name="LES ÉQUIPE"></NavItem>
      </ul>
    </nav>
  );
};

export default navBar;