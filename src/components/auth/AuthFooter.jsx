import styles from "./AuthFooter.module.css";

function AuthFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        {/* Left Side — Copyright */}
        <div className={styles.copyright}>
          © 2025 VELOOP Rewards. All rights reserved.
        </div>

        {/* Right Side — Footer Links */}
        <nav className={styles.links}>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#help">Help Center</a>
        </nav>

      </div>
    </footer>
  );
}

export default AuthFooter;