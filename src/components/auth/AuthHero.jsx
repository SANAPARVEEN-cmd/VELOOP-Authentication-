import {
  Users,
  Coins,
  Gem,
  ShieldCheck,
  Gift,
  BadgeCheck,
} from 'lucide-react';

import styles from './AuthHero.module.css';

// Replace these imports with your actual asset names later
import rewardHero from '../../assets/images/rewards/reward-hero.png';
import amazonCard from '../../assets/images/rewards/amazon-card.png';
import paypalCard from '../../assets/images/rewards/paypal-card.png';
import googlePlayCard from '../../assets/images/rewards/google-play-card.png';

function AuthHero() {
  return (
    <section className={styles.hero}>

      {/* ================= TOP LOGO ================= */}
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <div className={styles.logoInner}></div>
        </div>

        <div className={styles.logoText}>
          <strong>VELOOP</strong>
          <span>REWARDS</span>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className={styles.content}>

        {/* LEFT TEXT */}
        <div className={styles.textContent}>

          <h1>Welcome Back!</h1>

          <h2>
            Earn More. Engage More. Get Rewarded.
          </h2>

          <p>
            Join thousands of users who earn exciting
            rewards every day with VELOOP Rewards.
          </p>

        </div>


        {/* ================= REWARD VISUAL ================= */}
        <div className={styles.visual}>

          {/* Glow */}
          <div className={styles.glow}></div>

          {/* Circular ring */}
          <div className={styles.rewardRing}></div>


          {/* Amazon Gift Card */}
          <img
            src={amazonCard}
            alt="Amazon Gift Card"
            className={`${styles.rewardCard} ${styles.amazonCard}`}
          />


          {/* PayPal Card */}
          <img
            src={paypalCard}
            alt="PayPal Reward"
            className={`${styles.rewardCard} ${styles.paypalCard}`}
          />


          {/* Google Play Card */}
          <img
            src={googlePlayCard}
            alt="Google Play Reward"
            className={`${styles.rewardCard} ${styles.googleCard}`}
          />


          {/* Gem */}
          <div className={`${styles.gem} ${styles.gemOne}`}>
            <Gem size={42} />
          </div>

          <div className={`${styles.gem} ${styles.gemTwo}`}>
            <Gem size={27} />
          </div>

          <div className={`${styles.gem} ${styles.gemThree}`}>
            <Gem size={34} />
          </div>


          {/* Coins */}
          <div className={`${styles.coin} ${styles.coinOne}`}>
            <Coins size={42} />
          </div>

          <div className={`${styles.coin} ${styles.coinTwo}`}>
            <Coins size={34} />
          </div>


          {/* Main Gift */}
          <img
            src={rewardHero}
            alt="VELOOP Rewards"
            className={styles.giftImage}
          />

        </div>


        {/* ================= STATS ================= */}
        <div className={styles.stats}>

          <div className={styles.statCard}>
            <Users size={27} />

            <strong>2M+</strong>

            <span>Happy Users</span>
          </div>


          <div className={styles.statCard}>
            <Coins size={27} />

            <strong>15M+</strong>

            <span>Rewards Earned</span>
          </div>


          <div className={styles.statCard}>
            <Gem size={27} />

            <strong>500+</strong>

            <span>Brands & Partners</span>
          </div>

        </div>

      </div>


      {/* ================= TRUST BAR ================= */}
      <div className={styles.trustBar}>

        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <ShieldCheck size={25} />
          </div>

          <div>
            <strong>Secure & Safe</strong>
            <span>Your data is protected</span>
          </div>

        </div>


        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <Gift size={25} />
          </div>

          <div>
            <strong>Instant Rewards</strong>
            <span>Earn as you engage</span>
          </div>

        </div>


        <div className={styles.trustItem}>

          <div className={styles.trustIcon}>
            <BadgeCheck size={25} />
          </div>

          <div>
            <strong>Trusted Platform</strong>
            <span>Millions of happy users</span>
          </div>

        </div>

      </div>


      {/* ================= FOOTER ================= */}
      <div className={styles.footer}>

        <span>
          © 2025 VELOOP Rewards. All rights reserved.
        </span>

      </div>

    </section>
  );
}

export default AuthHero;