import { FaCartPlus } from "react-icons/fa";

export default function CartWidget() {
  return (
    <div className="container-cart">
        <FaCartPlus className="container-cart__icon"/>
        <button className="container-cart__button">1</button>
    </div>
  )
}