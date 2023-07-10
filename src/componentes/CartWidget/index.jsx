function CartWidget (props) {
    return (
        <>
            <div className="cartNumber">
                {props.numberOfItems}
            </div>
            <i className="bi bi-cart-fill"></i>
        </>
    )
}

export default CartWidget;