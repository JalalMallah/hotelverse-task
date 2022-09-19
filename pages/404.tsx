import styles from '@styles/404.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <span>404</span>
      <p>This page could not be found.</p>
    </div>
  );
};

export default PageNotFound;
