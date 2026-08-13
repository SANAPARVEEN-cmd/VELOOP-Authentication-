import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OTPInput from '../components/auth/OTPInput';
import OTPTimer from '../components/auth/OTPTimer';
import useOTP from '../hooks/useOTP';

import { validateLoginForm } from '../utils/validators';

function Login() {
  const navigate = useNavigate();

  // -----------------------------
  // LOGIN STATE
  // -----------------------------

  const [activeTab, setActiveTab] = useState('email');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // -----------------------------
  // OTP STATE
  // -----------------------------

  const {
    otp,
    setOtp,
    isOTPSent,
    isVerifying,
    error: otpError,
    sendOTP,
    verifyOTP,
    resetOTP,
  } = useOTP();

  // -----------------------------
  // EMAIL LOGIN
  // -----------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoginMessage('');

    const validationErrors = validateLoginForm(
      email,
      password
    );

    setErrors(validationErrors);

    // Stop if validation fails
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    // Dummy frontend authentication delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setIsLoading(false);

    setLoginMessage(
      'Login successful! Welcome back.'
    );
  };

  // -----------------------------
  // TAB CHANGE
  // -----------------------------

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setErrors({});
    setLoginMessage('');

    // Reset OTP when leaving OTP tab
    if (tab !== 'otp') {
      resetOTP();
    }
  };

  // -----------------------------
  // GOOGLE LOGIN
  // -----------------------------

  const handleGoogleLogin = async () => {
    setLoginMessage('');
    setIsLoading(true);

    // Dummy frontend Google authentication
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsLoading(false);

    setLoginMessage(
      'Google authentication is currently in frontend demo mode.'
    );
  };

  // -----------------------------
  // OTP VERIFICATION
  // -----------------------------

  const handleVerifyOTP = async () => {
    setLoginMessage('');

    const verified = await verifyOTP();

    if (verified) {
      setLoginMessage(
        'OTP verified successfully!'
      );
    }
  };

  // -----------------------------
  // RESEND OTP
  // -----------------------------

  const handleResendOTP = () => {
    resetOTP();

    // Simulate sending OTP again
    setTimeout(() => {
      sendOTP();
    }, 100);
  };

  return (
    <div className="login-page">

      {/* =========================
          HEADER
      ========================= */}

      <h2>Login to Your Account</h2>

      <p className="login-subtitle">
        Sign in to continue earning rewards and unlock more.
      </p>


      {/* =========================
          AUTH TABS
      ========================= */}

      <div className="auth-tabs">

        {/* EMAIL TAB */}

        <button
          type="button"
          className={
            activeTab === 'email'
              ? 'active'
              : ''
          }
          onClick={() =>
            handleTabChange('email')
          }
        >
          <Mail size={18} />

          <span>Email Login</span>
        </button>


        {/* OTP TAB */}

        <button
          type="button"
          className={
            activeTab === 'otp'
              ? 'active'
              : ''
          }
          onClick={() =>
            handleTabChange('otp')
          }
        >
          OTP Login
        </button>


        {/* GOOGLE TAB */}

        <button
          type="button"
          className={
            activeTab === 'google'
              ? 'active'
              : ''
          }
          onClick={() =>
            handleTabChange('google')
          }
        >
          Google Login
        </button>

      </div>


      {/* ==================================================
          EMAIL LOGIN
      ================================================== */}

      {activeTab === 'email' && (

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <div
              className={`input-wrapper ${
                errors.email
                  ? 'input-error'
                  : ''
              }`}
            >

              <Mail size={18} />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                autoComplete="email"
                onChange={(event) => {

                  setEmail(
                    event.target.value
                  );

                  if (errors.email) {
                    setErrors((previous) => ({
                      ...previous,
                      email: '',
                    }));
                  }

                }}
              />

            </div>


            {/* EMAIL ERROR */}

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div
              className={`input-wrapper ${
                errors.password
                  ? 'input-error'
                  : ''
              }`}
            >

              <Lock size={18} />

              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                placeholder="Enter your password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => {

                  setPassword(
                    event.target.value
                  );

                  if (errors.password) {
                    setErrors((previous) => ({
                      ...previous,
                      password: '',
                    }));
                  }

                }}
              />


              {/* PASSWORD VISIBILITY */}

              <button
                type="button"
                className="password-toggle"
                aria-label={
                  showPassword
                    ? 'Hide password'
                    : 'Show password'
                }
                onClick={() =>
                  setShowPassword(
                    (previous) =>
                      !previous
                  )
                }
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>


            {/* PASSWORD ERROR */}

            {errors.password && (
              <span className="field-error">
                {errors.password}
              </span>
            )}

          </div>


          {/* =========================
              REMEMBER + FORGOT
          ========================= */}

          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(
                    event.target.checked
                  )
                }
              />

              <span>
                Remember Me
              </span>

            </label>


            <button
              type="button"
              className="forgot-link"
              onClick={() =>
                navigate(
                  '/forgot-password'
                )
              }
            >
              Forgot Password?
            </button>

          </div>


          {/* =========================
              LOGIN BUTTON
          ========================= */}

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >

            {isLoading ? (

              <span>
                Logging in...
              </span>

            ) : (

              <>
                <span>
                  Login
                </span>

                <ArrowRight size={20} />
              </>

            )}

          </button>


          {/* LOGIN SUCCESS */}

          {loginMessage && (
            <div className="login-success">
              {loginMessage}
            </div>
          )}

        </form>
      )}


      {/* ==================================================
          OTP LOGIN
      ================================================== */}

      {activeTab === 'otp' && (

        <div className="otp-login">

          {/* -------------------------
              SEND OTP
          ------------------------- */}

          {!isOTPSent ? (

            <>

              <h3>
                Login with OTP
              </h3>

              <p>
                Enter your registered email
                or mobile number to receive
                a one-time password.
              </p>


              <div className="form-group">

                <label htmlFor="otp-contact">
                  Email or Mobile Number
                </label>

                <div className="input-wrapper">

                  <Mail size={18} />

                  <input
                    id="otp-contact"
                    type="text"
                    placeholder="Enter email or mobile number"
                  />

                </div>

              </div>


              <button
                type="button"
                className="login-button"
                onClick={sendOTP}
              >

                <span>
                  Send OTP
                </span>

                <ArrowRight size={20} />

              </button>

            </>

          ) : (

            /* -------------------------
               VERIFY OTP
            ------------------------- */

            <>

              <h3>
                Verify OTP
              </h3>

              <p>
                Enter the 6-digit verification
                code.
              </p>


              {/* OTP INPUT */}

              <OTPInput
                value={otp}
                onChange={setOtp}
                length={6}
                disabled={isVerifying}
              />


              {/* OTP ERROR */}

              {otpError && (
                <p className="field-error">
                  {otpError}
                </p>
              )}


              {/* OTP TIMER */}

              <OTPTimer
                onResend={handleResendOTP}
              />


              {/* VERIFY BUTTON */}

              <button
                type="button"
                className="login-button"
                disabled={isVerifying}
                onClick={handleVerifyOTP}
              >

                <span>
                  {isVerifying
                    ? 'Verifying...'
                    : 'Verify OTP'}
                </span>

                {!isVerifying && (
                  <ArrowRight size={20} />
                )}

              </button>


              {/* OTP SUCCESS */}

              {loginMessage && (
                <div className="login-success">
                  {loginMessage}
                </div>
              )}

            </>

          )}

        </div>
      )}


      {/* ==================================================
          GOOGLE LOGIN
      ================================================== */}

      {activeTab === 'google' && (

        <div className="tab-placeholder">

          <h3>
            Google Login
          </h3>

          <p>
            Continue with your Google
            account to access your VELOOP
            Rewards account.
          </p>


          <button
            type="button"
            className="login-button"
            disabled={isLoading}
            onClick={handleGoogleLogin}
          >

            {isLoading ? (
              <span>
                Connecting...
              </span>
            ) : (
              <>
                <span>
                  Continue with Google
                </span>

                <ArrowRight size={20} />
              </>
            )}

          </button>


          {/* GOOGLE MESSAGE */}

          {loginMessage && (
            <div className="login-success">
              {loginMessage}
            </div>
          )}

        </div>
      )}


      {/* ==================================================
          CREATE ACCOUNT
      ================================================== */}

      <p className="create-account">

        <span>
          Don't have an account?
        </span>

        <button
          type="button"
          onClick={() =>
            navigate('/register')
          }
        >
          Create Account
        </button>

      </p>

    </div>
  );
}

export default Login;