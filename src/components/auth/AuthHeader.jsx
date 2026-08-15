import { Globe, ChevronDown } from 'lucide-react';
import styles from './AuthHeader.module.css';
import veloopLogo from '../../assets/images/logo/veloop-logo.png';

function AuthHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img 
          src={veloopLogo} 
          alt="VELOOP Rewards Logo" 
          className={styles.logoImage}
        />
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