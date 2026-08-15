import styles from './AuthFooter.module.css';

function AuthFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>
          © 2025 VELOOP Rewards. All rights reserved.
        </span>

        <div className={styles.footerLinks}>
          <button className={styles.footerLink}>
            Terms of Service
          </button>

          <span>•</span>

          <button className={styles.footerLink}>
            Privacy Policy
          </button>

          <span>•</span>

          <button className={styles.footerLink}>
            Help Center
          </button>
        </div>
      </div>
    </footer>
  );
}

export default AuthFooter;
