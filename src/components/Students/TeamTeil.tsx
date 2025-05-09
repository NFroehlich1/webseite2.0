import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SchlossPhoto from './SchlossPhoto.png';

const TeamTeilContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${SchlossPhoto});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin: 10px;
  margin-left: auto; 
  margin-right: auto; 
  max-width: 1300px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #FFF;
  font-family: Manrope;
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  max-width: 80%;
  color: #FFF;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 24px;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const BewerbungText = styled.p`
  color: var(--linkit-hellblau, #52B4DC);
  font-family: Manrope;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  margin-top: 16px;
  margin-bottom: 32px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled(Link)`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--linkit-hellblau, #52B4DC);
  color: #fff;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #3a9bc2;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
  }
`;

const TeamTeil = () => {
  return (
    <TeamTeilContainer>
      <Overlay>
        <ContentContainer>
          <Title>Werde Teil des Teams</Title>
          <Text>
            Als Studierende/r in der ersten Hochschulgruppe für Industrie 4.0 und einer der größten Hochschulgruppen im Data Science Bereich lernst du neue Kompetenzen. Erweitere dein Netzwerk mit engagierten, motivierten Studierenden und finde Freunde fürs Leben.
          </Text>
          <BewerbungText>Die Bewerbungsfrist endet am 31.10. um 23:59</BewerbungText>
          <Button to="/contact">Jetzt bewerben</Button>
        </ContentContainer>
      </Overlay>
    </TeamTeilContainer>
  );
};

export default TeamTeil;
