
//Nav link
import { NavLink } from 'react-router-dom';
// import AppIcon from "../assets/images/AppIcon.svg"

const getActiveLink = ({ isActive, isPending }) => ({
  margin: '1rem 0',
  color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
});

export const Title = () => (
    <div>
      <a href="/">
        <img className="logo" src={""} alt="logo" />
      </a>
      <span className='Nav' style={{marginRight:"5rem",marginTop:"0.5rem"}}><NavLink style={getActiveLink} to="/body">
        <a className="fa fa-product-hunt container"> Products</a>
        </NavLink></span>
    </div>
  );

const Header = () => {

   return (
    <>   
    <div className="header">
         <Title/>
    <nav className="Nav link ">
        <NavLink style={getActiveLink} to="/">
        <a className="fa fa-home container"> Home  </a>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        <a className="fa fa-heart container"> Wishlist</a>
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
        <a className="fa fa-cart-arrow-down container"> Cart</a>
        </NavLink>
        <NavLink style={getActiveLink} to="/login">
          <a className="fa fa-sign-in container" > Login</a>
        </NavLink>
      </nav>
    </div>
    </>
   )
}

export default Header;