import React from 'react';
import { motion } from 'framer-motion';
import '../css/message.css';

function Message() {
  return (
    <div className="message-container">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ucapan:
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Selamat ulang tahun! Semoga hari ini membawa banyak kebahagiaan dan kenangan indah untukmu. Kamu adalah orang yang sangat istimewa!
      </motion.p>
    </div>
  );
}

export default Message;
