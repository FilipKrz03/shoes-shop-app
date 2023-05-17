const ProductDetail = ({details}) => {

    return(
        <>
        <h1>{details.title}</h1>
        <img src={details.img} alt="shoes item" />
        <p>{details.price}</p>
        </>
    )

}

export default ProductDetail;