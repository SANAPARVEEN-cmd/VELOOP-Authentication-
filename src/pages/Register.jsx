import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  User,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  validateRegisterForm,
  getPasswordStrength,
  isValidEmail,
} from '../utils/validators';

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

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('');

  const [activeTab, setActiveTab] = useState('email');

  const passwordStrength = getPasswordStrength(password);

  // -------- EMAIL REGISTER --------

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRegisterMessage('');

    const validationErrors = validateRegisterForm(
      fullName,
      email,
      password,
      confirmPassword,
      termsAccepted
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

    setRegisterMessage(
      'Account created successfully! Welcome to VELOOP Rewards.'
    );

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  // -------- HANDLE TAB CHANGE --------

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setRegisterMessage('');
  };

  // -------- GOOGLE SIGN UP --------

  const handleGoogleSignUp = async () => {
    setRegisterMessage('');
    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsLoading(false);

    setRegisterMessage(
      'Google sign up is currently in frontend demo mode.'
    );
  };

  return (
    <div className="login-page">
      {/* =========================
          HEADER
      ========================= */}

      <h2>Create Your Account</h2>

      <p className="login-subtitle">
        Join VELOOP Rewards and start earning exciting rewards today.
      </p>

      {/* =========================
          TABS
      ========================= */}

      <div className="auth-tabs">
        <button
          type="button"
          className={activeTab === 'email' ? 'active' : ''}
          onClick={() => handleTabChange('email')}
        >
          <Mail size={19} strokeWidth={2} />
          <span>Email Register</span>
        </button>

        <button
          type="button"
          className={activeTab === 'otp' ? 'active' : ''}
          onClick={() => handleTabChange('otp')}
        >
          <Mail size={19} strokeWidth={2} />
          <span>OTP Register</span>
        </button>

        <button
          type="button"
          className={activeTab === 'google' ? 'active' : ''}
          onClick={() => handleTabChange('google')}
        >
          <GoogleIcon />
          <span>Google Sign Up</span>
        </button>
      </div>

      {/* ==================================================
          EMAIL REGISTER
      ================================================== */}

      {activeTab === 'email' && (
        <form onSubmit={handleSubmit}>
          {/* FULL NAME */}

          <div className="form-group">
            <label htmlFor="fullName">
              Full Name
            </label>

            <div
              className={`input-wrapper ${
                errors.fullName ? 'input-error' : ''
              }`}
            >
              <User size={18} />

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);

                  if (errors.fullName) {
                    setErrors((previous) => ({
                      ...previous,
                      fullName: '',
                    }));
                  }
                }}
              />
            </div>

            {errors.fullName && (
              <span className="field-error">
                {errors.fullName}
              </span>
            )}
          </div>

          {/* EMAIL */}

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
                placeholder="Enter your email"
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

          {/* PASSWORD */}

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <div
              className={`input-wrapper ${
                errors.password ? 'input-error' : ''
              }`}
            >
              <Lock size={18} />

              <input
                id="password"
                name="password"
                type={
                  showPassword ? 'text' : 'password'
                }
                placeholder="Create a password"
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
            <label htmlFor="confirmPassword">
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
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                placeholder="Confirm your password"
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

          {/* REFERRAL CODE (OPTIONAL) */}

          <div className="form-group">
            <label htmlFor="referral">
              Referral Code{' '}
              <span style={{ color: '#999' }}>
                (Optional)
              </span>
            </label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                id="referral"
                name="referral"
                type="text"
                placeholder="Enter referral code (if any)"
                value={referralCode}
                onChange={(event) =>
                  setReferralCode(event.target.value)
                }
              />
            </div>
          </div>

          {/* TERMS & PRIVACY */}

          <div className="form-group">
            <label className="remember">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) =>
                  setTermsAccepted(
                    event.target.checked
                  )
                }
              />

              <span>
                I agree to the{' '}
                <button
                  type="button"
                  style={{
                    color: 'var(--veloop-primary)',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 3px',
                  }}
                >
                  Terms of Service
                </button>
                {' '}and{' '}
                <button
                  type="button"
                  style={{
                    color: 'var(--veloop-primary)',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 3px',
                  }}
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            {errors.terms && (
              <span className="field-error">
                {errors.terms}
              </span>
            )}
          </div>

          {/* CREATE ACCOUNT BUTTON */}

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Creating Account...</span>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>

          {/* SUCCESS MESSAGE */}

          {registerMessage && (
            <div className="form-success">
              {registerMessage}
            </div>
          )}
        </form>
      )}

      {/* ==================================================
          OTP REGISTER
      ================================================== */}

      {activeTab === 'otp' && (
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0',
            color: '#696477',
          }}
        >
          <p>
            OTP registration is coming soon!
          </p>
        </div>
      )}

      {/* ==================================================
          GOOGLE SIGN UP
      ================================================== */}

      {activeTab === 'google' && (
        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            className="login-button"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            style={{ marginBottom: '20px' }}
          >
            <GoogleIcon />
            {isLoading ? 'Signing up...' : 'Sign Up with Google'}
          </button>

          {registerMessage && (
            <div className="form-success">
              {registerMessage}
            </div>
          )}
        </div>
      )}

      {/* ALREADY HAVE ACCOUNT */}

      <div className="create-account">
        Already have an account?
        <button
          type="button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
