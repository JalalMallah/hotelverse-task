import { useRouter } from 'next/router';
import { useAppContext } from '@context/context';
import Image from 'next/image';

import { Product } from '..';

import styles from '@styles/product.module.scss';

const Product = () => {
  const { cart, setCart, products } = useAppContext();
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(
    (product: Product) => product.id.toString() === id
  );

  if (!product) {
    return null;
  }

  const { category, description, image, price, title } = product;

  const addToCart = () => setCart([...cart, product]);

  const goBackHome = () => router.push('/');

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} layout='fill' className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.info}>{description}</p>
        <p className={styles.info}>Category: {category}</p>
        <p className={styles.info}>Price: ${price} USD</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.addToCart} onClick={addToCart}>
            Add to cart
          </button>
          <button onClick={goBackHome}>&larr; Back to products</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
