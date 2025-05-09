import React from "react";
import { Link } from "react-router-dom";
import pic1 from "./pic1.png";
import "./Companies.css";

const Companies: React.FC = () => {
  return (
    <div>
      <div style={containerStyles}>
        <img src={pic1} alt="grafik21" style={imageStyles} />
        <div style={{ marginLeft: "30px" }}>
          <h1>Industrieprojekte</h1>
          <p style={{ color: "white", marginRight: "60px" }}>
            Unsere Industrieprojekte bieten Ihnen eine einzigartige Gelegenheit, an innovativen Projekten und Forschungsarbeiten teilzunehmen und gleichzeitig wertvolles Know-how und Expertise von unseren Studierenden zu erhalten. Wir arbeiten eng mit unseren Industriepartnern zusammen, um maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse zu entwickeln und Ihr Unternehmen voranzubringen.
          </p>
          <Link to="/contact">
            <button style={{ backgroundColor: "#52b4dc", color: "white", borderRadius: "6px", width: "155px", height: "52px" }}>Kontakt</button>
          </Link>
        </div>
      </div>

      <div style={containerStyles}>
  <div className="spheres">
    <div className="sphere">
      <span className="number">1</span>
    </div>
    <div className="line"></div>
    <div className="sphere">
      <span className="number">2</span>
    </div>
    <div className="line"></div>
    <div className="sphere">
      <span className="number">3</span>
    </div>
    <div className="line"></div>
    <div className="sphere">
      <span className="number">4</span>
    </div>
  </div>
</div>

<div className="containerUnderSpheres">
  <div className="columns">
    <div className="column">
      <h2>3 Monate vor dem Event</h2>
      <p>Test</p>
    </div>
    <div className="column">
      <h2>2 Monate vor dem Event</h2>
      <p>At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.</p>
    </div>
    <div className="column">
      <h2>2 Wochen vor dem Event</h2>
      <p>Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat.</p>
    </div>
    <div className="column">
      <h2>Tag des Events</h2>
      <p>Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur.</p>
    </div>
  </div>
</div>



      <div style={containerStyles}>
        <img src={pic1} alt="grafik21" style={imageStyles} />
        <div style={{ marginLeft: "30px" }}>
          <h1>Kooperationspartner</h1>
          <p style={{ color: "white", marginRight: "60px" }}>
            Unsere Industrieprojekte bieten Ihnen eine einzigartige Gelegenheit, an innovativen Projekten und Forschungsarbeiten teilzunehmen und gleichzeitig wertvolles Know-how und Expertise von unseren Studierenden zu erhalten. Wir arbeiten eng mit unseren Industriepartnern zusammen, um maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse zu entwickeln und Ihr Unternehmen voranzubringen.
          </p>
          <Link to="/contact">
            <button style={{ backgroundColor: "#52b4dc", color: "white", borderRadius: "6px", width: "155px", height: "52px" }}>Kontakt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  marginBottom: "30px",
};

const imageStyles: React.CSSProperties = {
  maxWidth: "435px",
  maxHeight: "400px",
  marginRight: "150px",
  marginLeft: "150px",
};

export default Companies;
