import React, { useState } from 'react';
import styled from 'styled-components';
import "./StudentenStyles.css";
import grafik2 from "../../resources/companies/grafik2.png";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "\"Für mich, als jemand mit Interesse für Coden & Data Science, war linkit von Anfang an die Hochschulgruppe, die die meisten inhaltlichen Berührungspunkte geboten hat. Hier konnte ich von Beginn an eine Brücke zwischen Theorie aus der Uni &  Praxisthemen aus der Wirtschaft bauen. Die Zusammenarbeit & der Austausch mit Gleichgesinnten konnte meine Studienzeit abseits von Vorlesungen nachhaltig bereichern.\"",
    name: "Fabian Wylczoch",
    title: "Vorsitzender WS 2023/24",
    image: grafik2, 
  },
  {
    id: 2,
    text: "\" Erst spät während des Masters habe ich meine Faszination für Data Science & ML entdeckt - dann aber so richtig. Neben vielen Vorlesungen habe ich mich auch in der Freizeit nach Weiterbildungsmöglichkeiten umgeschaut & mit linkit einen Glücksgriff gelandet. In 3 Jahren beim Schulungsressort durfte ich nicht nur viel viel lernen & lachen, sondern konnte auch viele Skills für meine Promotion sammeln.\"",
    name: "Luca Deck",
    title: "Aktives Mitglied",
    image: grafik2, 
  },
  {
    id: 3,
    text: "\" Ich wollte immer etwas neben dem Studium betreiben, dass mein technisches Wissen vertieft und von Relevanz ist für mein Informatik-Studium. Als linkit-Mitglied im Knowledge Department habe ich die Möglichkeit, zu den Vorbereitungen und Vorstellungen der technischen Schulungen beizutragen, was meine IT-Skills, sowie meine Teamarbeit voranbringt.\"",
    name: "Ola Sharfeldin",
    title: "Ressortleiterin Knowledge Department WS 2023/24",
    image: grafik2, 
  },
  {
    id: 4,
    text: "\" Es ist beeindruckend, was linkit in nur 7 Jahren seit der Gründung geschafft hat - Wir haben inspirierende Vorträge gehört, Challenges gemeistert, in externen Projekten unser Können bewiesen, und uns mit anderen HSGs vernetzt.Mit dem Drive, den wir haben, bin ich gespannt was die Zukunft noch bereithält! \"",
    name: "Verena Hallitschke",
    title: "Vorstand 2022/23",
    image: grafik2, 
  },
  {
    id: 5,
    text: "\" Ich bin zu linkit gekommen, um Leute zu treffen, die ähnliche Interessen haben, und mit denen man sich bei einem Bier über eine Zukunft im Bereich Data Science und alles andere unterhalten kann. Und genau das habe ich gefunden!\"",
    name: "Leo Treffinger",
    title: "Engagiertes Mitglied",
    image: grafik2, 
  },
  // Add more testimonials as needed
];

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1065px;
  height: 499px;
  flex-shrink: 0;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column; /* Change to a column layout on small screens */
    align-items: center; /* Center items horizontally */
  }
`;

const BigText = styled.div`
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(82, 180, 220, 0.10) 0%, rgba(82, 180, 220, 0.10) 50%, rgba(82, 180, 220, 0.10) 100%);
  display: flex;
  width: 435.636px;
  height: 448px;
  padding: 145px 55.636px 147px 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
    height: auto; /* Auto height on small screens */
  }
`;

const TestimonialSection = styled.div`
  width: 614.307px;
  height: 448px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
    margin-top: 20px; /* Add space between the big text and testimonials on small screens */
    
  }


`;

const TestimonialTextContainer = styled.div`
  @media (max-width: 768px) {
    text-align: center; /* Center text on small screens */
    
  }

@media (min-width: 780px) {
  margin-top: 80px;  
}

  
`;

const TestimonialText = styled.p`
  color: var(--White, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Linkit Standard White */
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  margin-top: 60px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 0;
    
  }
`;

const ArrowButtonsTestimonials = styled.div`
  position: absolute;
  top: 10px; 
  right: 10px; 
  display: flex;
  align-items: center; 
  margin-top: 20px;
`;

const ArrowButtonTess = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  margin-left: 10px;
`;

const TestimonialAuthor = styled.div`
  display: flex; /* Display items side by side */
  align-items: center; /* Center items vertically */
 

  @media (min-width: 780px) {
    padding-top: 30px;
    
  }

  @media (max-width: 768px) {
    margin-top: 30px; /* Add more margin on small screens */
   
  }
`;

const AuthorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px; /* Add margin to separate the image and text */

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    
  }
`;

const AuthorInfo = styled.div`
  @media (max-width: 768px) {
    text-align: center; /* Center text on small screens */
    
  }
`;

const AuthorName = styled.div`
  color: var(--White, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Linkit Bold White */
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%; /* 28px */
`;

const AuthorTitle = styled.div`
  color: var(--White, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Linkit Small */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  margin: 2px 0; /* Add margin to the author title */

  
`;

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <TestimonialsContainer>
      <BigText>Was unsere Mitglieder über linkit sagen</BigText>
      <TestimonialSection>
        <ArrowButtonsTestimonials>
          <ArrowButtonTess onClick={prevTestimonial}>&lt;</ArrowButtonTess>
          <ArrowButtonTess onClick={nextTestimonial}>&gt;</ArrowButtonTess>
        </ArrowButtonsTestimonials>
        <TestimonialTextContainer>
          <TestimonialText>{testimonial.text}</TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src={testimonial.image} alt={testimonial.name} />
            <AuthorInfo>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorTitle>{testimonial.title}</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialTextContainer>
      </TestimonialSection>
    </TestimonialsContainer>
  );
};

export default TestimonialCarousel;
