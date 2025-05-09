import Team from "./Landing Frame.png";
import "./StudentenStyles.css"


import React, { useState, StrictMode } from "react";
import FaqToggler from "./FAQ";
import "./FAQ.css"
import Testimonials from './Testimonials';
import Carousel from "./Carousel";
import Grid from "./Angebot"
import TeamTeil from "./TeamTeil"




function Students() {

  return (


    <main>
      <section id="UpperSection">
        <div id="TeamImageBackground">
        </div>
      </section>

      <section id="gridSection">
        <h3 id="GridTitle">Unser Angebot an dich</h3>
        <div id="Grid">
          <Grid />
        </div>
      </section>

      <section id="EventsCarousel">
        <div>
          <h3 id="EventsTitle">Up & Coming</h3>
          <Carousel />
        </div>
      </section>

      <section id="Testimonials">
        <div>
          <h3 id="TestimonialsTitle">Unsere Mitglieder</h3>
          <Testimonials/>
        </div>
      </section>




      <section id="TeamTeil">
        <div>
          <TeamTeil />
        </div>
      </section>

      <section>
        <div id="Faq">
          <div>
            <h3 id="FaqTitle">FAQ</h3>
            <FaqToggler>
            </FaqToggler>
          </div>
        </div>

      </section>

    </main>

  );
};




export default Students;



