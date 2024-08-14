import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Replace with the correct paths to your GIFs
import Butler from '../../assets/butler.gif';
import Celebration from '../../assets/birthday.gif';
import eousGif from '../../assets/eous.gif';
import sharkGif from '../../assets/sharkboo.gif';
import pandaGif from '../../assets/cake.gif';
import cakeGif2 from '../../assets/cake2.gif';
import birthday2 from '../../assets/birthday2.gif';

const ClosingContainer = styled.div`
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
  padding: 20px; /* Padding for desktop */

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px; /* Reduced padding for mobile */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile */
    margin-top: 20px; /* Reduced margin for mobile */
  }
`;

const Gif = styled.img`
  max-width: 200px;
  border-radius: 10px;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 150px; /* Smaller GIF size for mobile */
  }
`;

const Message = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  padding: 20px; /* Padding for desktop */

  @media (max-width: 768px) {
    max-width: 90%; /* Adjust width for mobile */
    padding: 10px; /* Reduced padding for mobile */
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Position for "Once again" */

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Reduced margin for mobile */
  }
`;

const SmallText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem; /* Font size for desktop */
  color: #999;
  position: absolute;
  left: -100px; /* Position for desktop */

  @media (max-width: 768px) {
    left: -60px; /* Adjusted position for mobile */
    font-size: 1rem; /* Smaller font size for mobile */
  }
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller font size for mobile */
    margin-bottom: 10px; /* Reduced margin for mobile */
  }
`;

const SmallTitle = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #999;
  text-align: center;
  margin-top: -20px; /* Positioning for desktop */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font size for mobile */
    margin-top: -10px; /* Adjusted margin for mobile */
  }
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #7f8c8d;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size for mobile */
    margin-bottom: 10px; /* Reduced margin for mobile */
  }
`;

const PandaGif = styled(Gif)`
  object-fit: cover;
  object-position: 0 -10px;
  height: 210px; /* Height for desktop */

  @media (max-width: 768px) {
    height: 150px; /* Reduced height for mobile */
  }
`;

const GifWrapper = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Closing = () => {
  return (
    <ClosingContainer>
      <ContentWrapper>
        <Gif src={Celebration} alt="Celebration Gif" />
        <Message
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TitleContainer>
            <Title>Happy Birthday!</Title>
            {/* <SmallText>Once again</SmallText> */}
          </TitleContainer>
          <Text>
            I hope this website added a little extra joy to your special day. Enjoy every moment and make wonderful memories!
          </Text>
          <Text>
            Wishing you a fantastic year ahead filled with happiness, success, and all the best things in life.
          </Text>
          {/* <SmallTitle>Once again</SmallTitle> */}
        </Message>
        <Gif src={birthday2} alt="Birthday 2 Gif" />
      </ContentWrapper>
      <GifWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PandaGif src={pandaGif} alt="Panda Gif" />
      </GifWrapper>
    </ClosingContainer>
  );
};

export default Closing;
