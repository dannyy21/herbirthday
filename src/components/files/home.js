import React, { useState, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import birthdayImage from '../../assets/her.jpg';
import Introduction from './introduction';
import Note from './note';
import Additional from './additional';
import Gallery from './gallery';
import Closing from './closing';
import favoriteGirl from '../../assets/favoritegirl.mp3';
import snooze from '../../assets/snooze.mp3';
import swap from '../../assets/swap.mp3';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 10px; // Adjust padding for small screens
`;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  background-color: ${props => props.bgColor || 'white'};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ContentWrapper = styled(motion.div)`
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

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const TextContainer = styled.div`
  padding: 40px 30px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const WelcomeText = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
  font-size: 3.5rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

const SubText = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  color: #7f8c8d;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MusicControl = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    top: 15px;
    right: 15px;
  }
`;

const AnimatedSection = ({ children, delay = 0, bgColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
        hidden: { opacity: 0, y: 50 }
      }}
      bgColor={bgColor}
    >
      {children}
    </Section>
  );
};


const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const tracks = [favoriteGirl, snooze, swap]; // List of tracks

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.src = tracks[currentTrackIndex];
      
      if (isPlaying) {
        audioRef.current.play().catch(error => console.log("Playback failed", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex, tracks]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex + 1) % tracks.length);
    if (isPlaying) {
      audioRef.current.play().catch(error => console.log("Playback failed", error));
    }
  };

  return (
    <>
      <GlobalStyle />
      <audio ref={audioRef} onEnded={handleTrackEnd} />
      <MusicControl onClick={toggleMusic}>
        {isPlaying ? '🔇 Mute' : '🔊 Play Music'}
      </MusicControl>
      <PageContainer>
        <AnimatedSection bgColor="#fdf2e9">
          <ContentWrapper
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={birthdayImage} alt="Welcome" />
            <TextContainer>
              <WelcomeText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Happy Birthday, Aurelia Putri!
              </WelcomeText>
              <SubText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Today is your special day. Embrace every moment and remember how valuable you are.
                May this year bring you more happiness and success!
              </SubText>
            </TextContainer>
          </ContentWrapper>
        </AnimatedSection>
        <AnimatedSection bgColor="#fdf2e9" delay={0.2}>
          <Introduction />
        </AnimatedSection>
        <AnimatedSection bgColor="#fdf2e9" delay={0.4}>
          <Note />
        </AnimatedSection>
        <AnimatedSection bgColor="#fdf2e9" delay={0.6}>
          <Additional />
        </AnimatedSection>
        <AnimatedSection bgColor="#fdf2e9" delay={0.8}>
          <Gallery />
        </AnimatedSection>
        <AnimatedSection bgColor="#fdf2e9" delay={1}>
          <Closing />
        </AnimatedSection>
      </PageContainer>
    </>
  );
};

export default Home;