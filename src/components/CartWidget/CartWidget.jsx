import './CartWidget.css'
import cart from './assets/suitcase-svgrepo-com.svg'

export const CartWidget = ({ cantCarrito }) => {
    return (
      <>
        <img src={cart} alt="cart-wdi" />
        <button className="btn btn-dark"><i className="fas fa-shopping-cart fa-lg"></i></button>
        <p>{cantCarrito}</p>
      </>
    )
  }