// Balloon.js
import React from 'react';
import { motion } from 'framer-motion';
import '../css/balloon.css';

// Fungsi untuk mendapatkan ukuran balon acak
const getRandomSize = () => {
  const sizes = ['1.5rem', '2rem', '3rem', '4rem']; // Ukuran balon: kecil, normal, besar, sangat besar
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const Balloon = ({ index }) => {
  const xOffset = (index - 10) * 20; // Mengatur jarak horizontal untuk distribusi balon
  const size = getRandomSize(); // Ukuran balon acak

  return (
    <motion.div
      className="balloon"
      style={{ fontSize: size }} // Menetapkan ukuran balon
      initial={{ y: '100%', opacity: 0, x: xOffset }}
      animate={{ y: '-300%', opacity: 1 }} // Terbang lebih tinggi
      transition={{ 
        duration: 1.5, // Kecepatan lebih cepat
        ease: 'easeOut', 
        delay: index * 0.1 // Delay acak berdasarkan index
      }}
    >
      🎈
    </motion.div>
  );
};

export default Balloon;
