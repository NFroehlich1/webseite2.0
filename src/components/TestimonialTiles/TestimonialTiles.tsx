import React, { useRef } from 'react';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import "./styles.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from "swiper";

import Quote from "../../resources/quote.svg"
import NextBtn from "../../resources/next-btn.svg"
import PrevBtn from "../../resources/prev-btn.svg"

import JustusThomsenImage from "../../resources/justus_thomsen.jpg"
import QuantCoImage from "../../resources/quantco.jpg"
import TobiasGaumannImage from "../../resources/tobias_gaumann.png"
import TomKoernerImage from "../../resources/tom_koerner.jpg"
import LeoTreffingerImage from "../../resources/leo_treffinger.jpg"

interface FullTestimonial {
    name: string;
    imagePath: string;
    positionTag: string;
    categoryTag: string;
    categoryIsPlural: boolean;
    testimonialTag: string;
}

const fullTestimonialData: FullTestimonial[] = [{
    name: "Justus Thomsen",
    imagePath: JustusThomsenImage,
    positionTag: "hdos_head",
    categoryTag: "members",
    categoryIsPlural: true,
    testimonialTag: "testimonial_justus_thomsen_full"
}, {
    name: "QuantCo",
    imagePath: QuantCoImage,
    positionTag: "cooperation_partner",
    categoryTag: "partners",
    categoryIsPlural: true,
    testimonialTag: "testimonial_quantco_full"
}, {
    name: "Tobias Gaumann",
    imagePath: TobiasGaumannImage,
    positionTag: "alumnus",
    categoryTag: "alumni",
    categoryIsPlural: true,
    testimonialTag: "testimonial_tobias_gaumann_full"
}, {
    name: "Tom Körner",
    imagePath: TomKoernerImage,
    positionTag: "board_2022/23",
    categoryTag: "board",
    categoryIsPlural: false,
    testimonialTag: "testimonial_tom_koerner_full"
}, {
    name: "Leo Treffinger",
    imagePath: LeoTreffingerImage,
    positionTag: "external_trainings_deputy_head",
    categoryTag: "members",
    categoryIsPlural: true,
    testimonialTag: "testimonial_leo_treffinger_full"
},]

const TestimonialCarousel = () => {
    const {t} = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const slides: any[] = fullTestimonialData.map((testimonial, index) => (
        <SwiperSlide key={`testimonial-${index}`}>
            <div className="carousel-item">
                <div className="quote-icon">
                    <img src={Quote} alt="Quotation Mark"/>
                </div>
                <div className="testimonial-text-full">
                    <p>{t(testimonial.testimonialTag)}</p>
                </div>
                <div className="testimonial-author-profile">
                    <img src={testimonial.imagePath} className="round-img" alt={`${testimonial.name} Portrait`}/>
                    <div className="testimonial-author-box">
                        <div className="testimonial-author-name">{testimonial.name}</div>
                        <div className="testimonial-author-title">{t(testimonial.positionTag)}</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="testimonial-carousel">
            <div className="carousel-buttons">
                <div ref={prevRef} id="carousel-prev-button">
                    <img src={PrevBtn} alt="Previous Button"/>
                </div>
                <div ref={nextRef} id="carousel-next-button">
                    <img src={NextBtn} alt="Next Button"/>
                </div>
            </div>
            
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={600}
                navigation={{
                    prevEl: "#carousel-prev-button",
                    nextEl: "#carousel-next-button"
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                onInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {slides}
                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    );
}

const TestimonialTiles = () => {
    const {t} = useTranslation();
    return <TestimonialCarousel/>;
}

export default TestimonialTiles;
