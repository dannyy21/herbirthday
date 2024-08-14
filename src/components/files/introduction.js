import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import '../css/introduction.css';
import butlerGif from '../../assets/butler.gif';
import birthdayGif from '../../assets/birthday.gif';
import eousGif from '../../assets/eous.gif';
import sharkGif from '../../assets/sharkboo.gif';
import pandaGif from '../../assets/cake.gif';
import cakeGif2 from '../../assets/cake2.gif';
import birthday2 from '../../assets/birthday2.gif';

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  background-color: #f7f7f7;
  color: #333;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MessageContainer = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  box-sizing: border-box; /* Tambahkan ini */

  @media (max-width: 768px) {
    padding: 20px;
  }
`;


const Message = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #7f8c8d;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GifContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }
`;

const GifWrapper = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 5px;
  }
`;

const Gif = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const GifCaption = styled.div`
  padding: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled(motion.button)`
  background-color: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
    margin-top: 20px;
  }
`;

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const gifData = [
    { src: butlerGif, alt: "Butler", caption: "Pelayan Setia" },
    { src: sharkGif, alt: "Shark", caption: "Hiu Lucu" },
    { src: eousGif, alt: "Eous", caption: "Eous Imut" },
    // { src: pandaGif, alt: "Panda Cake", caption: "Kue Panda" },
    // { src: birthdayGif, alt: "Birthday", caption: "Selamat Ulang Tahun!" },
    // { src: cakeGif2, alt: "Cake", caption: "Kue Lezat" },
    // { src: birthday2, alt: "Birthday 2", caption: "Pesta Meriah" },
  ];

  return (
    <IntroductionContainer>
      {/* <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selamat Datang di Dunia Keajaiban
      </Title> */}

      <MessageContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Message>
          Welcome to this simple website! It’s designed for your birthday. It may be simple, but I hope it brings a smile to your face and adds a touch of joy to your day!
        </Message>
      </MessageContainer>

      {/* <AnimatePresence>
        {isVisible && (
          <GifContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {gifData.map((gif, index) => (
              <GifWrapper
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedGif(gif)}
              >
                <Gif src={gif.src} alt={gif.alt} />
                <GifCaption>{gif.caption}</GifCaption>
              </GifWrapper>
            ))}
          </GifContainer>
        )}
      </AnimatePresence> */}

      {/* <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Sembunyikan Gif" : "Tampilkan Gif"}
      </Button> */}

      {/* <AnimatePresence>
        {selectedGif && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000,
            }}
            onClick={() => setSelectedGif(null)}
          >
            <motion.img
              src={selectedGif.src}
              alt={selectedGif.alt}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </IntroductionContainer>
  );
}

export default Introduction;
