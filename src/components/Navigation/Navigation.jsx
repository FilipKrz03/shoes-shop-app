import { NavLink , useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import classes from "./Navigation.module.scss";
import mainLogo from "../../img/main-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navigation = () => {

  const navigation = useNavigation();
  const itemsQuantity = useSelector(state => state.cart.totalQuantity);


  return (
    <>
    {navigation.state === 'loading' && <CircularProgress className={classes.loading} /> }
    <header className={classes.header}>
    <NavLink to = '/'>  <img src={mainLogo} alt="main logo of site" /> </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
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
            <NavLink
            to = {'/cart'}
            className={({ isActive }) =>
            isActive ? classes.active : undefined
          }>
            <ShoppingCartIcon fontSize="large" className={classes.icon} />
            </NavLink>
            <div className={classes.quantity}>{itemsQuantity}</div>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navigation;
