import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <h2>Login to Your Account</h2>

      <p className="login-subtitle">
        Sign in to continue earning rewards and unlock more.
      </p>

      <div className="auth-tabs">
        <button className="active">
          <Mail size={18} />
          Email Login
        </button>

        <button>
          OTP Login
        </button>

        <button>
          Google Login
        </button>
      </div>

      <form>

        <div className="form-group">
          <label>Email Address</label>

          <div className="input-wrapper">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="input-wrapper">

            <Lock size={18} />

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>
        </div>

        <div className="login-options">

          <label className="remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>

          <button type="button" className="forgot-link">
            Forgot Password?
          </button>

        </div>

        <button type="submit" className="login-button">
          <span>Login</span>
          <ArrowRight size={20} />
        </button>

      </form>

      <p className="create-account">
        Don't have an account?
        <button type="button">
          Create Account
        </button>
      </p>

    </div>
  );
}

export default Login;