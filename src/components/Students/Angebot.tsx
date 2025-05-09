import React from 'react';
import styled from 'styled-components';
import GridImg from './GridImg.png'; 
import GridImg2 from './GridImg2.png'; 
import GridImg3 from './GridImg3.png'; 
import GridImg4 from './GridImg4.png'; 
import GridImg5 from './GridImg5.png'; 
import GridImg6 from './GridImg6.png'; 

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;  
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
`;

const GridImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.7);
color: #fff;
text-align: center;
padding: 20px;
opacity: 0;
transition: opacity 0.3s ease, transform 0.3s ease;
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

${GridItem}:hover & {
  opacity: 1;
}
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  opacity: 1;
  z-index: 1;
`;

const Text = styled.p`
  font-size: 16px;
  opacity: 1;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF; /* Set the text color to white */
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;

  ${GridItem}:hover & {
    opacity: 0; 
  }
`;


const GridItemWrapper = styled(GridItem)`
  &:hover ${Text} {
    opacity: 1;
  }
`;

const Grid = () => {
  return (
    <GridContainer>
      <GridItemWrapper>
        <GridImage src={GridImg} alt="Image 1" />
        <Overlay>
          <Title>Vorträge</Title>
          <Text>IBM, Google, Palantir, QuantCo, ... Alle waren sie schon da. Und im Anschluss gibt es oft ein Kaltgetränk in gemütlicher Runde</Text>
        </Overlay>
        <CenteredText>Vorträge</CenteredText>
      </GridItemWrapper>

      <GridItemWrapper>
        <GridImage src={GridImg2} alt="Image 2" />
        <Overlay>
          <Title>Workshops</Title>
          <Text>Ideen direkt in Code umsetzen und den Unternehmensexperten zeigen wie es geht. Hier lernst du maximal viel in kurzer Zeit</Text>
        </Overlay>
        <CenteredText>Workshops</CenteredText>
      </GridItemWrapper>
      
      <GridItemWrapper>
        <GridImage src={GridImg3} alt="Image 3" />
        <Overlay>
          <Title>Data Science Challenges</Title>
          <Text>Interne Challenges auf interessanten Datensätzen. Von Beginner bis Experte ist für alle was dabei</Text>
        </Overlay>
        <CenteredText>Data Science Challenges</CenteredText>
      </GridItemWrapper>

      <GridItemWrapper>
        <GridImage src={GridImg4} alt="Image 4" />
        <Overlay>
          <Title>Interne Schulungen</Title>
          <Text>Du hast noch keinen Plan von Data Science und Machine Learning? Wir bringen es dir bei!</Text>
        </Overlay>
        <CenteredText>Interne Schulungen</CenteredText>
      </GridItemWrapper>

      <GridItemWrapper>
        <GridImage src={GridImg5} alt="Image 5" />
        <Overlay>
          <Title>Interne Projekte</Title>
          <Text>Darf’s noch ein bisschen mehr sein? Research-Gruppen, Projekte an Roboterarmen und vieles mehr stillen bestimmt deinen Wissensdurst</Text>
        </Overlay>
        <CenteredText>Interne Projekte</CenteredText>
      </GridItemWrapper>

      <GridItemWrapper>
        <GridImage src={GridImg6} alt="Image 6" />
        <Overlay>
          <Title>Team-Events</Title>
          <Text>Wir haben richtig gute Leute! Lern sie im entspannten Rahmen kennen und lern von ihnen. Bei Lasertag, Bowlen oder im Oxford. </Text>
        </Overlay>
        <CenteredText>Team-Events</CenteredText>
      </GridItemWrapper>
    </GridContainer>
  );
};

export default Grid;
