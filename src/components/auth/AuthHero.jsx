import {
  Users,
  Coins,
  Gem,
  ShieldCheck,
  Gift,
  BadgeCheck,
  Lock,
} from 'lucide-react';

import styles from './AuthHero.module.css';

import rewardHero from '../../assets/images/rewards/reward-hero.png';
import registerHero from '../../assets/images/rewards/register-hero.png';
import forgotPasswordHero from '../../assets/images/rewards/forgot-password-hero.png';
import amazonCard from '../../assets/images/rewards/amazon-card.png';
import paypalCard from '../../assets/images/rewards/paypal-card.png';
import googlePlayCard from '../../assets/images/rewards/google-play-card.png';

// Hero configuration for each auth page
const heroConfig = {
  login: {
    title: 'Welcome Back!',
    subtitle: 'Earn More. Engage More. Get Rewarded.',
    description:
      'Join thousands of users who earn exciting rewards every day with VELOOP Rewards.',
    illustration: rewardHero,
    showStats: true,
    showRewardCards: true,
    showDecorations: 'rewards',
  },
  register: {
    title: 'Create Your Account',
    subtitle: 'Start Earning Rewards',
    description:
      'Join VELOOP Rewards and start earning exciting rewards today.',
    illustration: registerHero,
    showStats: true,
    showRewardCards: false,
    showDecorations: 'coins-shield',
  },
  forgotPassword: {
    title: 'Forgot Password?',
    subtitle: 'Reset Your Password',
    description:
      'No worries! Reset your password in a few simple steps.',
    illustration: forgotPasswordHero,
    showStats: false,
    showRewardCards: false,
    showDecorations: 'security',
  },
};

function AuthHero({ variant = 'login' }) {
  const config = heroConfig[variant] || heroConfig.login;

  return (
    <section className={`${styles.hero} ${styles[variant]}`}>

      {/* ==============================
          HERO COPY
      ============================== */}

      <div className={styles.heroCopy}>

        <h1>
          {config.title}
        </h1>

        <h2>
          {config.subtitle}
        </h2>

        <p>
          {config.description}
        </p>

      </div>


      {/* ==============================
          HERO ILLUSTRATION SECTION
          (with decorative elements)
      ============================== */}

      <div className={`${styles.heroStage} ${styles[`stage-${variant}`]}`}>

        {/* Main glow */}
        <div className={styles.mainGlow} />

        {/* Decorative ring */}
        <div className={styles.heroRing} />


        {/* LOGIN VARIANT - Reward Cards + Gems + Coins */}
        {variant === 'login' && config.showRewardCards && (
          <>
            {/* Amazon */}
            <img
              src={amazonCard}
              alt="Amazon Gift Card"
              className={`${styles.floatingCard} ${styles.amazonCard}`}
            />

            {/* PayPal */}
            <img
              src={paypalCard}
              alt="PayPal Cash"
              className={`${styles.floatingCard} ${styles.paypalCard}`}
            />

            {/* Google Play */}
            <img
              src={googlePlayCard}
              alt="Google Play Gift Card"
              className={`${styles.floatingCard} ${styles.googleCard}`}
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
          </>
        )}

        {/* REGISTER VARIANT - Coins + Shield */}
        {variant === 'register' && (
          <>
            {/* Floating coins decoration */}
            <div className={`${styles.coin} ${styles.registerCoinOne}`}>
              <Coins size={40} strokeWidth={1.5} />
            </div>

            <div className={`${styles.coin} ${styles.registerCoinTwo}`}>
              <Coins size={32} strokeWidth={1.5} />
            </div>

            <div className={`${styles.coin} ${styles.registerCoinThree}`}>
              <Coins size={28} strokeWidth={1.5} />
            </div>

            {/* Shield element */}
            <div className={`${styles.shield}`}>
              <ShieldCheck size={48} strokeWidth={1.5} />
            </div>

            {/* Gems for premium feel */}
            <div className={`${styles.gem} ${styles.registerGemOne}`}>
              <Gem size={32} strokeWidth={1.5} />
            </div>
          </>
        )}

        {/* FORGOT PASSWORD VARIANT - Security elements */}
        {variant === 'forgotPassword' && (
          <>
            {/* Sparkles around lock */}
            <div className={`${styles.sparkle} ${styles.sparkleOne}`}>✦</div>
            <div className={`${styles.sparkle} ${styles.sparkleTwo}`}>✦</div>
            <div className={`${styles.sparkle} ${styles.sparkleThree}`}>✦</div>

            {/* Small gems for accent */}
            <div className={`${styles.gem} ${styles.securityGemOne}`}>
              <Gem size={24} strokeWidth={1.5} />
            </div>

            <div className={`${styles.gem} ${styles.securityGemTwo}`}>
              <Gem size={20} strokeWidth={1.5} />
            </div>
          </>
        )}


        {/* MAIN ILLUSTRATION - Variant specific */}
        <img
          src={config.illustration}
          alt={`${variant} illustration`}
          className={`${styles.mainIllustration} ${styles[`illustration-${variant}`]}`}
        />

      </div>


      {/* ==============================
          STATISTICS (if enabled)
      ============================== */}

      {config.showStats && (
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
            <BadgeCheck size={25} />
            <div>
              <strong>500+</strong>
              <span>Brands & Partners</span>
            </div>
          </div>

        </div>
      )}


      {/* ==============================
          TRUST INDICATORS (Always shown)
          Positioned AFTER illustration
          to prevent overlap
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
            <Users size={22} />
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