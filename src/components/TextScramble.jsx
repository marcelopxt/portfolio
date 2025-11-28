import React, { useState, useEffect, useRef } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const TextScramble = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 0.4;
    }, 30);
  };

  useEffect(() => {
    scramble();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span
      className={className}
      style={{ display: "inline-block", minWidth: "10ch" }}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;
