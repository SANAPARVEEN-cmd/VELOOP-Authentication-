import { ShieldCheck, Lock, Settings } from 'lucide-react';
import styles from './AuthCard.module.css';

function AuthCard({ children }) {
  return (
    <section className={styles.card}>

      <div className={styles.cardContent}>
        {children}
      </div>

      {/* ========================================
          SECURITY / TRUST BADGES
          Matches reference: SSL badge left,
          lock badge centered, safety badge right
      ======================================== */}

      <div className={styles.securityBar}>

        <div className={styles.securityItem}>
          <div className={`${styles.securityIcon} ${styles.iconGreen}`}>
            <ShieldCheck size={16} strokeWidth={2} />
          </div>
          <div className={styles.securityText}>
            <strong>256-bit SSL Encrypted</strong>
            <span>Your security is our priority</span>
          </div>
        </div>

        <div className={styles.lockBadge}>
          <Lock size={22} strokeWidth={2} />
        </div>

        <div className={styles.securityItem}>
          <div className={`${styles.securityIcon} ${styles.iconGray}`}>
            <Settings size={16} strokeWidth={2} />
          </div>
          <div className={styles.securityText}>
            <strong>Your data is 100% safe</strong>
            <span>We never share your data</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AuthCard;