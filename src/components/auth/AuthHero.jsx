import {
  Users,
  Coins,
  Gem,
  ShieldCheck,
  Gift,
  BadgeCheck,
} from "lucide-react";

import styles from "./AuthHero.module.css";

import rewardHero from "../../assets/images/rewards/reward-hero.png";
import registerHero from "../../assets/images/rewards/register-hero.png";
import forgotPasswordHero from "../../assets/images/rewards/forgot-password-hero.png";

import amazonCard from "../../assets/images/rewards/amazon-card.png";
import paypalCard from "../../assets/images/rewards/paypal-card.png";
import googlePlayCard from "../../assets/images/rewards/google-play-card.png";

// ========================================
// HERO CONFIGURATION
// ========================================

const heroConfig = {
  login: {
    title: "Welcome Back!",
    subtitle: "Earn More. Engage More. Get Rewarded.",
    description:
      "Join thousands of users who earn exciting rewards every day with VELOOP Rewards.",
    illustration: rewardHero,
    showStats: true,
    showRewardCards: true,
  },

  register: {
    title: "Create Your Account",
    subtitle: "Start Earning Rewards",
    description:
      "Join VELOOP Rewards and start earning exciting rewards today.",
    illustration: registerHero,
    showStats: true,
    showRewardCards: false,
  },

  forgotPassword: {
    title: "Forgot Password?",
    subtitle: "Reset Your Password",
    description:
      "No worries! Reset your password in a few simple steps.",
    illustration: forgotPasswordHero,
    showStats: false,
    showRewardCards: false,
  },
};

// ========================================
// AUTH HERO COMPONENT
// ========================================

