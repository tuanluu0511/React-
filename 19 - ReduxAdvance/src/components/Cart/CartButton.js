import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  const showCartHandler = () => {
    dispatch(uiAction.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
