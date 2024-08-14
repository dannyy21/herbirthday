// Confetti.js
import React from 'react';
import { motion } from 'framer-motion';
import '../css/confetti.css';

// Fungsi untuk menghasilkan konfeti dengan posisi, ukuran, dan warna acak
const generateConfetti = (count, direction) => {
  return Array.from({ length: count }).map((_, index) => ({
    x: direction === 'left' ? Math.random() * 100 - 50 : Math.random() * -100, // Posisi horizontal acak
    y: Math.random() * 100, // Posisi vertikal acak
    scale: Math.random() * 0.5 + 0.5, // Ukuran acak
    rotation: Math.random() * 360, // Rotasi acak
    delay: Math.random() * 0.5, // Delay acak
    direction, // Arah konfeti
  }));
};

const Confetti = () => {
  const leftConfetti = generateConfetti(50, 'left'); // Konfeti dari kiri
  const rightConfetti = generateConfetti(50, 'right'); // Konfeti dari kanan

  return (
    <div className="confetti-container">
      {leftConfetti.map((confetto, index) => (
        <motion.img
          key={index}
          src="/images/confetti.png" // Path ke gambar konfeti
          className="confetti"
          style={{ transform: `scale(${confetto.scale})` }}
          initial={{ opacity: 0, x: confetto.x, y: confetto.y, rotate: confetto.rotation }}
          animate={{ opacity: 1, y: '-100vh', x: confetto.direction === 'left' ? confetto.x + 300 : confetto.x - 300, rotate: confetto.rotation + 360 }}
          transition={{ duration: 2, ease: 'easeOut', delay: confetto.delay }}
        />
      ))}
      {rightConfetti.map((confetto, index) => (
        <motion.img
          key={index + 50} // Unik key untuk konfeti kanan
          src="/images/confetti.png" // Path ke gambar konfeti
          className="confetti"
          style={{ transform: `scale(${confetto.scale})` }}
          initial={{ opacity: 0, x: confetto.x, y: confetto.y, rotate: confetto.rotation }}
          animate={{ opacity: 1, y: '-100vh', x: confetto.direction === 'right' ? confetto.x - 300 : confetto.x + 300, rotate: confetto.rotation + 360 }}
          transition={{ duration: 2, ease: 'easeOut', delay: confetto.delay }}
        />
      ))}
    </div>
  );
};

export default Confetti;
