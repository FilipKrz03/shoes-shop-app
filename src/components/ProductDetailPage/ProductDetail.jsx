import { Link } from 'react-router-dom';
import classes from './ProductDetail.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = ({details}) => {

    return(
        <div className={classes.store}>
        <Link to={'/products'}> <ArrowBackIcon className={classes.arrow} fontSize='large'/> </Link>  
        <h1>{details.title}</h1>
        <img src={details.img} alt="shoes item"/>
        <p>${details.price}</p>
        <button>Add to cart</button>
        </div>
    )

}

export default ProductDetail;