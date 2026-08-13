import { useEffect, useState } from 'react';

function OTPTimer({
  initialSeconds = 60,
  onResend,
}) {
  const [secondsLeft, setSecondsLeft] =
    useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleResend = () => {
    if (secondsLeft > 0) {
      return;
    }

    setSecondsLeft(initialSeconds);

    if (onResend) {
      onResend();
    }
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const formattedTime = `${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="otp-timer">

      {secondsLeft > 0 ? (
        <p>
          Resend OTP in{' '}
          <strong>{formattedTime}</strong>
        </p>
      ) : (
        <button
          type="button"
          onClick={handleResend}
        >
          Resend OTP
        </button>
      )}

    </div>
  );
}

export default OTPTimer;