function AuthHero({ variant = "login" }) {
  const config = heroConfig[variant] || heroConfig.login;

  return (
    <section
      className={`${styles.hero} ${styles[variant]}`}
    >
      {/* ========================================
          MAIN CONTENT
          LEFT = COPY + STATS
          RIGHT = ILLUSTRATION
      ======================================== */}

      <div className={styles.heroMain}>

        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <div className={styles.heroLeft}>

          {/* Hero Copy */}
          <div className={styles.heroCopy}>
            <h1>{config.title}</h1>

            <h2>{config.subtitle}</h2>

            <p>{config.description}</p>
          </div>

          {/* ========================================
              STATISTICS
          ======================================== */}

          {config.showStats && (
            <div className={styles.stats}>

              {/* Happy Users */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={26} strokeWidth={2} />
                </div>

                <div className={styles.statContent}>
                  <strong>2M+</strong>
                  <span>Happy Users</span>
                </div>
              </div>

              {/* Rewards Earned */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Coins size={26} strokeWidth={2} />
                </div>

                <div className={styles.statContent}>
                  <strong>15M+</strong>
                  <span>Rewards Earned</span>
                </div>
              </div>

              {/* Brands */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BadgeCheck size={26} strokeWidth={2} />
                </div>

                <div className={styles.statContent}>
                  <strong>500+</strong>
                  <span>Brands & Partners</span>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* ========================================
            RIGHT ILLUSTRATION AREA
        ======================================== */}

        <div
          className={`${styles.heroStage} ${
            styles[`stage-${variant}`]
          }`}
        >

          {/* Main Glow */}
          <div className={styles.mainGlow} />

          {/* Decorative Ring */}
          <div className={styles.heroRing} />

          {/* ========================================
              LOGIN DECORATIONS
          ======================================== */}

          {variant === "login" && config.showRewardCards && (
            <>
              {/* Amazon Gift Card */}
              <img
                src={amazonCard}
                alt="Amazon Gift Card"
                className={`${styles.floatingCard} ${styles.amazonCard}`}
              />

              {/* PayPal Card */}
              <img
                src={paypalCard}
                alt="PayPal Cash"
                className={`${styles.floatingCard} ${styles.paypalCard}`}
              />

              {/* Google Play Card */}
              <img
                src={googlePlayCard}
                alt="Google Play Gift Card"
                className={`${styles.floatingCard} ${styles.googleCard}`}
              />

              {/* ========================================
                  FILLED PURPLE GEMS
              ======================================== */}

              <div
                className={`${styles.gem} ${styles.gemOne}`}
              >
                <Gem
                  size={44}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>

              <div
                className={`${styles.gem} ${styles.gemTwo}`}
              >
                <Gem
                  size={30}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>

              <div
                className={`${styles.gem} ${styles.gemThree}`}
              >
                <Gem
                  size={36}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>

              {/* ========================================
                  DECORATIVE COINS
              ======================================== */}

              <div
                className={`${styles.coin} ${styles.coinOne}`}
              >
                <Coins
                  size={40}
                  strokeWidth={1.7}
                />
              </div>

              <div
                className={`${styles.coin} ${styles.coinTwo}`}
              >
                <Coins
                  size={34}
                  strokeWidth={1.7}
                />
              </div>
            </>
          )}

          {/* ========================================
              REGISTER DECORATIONS
          ======================================== */}

          {variant === "register" && (
            <>
              <div
                className={`${styles.coin} ${styles.registerCoinOne}`}
              >
                <Coins
                  size={42}
                  strokeWidth={1.7}
                />
              </div>

              <div
                className={`${styles.coin} ${styles.registerCoinTwo}`}
              >
                <Coins
                  size={34}
                  strokeWidth={1.7}
                />
              </div>

              <div
                className={`${styles.coin} ${styles.registerCoinThree}`}
              >
                <Coins
                  size={30}
                  strokeWidth={1.7}
                />
              </div>

              {/* Shield */}
              <div className={styles.shield}>
                <ShieldCheck
                  size={50}
                  strokeWidth={1.7}
                />
              </div>

              {/* Filled Gem */}
              <div
                className={`${styles.gem} ${styles.registerGemOne}`}
              >
                <Gem
                  size={36}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>
            </>
          )}

          {/* ========================================
              FORGOT PASSWORD DECORATIONS
          ======================================== */}

          {variant === "forgotPassword" && (
            <>
              {/* Sparkles */}
              <div
                className={`${styles.sparkle} ${styles.sparkleOne}`}
              >
                ✦
              </div>

              <div
                className={`${styles.sparkle} ${styles.sparkleTwo}`}
              >
                ✦
              </div>

              <div
                className={`${styles.sparkle} ${styles.sparkleThree}`}
              >
                ✦
              </div>

              {/* Filled Gems */}
              <div
                className={`${styles.gem} ${styles.securityGemOne}`}
              >
                <Gem
                  size={28}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>

              <div
                className={`${styles.gem} ${styles.securityGemTwo}`}
              >
                <Gem
                  size={24}
                  strokeWidth={1.8}
                  fill="#A855F7"
                  color="#7C3AED"
                />
              </div>
            </>
          )}

          {/* ========================================
              MAIN REWARD ILLUSTRATION
          ======================================== */}

          <img
            src={config.illustration}
            alt={`${variant} illustration`}
            className={`${styles.mainIllustration} ${
              styles[`illustration-${variant}`]
            }`}
          />

        </div>
      </div>

      {/* ========================================
          TRUST INDICATORS
          FULL WIDTH BELOW MAIN CONTENT
      ======================================== */}

      <div className={styles.trustBar}>

        {/* Secure */}
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <ShieldCheck
              size={23}
              strokeWidth={2}
            />
          </div>

          <div>
            <strong>Secure & Safe</strong>
            <span>Your data is protected</span>
          </div>
        </div>

        {/* Rewards */}
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <Gift
              size={23}
              strokeWidth={2}
            />
          </div>

          <div>
            <strong>Instant Rewards</strong>
            <span>Earn as you engage</span>
          </div>
        </div>

        {/* Trusted */}
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <Users
              size={23}
              strokeWidth={2}
            />
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