import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created by{' '}
      <a href='https://www.jalalmallah.io/' target='_blank' rel='noreferrer'>
        Jalal Mallah
      </a>
      .
    </footer>
  );
};

export default Footer;
