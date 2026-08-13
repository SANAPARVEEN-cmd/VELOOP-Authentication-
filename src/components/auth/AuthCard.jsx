import styles from './AuthCard.module.css';

function AuthCard({ children }) {
  return (
    <section className={styles.card}>
      {children}
    </section>
  );
}

export default AuthCard;