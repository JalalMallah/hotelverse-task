import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import styles from './layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>My Fake Store</title>
        <meta name='description' content='Recruitment task for Hotelverse.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
