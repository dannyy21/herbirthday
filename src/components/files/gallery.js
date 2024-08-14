import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from '../../assets/her.jpg';
import photo2 from '../../assets/her2.jpg';
import photo3 from '../../assets/foto1.jpg';
import photo4 from '../../assets/foto2.jpg';
import photo5 from '../../assets/foto3.jpg';
import photo6 from '../../assets/foto4.jpg';
import photo7 from '../../assets/foto5.jpg';
import photo8 from '../../assets/foto6.jpg';
import photo9 from '../../assets/foto7.jpg';
import photo10 from '../../assets/foto8.png';
import photo11 from '../../assets/foto9.jpg';
import photo12 from '../../assets/foto10.jpg';
import bangbooye from '../../assets/bangbooye.png'; // Import the new image
import eousGif from '../../assets/eous.gif';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  padding: 60px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px; /* Kurangi padding pada perangkat seluler */
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column; /* Ubah arah flex menjadi kolom pada perangkat seluler */
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem; /* Sesuaikan ukuran font pada perangkat seluler */
  }
`;

const TitleImage = styled.img`
  margin-left: 40px; /* Geser gambar lebih ke kanan */
  height: 150px; /* Ukuran gambar tetap */

  @media (max-width: 768px) {
    margin-left: 0; /* Hapus margin pada perangkat seluler */
    height: 120px; /* Sesuaikan ukuran gambar pada perangkat seluler */
  }
`;

const PhotoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Mengubah grid menjadi responsif */
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const PhotoWrapper = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoWrapper}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 150px; /* Sesuaikan tinggi gambar pada perangkat seluler */
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.img)`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    max-height: 80%; /* Sesuaikan tinggi maksimal pada perangkat seluler */
  }
`;

const Gif = styled.img`
  max-width: 200px;
  border-radius: 10px;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 150px; /* Sesuaikan ukuran GIF pada perangkat seluler */
  }
`;

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12];

  return (
    <GalleryContainer>
      <TitleContainer>
        <Gif src={eousGif} alt="eous" />
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Little Gallery
        </Title>
        <TitleImage src={bangbooye} alt="Bangbooye" />
      </TitleContainer>
      <PhotoGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {photos.map((photo, index) => (
          <PhotoWrapper
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Photo src={photo} alt={`Memory ${index + 1}`} />
          </PhotoWrapper>
        ))}
      </PhotoGrid>
      <AnimatePresence>
        {selectedPhoto && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <ModalContent
              src={selectedPhoto}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </Modal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
