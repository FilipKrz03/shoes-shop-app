import { NavLink , useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import classes from "./Navigation.module.scss";
import mainLogo from "../../img/main-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navigation = () => {

  const navigation = useNavigation();


  return (
    <>
    {navigation.state === 'loading' && <CircularProgress className={classes.loading} /> }
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
            <ShoppingCartIcon fontSize="large" className={classes.icon} />
            <div className={classes.quantity}>3</div>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navigation;
