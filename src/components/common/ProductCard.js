const ProductCard = ({tailwindClass, children}) => {
    return(
        <div className={`${tailwindClass}`}>
            {children}
        </div>
    );
}

export default ProductCard;