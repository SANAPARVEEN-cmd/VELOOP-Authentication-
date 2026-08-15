import { ShieldCheck, Gift, Users } from 'lucide-react';
import styles from './AuthFooter.module.css';

function AuthFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        {/* Brand / Copyright */}
        <div className={styles.brandSection}>
          <div className={styles.brandRow}>
            <span className={styles.brandName}>VELOOP</span>
            <span className={styles.brandRewards}>REWARDS</span>
          </div>

          <p className={styles.copyright}>
            © 2025 VELOOP Rewards. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <nav className={styles.links}>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#help">Help Center</a>
        </nav>

        {/* Trust Mini Indicators */}
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <div className={styles.icon}>
              <ShieldCheck size={17} />
            </div>
            <span>Secure Platform</span>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.icon}>
              <Gift size={17} />
            </div>
            <span>Instant Rewards</span>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.icon}>
              <Users size={17} />
            </div>
            <span>Trusted by Millions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default AuthFooter;