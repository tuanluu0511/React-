import { uiAction } from './ui-slice';
import { cartAction } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-d638f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

      if (!response.ok) {
        throw new Error('Fetch data failed!');
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          total: cartData.total || 0,
          quantity: cartData.quantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Welcome back!',
          message: 'Your cart is empty!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-http-d638f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify({ items: cart.items, total: cart.total, quantity: cart.quantity }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        })
      );
    }
  };
};
