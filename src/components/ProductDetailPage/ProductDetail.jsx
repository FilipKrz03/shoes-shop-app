import { Link , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductDetail.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = ({details}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addHandler = () => {
        const itemObj = {
            id:details.id , 
            title : details.title , 
            price : details.price , 
            img : details.img , 
        }
        dispatch(cartActions.addItem(itemObj));
        navigate('/products');
    }

    return(
        <div className={classes.store}>
        <Link to={'/products'}> <ArrowBackIcon className={classes.arrow} fontSize='large'/> </Link>  
        <h1>{details.title}</h1>
        <img src={details.img} alt="shoes item"/>
        <p>${details.price}</p>
        <button onClick={addHandler}>Add to cart</button>
        </div>
    )

}

export default ProductDetail;