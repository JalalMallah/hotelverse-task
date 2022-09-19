import { useEffect } from 'react';
import { useAppContext } from '@context/context';
import type { NextPage } from 'next';

import Spinner from '@components/Spinner/Spinner';
import Card from '@components/Card/Card';

import styles from '@styles/home.module.scss';

const URL = 'https://fakestoreapi.com/products';

type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

const Home: NextPage = () => {
  const { products, setProducts } = useAppContext();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(URL);

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const json = await response.json();

      setProducts(json);
    };

    getProducts();
  }, [setProducts]);

  if (products.length === 0) {
    return <Spinner />;
  }

  const productList = products.map((product: any) => (
    <Card key={product.id} data={product} />
  ));

  return <div className={styles.container}>{productList}</div>;
};

export default Home;
