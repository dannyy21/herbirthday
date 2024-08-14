import React from 'react';
import { motion } from 'framer-motion';
import '../css/jokes.css';

function Jokes() {
  const jokes = [
    "Kenapa tidak ada kue ulang tahun di angkasa? Karena tidak ada atmosfer!",
    "Kenapa komputer tidak bisa merayakan ulang tahun? Karena mereka tidak punya umur!",
  ];

  return (
    <div className="jokes-container">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Ini beberapa lelucon untukmu:
      </motion.h3>
      <ul>
        {jokes.map((joke, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.5 + 1 }}
          >
            {joke}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Jokes;
