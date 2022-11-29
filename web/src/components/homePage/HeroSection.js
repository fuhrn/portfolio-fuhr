import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Portfolio Néstor Santiago Fuhr</h1>
            <ParagraphText className="hero__text">
              Hola, soy Néstor Santiago Fuhr, software engineer, con
              especialidad en React, Node.Js, Express.js, PostreSQL, y MongoDB,
              entre otras herramientas. Vivo en Don Torcuato, partido de Tigre,
              provincia de Buenos Aires, Argentina.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Mis proyectos
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/nes_portada_aj.jpeg"
              alt="projects"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
