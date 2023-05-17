import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import cart from './assets/suitcase-svgrepo-com.svg'

export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <button className="btn btn-dark cartWidget">
        <Link to={"/cart"} className="nav-link">
          <i className="fas fa-shopping-cart fa-lg"></i>
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      </button>
    </>
  )
}