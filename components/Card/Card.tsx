import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@pages/index';

import styles from './card.module.scss';

type Props = {
  data: Product;
};

const Card = ({ data }: Props) => {
  const { id, image, price, title } = data;

  return (
    <Link href={`/product/${id}`}>
      <div className={styles.card}>
        <Image src={image} alt={title} layout='fill' className={styles.image} />
        <div className={styles.infoContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.price}>${price} USD</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
