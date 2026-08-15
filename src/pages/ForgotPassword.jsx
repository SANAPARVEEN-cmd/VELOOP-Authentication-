import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OTPInput from '../components/auth/OTPInput';
import OTPTimer from '../components/auth/OTPTimer';
import useOTP from '../hooks/useOTP';

import {
  validateForgotPasswordForm,
  validateOTPForm,
  validateResetPasswordForm,
  getPasswordStrength,
} from '../utils/validators';

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: reset
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

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

  const passwordStrength = getPasswordStrength(password);

  // -------- STEP 1: EMAIL --------

  const handleSendOTP = async (event) => {
    event.preventDefault();

    setMessage('');

    const validationErrors = validateForgotPasswordForm(email);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsLoading(false);

    sendOTP();

    setStep(2);
  };

  // -------- STEP 2: VERIFY OTP --------

  const handleVerifyOTP = async () => {
    setMessage('');

    const validationErrors = validateOTPForm(otp);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setIsLoading(false);

    const verified = await verifyOTP();

    if (verified) {
      setStep(3);
      setErrors({});
    }
  };

  // -------- STEP 3: RESET PASSWORD --------

  const handleResetPassword = async (event) => {
    event.preventDefault();

    setMessage('');

    const validationErrors = validateResetPasswordForm(
      password,
      confirmPassword
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setIsLoading(false);

    setMessage(
      'Password reset successful! Redirecting to login...'
    );

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  // -------- HANDLE BACK --------

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleBackToEmail = () => {
    setStep(1);
    resetOTP();
    setErrors({});
    setMessage('');
  };

  return (
    <div className="login-page">
      {/* =========================
          HEADER
      ========================= */}

      <h2>Forgot Password?</h2>

      <p className="login-subtitle">
        No worries! Reset your password in a few simple steps.
      </p>

      {/* =========================
          STEP INDICATOR
      ========================= */}

      <div className="steps-indicator">
        <div
          className={`step ${
            step === 1 ? 'active' : ''
          } ${step > 1 ? 'completed' : ''}`}
        >
          <div className="step-number">1</div>
          <span className="step-label">Email</span>
        </div>

        <span className="step-arrow">→</span>

        <div
          className={`step ${
            step === 2 ? 'active' : ''
          } ${step > 2 ? 'completed' : ''}`}
        >
          <div className="step-number">2</div>
          <span className="step-label">Verify OTP</span>
        </div>

        <span className="step-arrow">→</span>

        <div
          className={`step ${
            step === 3 ? 'active' : ''
          } ${step > 3 ? 'completed' : ''}`}
        >
          <div className="step-number">3</div>
          <span className="step-label">Reset</span>
        </div>
      </div>

      {/* ==================================================
          STEP 1: ENTER EMAIL
      ================================================== */}

      {step === 1 && (
        <form onSubmit={handleSendOTP}>
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <div
              className={`input-wrapper ${
                errors.email ? 'input-error' : ''
              }`}
            >
              <Mail size={18} />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your registered email"
                value={email}
                autoComplete="email"
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors((previous) => ({
                      ...previous,
                      email: '',
                    }));
                  }
                }}
              />
            </div>

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              'Sending OTP...'
            ) : (
              <>
                <span>Send Reset OTP</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      )}

      {/* ==================================================
          STEP 2: VERIFY OTP
      ================================================== */}

      {step === 2 && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ color: '#696477', fontSize: '14px' }}>
              Enter the 6-digit OTP sent to{' '}
              <strong>{email}</strong>
            </p>
          </div>

          <OTPInput
            value={otp}
            onChange={setOtp}
            disabled={isLoading}
          />

          {otpError && (
            <span className="field-error">
              {otpError}
            </span>
          )}

          {errors.otp && (
            <span className="field-error">
              {errors.otp}
            </span>
          )}

          <div
            style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '13px',
              color: '#696477',
            }}
          >
            {isOTPSent ? (
              <>
                Didn't receive OTP?{' '}
                <button
                  type="button"
                  onClick={() => {
                    resetOTP();
                    handleSendOTP({ preventDefault: () => {} });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6d28d9',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Resend OTP
                </button>
                <br />
                <OTPTimer />
              </>
            ) : null}
          </div>

          <button
            type="button"
            className="login-button"
            onClick={handleVerifyOTP}
            disabled={isLoading || otp.length !== 6}
            style={{ marginTop: '20px' }}
          >
            {isLoading ? (
              'Verifying OTP...'
            ) : (
              <>
                <span>Verify OTP</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleBackToEmail}
            style={{
              width: '100%',
              marginTop: '12px',
              background: 'transparent',
              border: 'none',
              color: '#6d28d9',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            Back to Email
          </button>
        </div>
      )}

      {/* ==================================================
          STEP 3: RESET PASSWORD
      ================================================== */}

      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <p style={{ textAlign: 'center', color: '#696477', fontSize: '14px', marginBottom: '20px' }}>
            Create a new strong password for your account.
          </p>

          {/* NEW PASSWORD */}

          <div className="form-group">
            <label htmlFor="newPassword">
              New Password
            </label>

            <div
              className={`input-wrapper ${
                errors.password ? 'input-error' : ''
              }`}
            >
              <Lock size={18} />

              <input
                id="newPassword"
                name="newPassword"
                type={
                  showPassword ? 'text' : 'password'
                }
                placeholder="Create a new password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  if (errors.password) {
                    setErrors((previous) => ({
                      ...previous,
                      password: '',
                    }));
                  }
                }}
              />

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
                    (previous) => !previous
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

            {errors.password && (
              <span className="field-error">
                {errors.password}
              </span>
            )}
          </div>

          {/* PASSWORD REQUIREMENTS */}

          {password && (
            <div className="password-requirements">
              <h4>Password Requirements:</h4>

              <div className="requirement-item">
                {passwordStrength.minLength ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span className="met">
                      Minimum 8 characters
                    </span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>
                      Minimum 8 characters
                    </span>
                  </>
                )}
              </div>

              <div className="requirement-item">
                {passwordStrength.hasUppercase ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span className="met">
                      At least one uppercase letter (A-Z)
                    </span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>
                      At least one uppercase letter (A-Z)
                    </span>
                  </>
                )}
              </div>

              <div className="requirement-item">
                {passwordStrength.hasLowercase ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span className="met">
                      At least one lowercase letter (a-z)
                    </span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>
                      At least one lowercase letter (a-z)
                    </span>
                  </>
                )}
              </div>

              <div className="requirement-item">
                {passwordStrength.hasDigit ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span className="met">
                      At least one digit (0-9)
                    </span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>At least one digit (0-9)</span>
                  </>
                )}
              </div>

              <div className="requirement-item">
                {passwordStrength.hasSpecial ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span className="met">
                      At least one special character
                    </span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>
                      At least one special character
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* CONFIRM PASSWORD */}

          <div className="form-group">
            <label htmlFor="confirmNewPassword">
              Confirm Password
            </label>

            <div
              className={`input-wrapper ${
                errors.confirmPassword
                  ? 'input-error'
                  : ''
              }`}
            >
              <Lock size={18} />

              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(
                    event.target.value
                  );

                  if (errors.confirmPassword) {
                    setErrors((previous) => ({
                      ...previous,
                      confirmPassword: '',
                    }));
                  }
                }}
              />

              <button
                type="button"
                className="password-toggle"
                aria-label={
                  showConfirmPassword
                    ? 'Hide password'
                    : 'Show password'
                }
                onClick={() =>
                  setShowConfirmPassword(
                    (previous) => !previous
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <span className="field-error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* RESET BUTTON */}

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              'Resetting Password...'
            ) : (
              <>
                <span>Reset Password</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>

          {/* SUCCESS MESSAGE */}

          {message && (
            <div className="form-success">
              {message}
            </div>
          )}
        </form>
      )}

      {/* BACK TO LOGIN */}

      <button
        type="button"
        onClick={handleBackToLogin}
        style={{
          width: '100%',
          marginTop: '16px',
          background: 'transparent',
          border: 'none',
          color: '#6d28d9',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
        }}
      >
        Back to Login
      </button>
    </div>
  );
}

export default ForgotPassword;
