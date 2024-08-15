import React from 'react';
import styled from 'styled-components';
import motivationalGif from '../../assets/butler.gif'; 

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 30px; /* Padding kanan dan kiri */
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 15px; /* Kurangi padding pada perangkat seluler */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  max-width: 1200px; /* Tambahkan max-width untuk membatasi lebar konten */

  @media (max-width: 768px) {
    flex-direction: column; /* Ubah arah flex menjadi kolom pada perangkat seluler */
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    padding: 20px; /* Kurangi padding pada perangkat seluler */
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-sizing: border-box; /* Pastikan padding dihitung dalam lebar elemen */

  @media (max-width: 768px) {
    padding: 20px; /* Kurangi padding pada perangkat seluler */
  }
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Sesuaikan ukuran font pada perangkat seluler */
  }
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #7f8c8d;
  font-size: 1.1rem;
  text-align: center;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 1rem; /* Sesuaikan ukuran font pada perangkat seluler */
  }
`;

const AIGeneratedNote = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #2c3e50;
  line-height: 1.6;
  max-width: 80%; /* Sesuaikan dengan kebutuhan */
  text-align: justify; /* Membuat paragraf rata kiri dan kanan */
  white-space: pre-wrap;
  padding: 10px 20px; /* Memberi padding di kanan dan kiri */
  margin: 0 auto; /* Menjaga agar teks tetap terpusat */

  @media (max-width: 768px) {
    // font-size: 1rem; /* Sesuaikan ukuran font pada perangkat seluler */
    padding: 10px 15px; /* Kurangi padding pada perangkat seluler */
  }
`;

const Gif = styled.img`
  max-width: 200px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 150px; /* Sesuaikan ukuran gambar pada perangkat seluler */
  }
`;

const Note = () => {
  const aiGeneratedText = `Dear Aurelia Putri,

On your special day, I wanted to take a moment to wish you a very happy birthday! Although we haven't had many chances to connect deeply, I genuinely hope your day is filled with joy, laughter, and wonderful things.

Birthdays are a wonderful opportunity to reflect on the past and look forward to the future. May this day bring you simple pleasures and happy moments to cherish. May each day bring you new reasons to smile. Wishing you endless joy, fulfillment, and the courage to chase your dreams.

Best Wishes,

[Danny Putra]`;

  return (
    <NoteContainer>
      <ContentWrapper>
        <LeftSection>
          <Gif src={motivationalGif} alt="Motivational Gif" />
          <Title>Message from the Creator</Title>
          <Description>
            On the right side, you will find a note written for you. This is a message from the creator to celebrate your special day.
          </Description>
        </LeftSection>
        <RightSection>
          <Title>Note from the Creator</Title>
          <AIGeneratedNote>{aiGeneratedText}</AIGeneratedNote>
        </RightSection>
      </ContentWrapper>
    </NoteContainer>
  );
};

export default Note;
