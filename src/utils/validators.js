export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
  // At least 8 characters
  if (password.length < 8) return false;
  // At least one uppercase
  if (!/[A-Z]/.test(password)) return false;
  // At least one lowercase
  if (!/[a-z]/.test(password)) return false;
  // At least one digit
  if (!/\d/.test(password)) return false;
  // At least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return false;
  return true;
}

export function getPasswordStrength(password) {
  const checks = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasDigit: /\d/.test(password),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };
  return checks;
}

export function validateLoginForm(email, password) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  }

  return errors;
}

export function validateRegisterForm(fullName, email, password, confirmPassword, termsAccepted) {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
  }

  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  } else if (!isValidPassword(password)) {
    errors.password = 'Password does not meet requirements.';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  if (!termsAccepted) {
    errors.terms = 'You must accept the Terms of Service and Privacy Policy.';
  }

  return errors;
}

export function validateForgotPasswordForm(email) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

export function validateOTPForm(otp) {
  const errors = {};

  if (!otp) {
    errors.otp = 'OTP is required.';
  } else if (otp.length !== 6) {
    errors.otp = 'OTP must be 6 digits.';
  } else if (!/^\d+$/.test(otp)) {
    errors.otp = 'OTP must contain only numbers.';
  }

  return errors;
}

export function validateResetPasswordForm(password, confirmPassword) {
  const errors = {};

  if (!password) {
    errors.password = 'New password is required.';
  } else if (!isValidPassword(password)) {
    errors.password = 'Password does not meet requirements.';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return errors;
}