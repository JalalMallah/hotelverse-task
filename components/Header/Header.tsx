import { useAppContext } from '@context/context';
import Cart from '@components/Cart/Cart';
import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
  const { cart, isCartVisible, setIsCartVisible } = useAppContext();

  return (
    <header className={styles.header}>
      {isCartVisible && <Cart />}
      <Link href='/'>
        <span className={styles.logo}>MyFakeStore</span>
      </Link>
      <button
        className={styles.cartButton}
        onClick={() => setIsCartVisible(true)}
      >
        Cart ({cart.length})
      </button>
    </header>
  );
};

export default Header;
