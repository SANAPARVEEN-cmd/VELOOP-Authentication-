import {
  Users,
  Coins,
  Gem,
  ShieldCheck,
  Gift,
  BadgeCheck,
} from 'lucide-react';

import styles from './AuthHero.module.css';

import rewardHero from '../../assets/images/rewards/reward-hero.png';
import amazonCard from '../../assets/images/rewards/amazon-card.png';
import paypalCard from '../../assets/images/rewards/paypal-card.png';
import googlePlayCard from '../../assets/images/rewards/google-play-card.png';

import veloopLogo from '../../assets/images/logo/veloop-logo.png';

function AuthHero() {
  return (
    <section className={styles.hero}>

      {/* ==============================
          HERO COPY
      ============================== */}

      <div className={styles.heroCopy}>

        <h1>
          Welcome Back!
        </h1>

        <h2>
          Earn More. Engage More. Get Rewarded.
        </h2>

        <p>
          Join thousands of users who earn exciting
          rewards every day with VELOOP Rewards.
        </p>

      </div>


      {/* ==============================
          REWARD STAGE
      ============================== */}

      <div className={styles.rewardStage}>

        {/* Main glow */}
        <div className={styles.mainGlow} />

        {/* Decorative ring */}
        <div className={styles.rewardRing}>
          <div className={styles.ringAccent} />
        </div>


        {/* Amazon */}
        <img
          src={amazonCard}
          alt="Amazon Gift Card"
          className={`${styles.rewardCard} ${styles.amazonCard}`}
        />


        {/* PayPal */}
        <img
          src={paypalCard}
          alt="PayPal Cash"
          className={`${styles.rewardCard} ${styles.paypalCard}`}
        />


        {/* Google Play */}
        <img
          src={googlePlayCard}
          alt="Google Play Gift Card"
          className={`${styles.rewardCard} ${styles.googleCard}`}
        />


        {/* Decorative gems */}

        <div className={`${styles.gem} ${styles.gemOne}`}>
          <Gem size={40} strokeWidth={1.5} />
        </div>

        <div className={`${styles.gem} ${styles.gemTwo}`}>
          <Gem size={26} strokeWidth={1.5} />
        </div>

        <div className={`${styles.gem} ${styles.gemThree}`}>
          <Gem size={32} strokeWidth={1.5} />
        </div>


        {/* Decorative coins */}

        <div className={`${styles.coin} ${styles.coinOne}`}>
          <Coins size={38} strokeWidth={1.5} />
        </div>

        <div className={`${styles.coin} ${styles.coinTwo}`}>
          <Coins size={32} strokeWidth={1.5} />
        </div>


        {/* Main gift */}

        <img
          src={rewardHero}
          alt="VELOOP Rewards"
          className={styles.giftImage}
        />

      </div>


      {/* ==============================
          STATISTICS
      ============================== */}

      <div className={styles.stats}>

        <div className={styles.statCard}>

          <Users size={25} />

          <div>
            <strong>2M+</strong>
            <span>Happy Users</span>
          </div>

        </div>


        <div className={styles.statCard}>

          <Coins size={25} />

          <div>
            <strong>15M+</strong>
            <span>Rewards Earned</span>
          </div>

        </div>


        <div className={styles.statCard}>

          <Gem size={25} />

          <div>
            <strong>500+</strong>
            <span>Brands & Partners</span>
          </div>

        </div>

      </div>


      {/* ==============================
          TRUST FEATURES
      ============================== */}

      <div className={styles.trustBar}>

        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>Secure & Safe</strong>
            <span>Your data is protected</span>
          </div>

        </div>


        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <Gift size={22} />
          </div>

          <div>
            <strong>Instant Rewards</strong>
            <span>Earn as you engage</span>
          </div>

        </div>


        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <BadgeCheck size={22} />
          </div>

          <div>
            <strong>Trusted Platform</strong>
            <span>Millions of happy users</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AuthHero;