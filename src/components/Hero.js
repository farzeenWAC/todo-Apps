import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://images3.alphacoders.com/882/thumb-1920-882548.jpg`}
          alt="Stranger Things"
        />
        <Carousel.Caption>
          <h3>Stranger Things</h3>
          <p>
            In 1980s Indiana, a group of young friends witness supernatural
            forces and secret government exploits. As they search for answers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://images.hdqwalls.com/wallpapers/netflix-the-witcher-cm.jpg`}
          alt="The Witcher"
        />

        <Carousel.Caption>
          <h3>The Witcher</h3>
          <p>
            The witcher Geralt, a mutated monster hunter, struggles to find his
            place in a world in which people often prove more wicked than
            beasts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://images.hdqwalls.com/wallpapers/see-jason-momoa-2019-fs.jpg`}
          alt="See"
        />

        <Carousel.Caption>
          <h3>See</h3>
          <p>
            In a future where humankind has lost the ability to see and is
            forced to interact in new ways, a set of twins with sight is born,
            challenging the status quo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Hero;
