import React from "react";
import "./Testimonial.css";

type TestimonialProps = {
  rating: number;
  text: string;
  photoSrc: string;
  name: string;
  jobTitle: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  rating,
  text,
  photoSrc,
  name,
  jobTitle,
}) => {
  return (
    <div className="testimonial">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">
            ★
          </span>
        ))}
      </div>
      <div className="testimonial-text">{text}</div>
      <div className="testimonial-author">
        <img src={photoSrc} alt={name} className="testimonial-photo" />
        <div className="testimonial-info">
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-job">{jobTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
