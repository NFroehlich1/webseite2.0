import React, { useState } from 'react';
import styled from 'styled-components';
import "./StudentenStyles.css";
import ibm from "../../resources/companies/ibm.png";
import google from "../../resources/companies/google.png";
import linkit from "../../resources/companies/linkit.png";
import quantco from "../../resources/companies/quantco.png";

interface CarouselItem {
  image: string;
  alt: string;
  event: string;
  date: string;
  description: string;
}

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  overflow: hidden; /* Hide items that overflow the container */
`;

const CarouselItemWrapper = styled.div`
  text-align: center;
  flex: 1;
  width: 100%;
  padding: 1rem 1rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05); /* Background style */
  margin: 0 10px; /* Add a margin for the gap */
  border-radius: 10px;
  border: 2px solid var(--Linkit-Hellblau, #52B4DC);
  max-width: 300px; /* Adjust the max-width as needed */
`;

const CarouselItemGroup = styled.div<{ translateX: number }>`
  display: flex;
  flex-wrap: wrap; /* Wrap items to the next row */
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.3s ease;
  justify-content: center; /* Center items horizontally */
`;

const CircularImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 360.417px;
  border: 2px solid var(--Linkit-Hellblau, #52B4DC);
`;

const EventDateContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const EventText = styled.div`
  color: var(--gray-800, #33354D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  background-color: #fff;
  margin-right: 20px;
`;

const YearText = styled.div`
  color: var(--White, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  opacity: 0.5;
`;

const DescriptionText = styled.div`
  color: var(--White, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

const Carousel = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const items: CarouselItem[] = [
    {
      image: ibm,
      alt: 'Event 1',
      event: 'Vortrag',
      date: '14. Juni 2022',
      description: 'Nachhaltigkeit in Unternehmen',
    },
    {
      image: google,
      alt: 'Event 2',
      event: 'Vortrag',
      date: '8. November 2022',
      description: 'Superhuman Conversational AI',
    },
    {
      image: linkit,
      alt: 'Event 3',
      event: 'Team-Event',
      date: '15. Dezember 2022',
      description: 'Weinachtsfeier',
    },
    {
      image: quantco,
      alt: 'Event 4',
      event: 'Vortrag',
      date: '7. Juni 2023',
      description: 'Explainable AI im Gesundheitswesen',
    },
    {
      image: linkit,
      alt: 'Event 5',
      event: 'Vortrag',
      date: '24. Oktober 2023',
      description: 'Eröffnungsvortrag des Wintersemesters',
    },
    // Add more items as needed
  ];

  const itemsPerGroup = 3; // Number of items to display per group on larger screens
  const itemsPerGroupMobile = 1; // Number of items to display per group on smaller screens

  // Calculate the number of groups based on the screen size
  const numGroups = window.innerWidth <= 768 ? Math.ceil(items.length / itemsPerGroupMobile) : Math.ceil(items.length / itemsPerGroup);

  const groupStart = currentGroup * (window.innerWidth <= 768 ? itemsPerGroupMobile : itemsPerGroup);
  const groupEnd = groupStart + (window.innerWidth <= 768 ? itemsPerGroupMobile : itemsPerGroup);
  const visibleItems = items.slice(groupStart, groupEnd);

  const translateX = -(100 / (window.innerWidth <= 768 ? itemsPerGroupMobile : itemsPerGroup)) * currentGroup;

  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % numGroups);
  };

  const prevGroup = () => {
    setCurrentGroup((currentGroup - 1 + numGroups) % numGroups);
  };

  return (
    <CarouselContainer>
      <CarouselItemGroup translateX={translateX}>
        {visibleItems.map((item, index) => (
          <CarouselItemWrapper key={index}>
            <CircularImage src={item.image} alt={item.alt} />
            <EventDateContainer>
              <EventText>{item.event}</EventText>
              <YearText>{item.date}</YearText>
            </EventDateContainer>
            <DescriptionText>{item.description}</DescriptionText>
          </CarouselItemWrapper>
        ))}
      </CarouselItemGroup>
      <ButtonContainer>
        <ArrowButton onClick={prevGroup}>&lt;</ArrowButton>
        <ArrowButton onClick={nextGroup}>&gt;</ArrowButton>
      </ButtonContainer>
    </CarouselContainer>
  );
};

export default Carousel;
