import classes from "./navbar.module.css";
import NavItem from "./navItem/navItem";

const navBar = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavItems}>
        <NavItem link="/create-player" name="AJOUTER UN JOUEUR"></NavItem>
        <NavItem link="/create-team" name="CRÉER L'ÉQUIPE"></NavItem>
        <NavItem link="/teams" name="LES ÉQUIPE"></NavItem>
      </ul>
    </nav>
  );
};

export default navBar;