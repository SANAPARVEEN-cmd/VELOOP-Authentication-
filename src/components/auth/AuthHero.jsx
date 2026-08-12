import { Gift, Users, Coins } from 'lucide-react';
import styles from './AuthHero.module.css';

function AuthHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>

        <span className={styles.badge}>
          <Gift size={15} />
          Rewarding Every Interaction
        </span>

        <h1>
          Earn More.
          <br />
          Engage More.
          <br />
          <span>Get Rewarded.</span>
        </h1>

        <p>
          Join thousands of users who earn exciting rewards
          every day with VELOOP Rewards.
        </p>

        <div className={styles.stats}>

          <div className={styles.statCard}>
            <Users size={22} />
            <strong>2M+</strong>
            <span>Happy Users</span>
          </div>

          <div className={styles.statCard}>
            <Coins size={22} />
            <strong>15M+</strong>
            <span>Rewards Earned</span>
          </div>

          <div className={styles.statCard}>
            <Gift size={22} />
            <strong>500+</strong>
            <span>Brands & Partners</span>
          </div>

        </div>

      </div>

      <div className={styles.heroGlow} />
    </section>
  );
}

export default AuthHero;