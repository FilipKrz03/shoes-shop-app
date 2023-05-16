import classes from './Navigation.module.scss';
import mainLogo from '../../img/main-logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = () => {

    return(
    <header className={classes.header}>
        <img src={mainLogo} alt='main logo of site'/>
        <nav>
            <ul>
                <li>Products</li>
                <li><ShoppingCartIcon fontSize='large' /></li>
            </ul>
        </nav>
    </header>
    );

}

export default Navigation;