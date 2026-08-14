import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Smartphone,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OTPInput from '../components/auth/OTPInput';
import OTPTimer from '../components/auth/OTPTimer';
import useOTP from '../hooks/useOTP';

import { validateLoginForm } from '../utils/validators';

function GoogleIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.24Z"
      />

      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.34l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.75Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 13.85a5.86 5.86 0 0 1 0-3.7V7.62H3.3a9.75 9.75 0 0 0 0 8.76l3.24-2.53Z"
      />

      <path
        fill="#EA4335"
        d="M12 6.12c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.23 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.7 5.37l3.24 2.53C7.31 7.84 9.46 6.12 12 6.12Z"
      />
    </svg>
  );
}

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


    <div className="auth-tabs">

  <button
    type="button"
    className={activeTab === 'email' ? 'active' : ''}
    onClick={() => handleTabChange('email')}
  >
    <Mail size={19} strokeWidth={2} />
    <span>Email Login</span>
  </button>

  <button
    type="button"
    className={activeTab === 'otp' ? 'active' : ''}
    onClick={() => handleTabChange('otp')}
  >
    <Smartphone size={19} strokeWidth={2} />
    <span>OTP Login</span>
  </button>

  <button
    type="button"
    className={activeTab === 'google' ? 'active' : ''}
    onClick={() => handleTabChange('google')}
  >
    <GoogleIcon />
    <span>Google Login</span>
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