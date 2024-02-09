import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo/InStock-Logo_2x.png"
import "./Header.scss";

const Header = ()=>{
    return (
        <nav className="nav">
            <Link to="/"> 
                <img src={logo} className="nav__logo" alt="instock logo"/>
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/" >Warehouses</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/inventory">Inventory</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;