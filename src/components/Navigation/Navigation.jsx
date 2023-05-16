import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import mainLogo from "../../img/main-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <img src={mainLogo} alt="main logo of site" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <ShoppingCartIcon fontSize="large" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
