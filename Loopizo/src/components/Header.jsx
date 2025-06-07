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
  const { isLoggedIn,logout} = useAuth();
  const { showAlert } = useAlert();
  const { state } = useCart();
  const { wishState } = useWish();


  return (
    <div className="header">
      <Title />
      <nav className="Nav link">
        <NavLink style={getActiveLink} to="/products">
          <span className="fa fa-product-hunt container"> Products </span>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
          <span className="fa fa-heart container"> Wishlist</span>
          { wishState?.length > 0 && (
            <span className="badge-wish">{wishState.length}</span>
          )}
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
          <span className="fa fa-cart-arrow-down container"> Cart</span>
          { state?.quantity > 0 && (
            <span className="badge">{state.quantity}</span>
          )}
        </NavLink>

       {isLoggedIn ? (
        <NavLink style={getActiveLink} >
         <span
          className="fa fa-sign-out container"
          onClick={() => {
          logout();
          showAlert("Logged out successfully", "success");
          }}
        >
        Logout
        </span>
        </NavLink>
     ) : (
        <NavLink style={getActiveLink} to="/login">
        <span className="fa fa-sign-in container">Login</span>
        </NavLink>
        )}

        <NavLink style={getActiveLink} to="/address">
          <span className="fa fa-cart-arrow-down container"> Address</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
