import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Balloon from './balloon';
import Confetti from './confetti';
import '../css/intro.css';

function Intro({ onIntroDone }) {
  const [counter, setCounter] = useState(1);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let intervalTime = 125;
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 23) {
          return prev + 1;
        } else if (prev === 23) {
          clearInterval(interval);
          setTimeout(() => {
            setCounter(24);
            setTimeout(() => {
              setShowBalloons(true);
              setTimeout(() => {
                setShowConfetti(true);
                setTimeout(() => {
                  onIntroDone();
                }, 2000);
              }, 1000);
            }, 1000);
          }, 1000);
          return prev;
        }
        return 24;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onIntroDone]);

  return (
    <div className="intro-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="counter">{String(counter).padStart(2, '0')}</div>
      </motion.div>
      {showBalloons && Array.from({ length: 20 }).map((_, index) => (
        <Balloon key={index} index={index} />
      ))}
      {showConfetti && <Confetti />}
    </div>
  );
}

export default Intro;
