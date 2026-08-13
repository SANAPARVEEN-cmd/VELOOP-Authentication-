import { useRef } from 'react';

function OTPInput({ value = '', onChange }) {
  const inputRefs = useRef([]);

  const digits = Array.from({ length: 6 }, (_, index) => value[index] || '');

  const handleChange = (index, event) => {
    const inputValue = event.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(inputValue)) {
      return;
    }

    // Take only the last entered digit
    const digit = inputValue.slice(-1);

    const newOtp = digits.map((item, i) => {
      return i === index ? digit : item;
    }).join('');

    onChange(newOtp);

    // Move to next box
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move backward when pressing Backspace
    if (
      event.key === 'Backspace' &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move with arrow keys
    if (
      event.key === 'ArrowLeft' &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === 'ArrowRight' &&
      index < 5
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedValue = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);

    if (!pastedValue) return;

    onChange(pastedValue);

    const nextIndex = Math.min(pastedValue.length, 5);

    setTimeout(() => {
      inputRefs.current[nextIndex]?.focus();
    }, 0);
  };

  return (
    <div className="otp-input-container">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          className="otp-input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          aria-label={`OTP digit ${index + 1}`}
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
}

export default OTPInput;