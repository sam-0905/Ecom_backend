//Nav link
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';
import { useAlert } from '../Context/Alert-context';
import { useCart } from '../Context/Cart-context';
import { useWish } from '../Context/Wish-context';

const getActiveLink = ({ isActive, isPending }) => ({
  margin: '1rem 0',
  color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
});

export const Title = () => (
    <div>
      <a href="/" className='logo-container'>
        <span className='logo-heading'>Loopizo</span>
      </a>
         
    </div>
  );

const Header = () => {    
    const {isLoggedIn,setIsLoggedIn} = useAuth();
    const {showAlert} = useAlert();
    const {state} = useCart()
    const {wishState} = useWish()

   return (
    <>   
    <div className="header">
         <Title/>
    <nav className="Nav link ">
        <NavLink style={getActiveLink} to="/products">
        <span className="fa fa-product-hunt container"> Products  </span>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        {wishState.length > 0 && <span className="badge-wish">{wishState.length}</span>}
        <span className="fa fa-heart container"> Wishlist</span>
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
           {state.quantity > 0 && (
            <span className="badge">{state.quantity}</span>
          )}                
           <span className="fa fa-cart-arrow-down container"> Cart</span>

        </NavLink>
        <NavLink style={getActiveLink} to="/login" 
        onClick={() =>{ {
          setIsLoggedIn((prev) => !prev)
          showAlert("Logged out successfully!", "error")
        }
      }}
        >
        <span className="fa fa-sign-in container">  {isLoggedIn ? "Logout" : "Login"} </span>
        </NavLink>

        <NavLink style={getActiveLink} to="/address">
        <span className="fa fa-cart-arrow-down container"> address</span>
        </NavLink>
      </nav>
    </div>
    </>
   )
}

export default Header;