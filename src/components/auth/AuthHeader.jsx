import { Globe, ChevronDown } from 'lucide-react';
import styles from './AuthHeader.module.css';

function AuthHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          V
        </div>

        <div className={styles.logoText}>
          <span>VELOOP</span>
          <small>REWARDS</small>
        </div>
      </div>

      <button className={styles.languageButton}>
        <Globe size={17} />
        <span>English</span>
        <ChevronDown size={15} />
      </button>
    </header>
  );
}

export default AuthHeader;