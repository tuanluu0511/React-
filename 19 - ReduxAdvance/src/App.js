import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiAction } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          status: 'Pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      const response = await fetch('https://react-http-d638f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', { method: 'PUT', body: JSON.stringify(cart) });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      dispatch(
        uiAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
