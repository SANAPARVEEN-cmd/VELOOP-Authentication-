import styles from './AuthLayout.module.css';

function AuthLayout({ children }) {
  return (
    <div className={styles.authLayout}>
      {children}
    </div>
  );
}

export default AuthLayout;