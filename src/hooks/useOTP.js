import { useState } from 'react';

function useOTP(length = 6) {
  const [otp, setOtp] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const sendOTP = () => {
    setError('');
    setOtp('');

    // Frontend demo
    setIsOTPSent(true);
  };

  const verifyOTP = async () => {
    setError('');

    if (otp.length !== length) {
      setError(`Please enter the ${length}-digit OTP.`);
      return false;
    }

    setIsVerifying(true);

    // Simulate verification
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsVerifying(false);

    // Dummy OTP for frontend testing
    if (otp === '123456') {
      return true;
    }

    setError('Invalid OTP. Try 123456 for the demo.');

    return false;
  };

  const resetOTP = () => {
    setOtp('');
    setIsOTPSent(false);
    setIsVerifying(false);
    setError('');
  };

  return {
    otp,
    setOtp,
    isOTPSent,
    isVerifying,
    error,
    sendOTP,
    verifyOTP,
    resetOTP,
  };
}

export default useOTP;