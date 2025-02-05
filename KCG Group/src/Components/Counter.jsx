import React, { useState, useEffect } from "react";

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"; // Convert to M
  if (num >= 1000) return (num / 1000).toFixed(1) + "K"; // Convert to K
  return num; // Keep as is for smaller numbers
};

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [start, end, duration]);

  return <span>{formatNumber(count)}+</span>; // Format number dynamically
};

export default Counter;
