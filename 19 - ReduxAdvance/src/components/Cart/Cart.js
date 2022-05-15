import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const cartIsShow = useSelector((state) => state.ui.showCart);

  let cartItems;
  if (items.length === 0) {
    cartItems = <p>No items yet!</p>;
  } else {
    cartItems = items.map((item) => {
      return <CartItem id={item.id} key={item.id} title={item.title} quantity={item.quantity} total={item.total} price={item.price} />;
    });
  }

  const cartContent = cartIsShow ? (
    <Fragment>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartItems}</ul>
        <h3 className={classes.total}>
          <span>Total:</span>
          <span>${total}</span>
        </h3>
      </Card>
    </Fragment>
  ) : (
    ''
  );

  return cartContent;
};

export default Cart;
