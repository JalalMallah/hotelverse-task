import { useState } from 'react';

import Layout from '@components/Layout/Layout';
import type { AppProps } from 'next/app';
import { AppContext } from '@context/context';

import '@styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const sharedState = {
    products,
    setProducts,
    cart,
    setCart,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={sharedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
