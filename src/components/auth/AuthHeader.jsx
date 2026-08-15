import { Globe, ChevronDown } from 'lucide-react';
import styles from './AuthHeader.module.css';
import veloopLogo from '../../assets/images/logo/veloop-logo.png';

function AuthHeader() {
  return (
    <header className={styles.header}>
      {/* VELOOP Brand */}
      <div className={styles.brand}>
        <img
          src={veloopLogo}
          alt="VELOOP"
          className={styles.logoImage}
        />

        <div className={styles.brandText}>
          <div className={styles.brandName}>VELOOP</div>
          <div className={styles.brandSubtitle}>R E W A R D S</div>
        </div>
      </div>

      {/* Language Selector */}
      <button
        type="button"
        className={styles.languageButton}
        aria-label="Select language"
      >
        <Globe size={18} strokeWidth={1.8} />
        <span>English</span>
        <ChevronDown size={16} strokeWidth={1.8} />
      </button>
    </header>
  );
}

export default AuthHeader;