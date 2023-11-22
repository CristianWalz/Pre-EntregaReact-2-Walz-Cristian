import CartWidget from "../CartWidget/CartWidget";
import Brand from "../Brand/Brand";


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
        {<Brand/>}
        <ul className="nav-list">
            <li><a className="nav-list__a" href="http://localhost:5173/">Inicio</a></li>
            <li><a className="nav-list__a" href="../category/suplementacion">Suplementacion</a></li>
            <li><a className="nav-list__a" href="../category/indumentaria">Indumentaria</a></li>
            <li><a className="nav-list__a" href="../category/snacks">Snacks</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
  )
}
