import { useAppContext } from '@context/context';
import { useRouter } from 'next/router';

import styles from './cart.module.scss';

const Cart = () => {
  const { cart, setIsCartVisible } = useAppContext();
  const router = useRouter();

  const hideCart = () => setIsCartVisible(false);

  const goToCheckout = () => {
    hideCart();
    router.push('/checkout');
  };

  return (
    <div className={styles.container}>
      <span className={styles.closeIcon} onClick={hideCart}>
        &times;
      </span>
      <h3>Cart</h3>
      <p>You have selected {cart.length} items.</p>
      <button className={styles.goToCheckout} onClick={goToCheckout}>
        Go to checkout
      </button>
    </div>
  );
};

export default Cart;
