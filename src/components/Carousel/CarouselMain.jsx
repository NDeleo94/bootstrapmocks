import React from "react";
import CarouselMainCarousel from "./CarouselMainCarousel";
import CarouselMainFeaturette from "./CarouselMainFeaturette";
import CarouselMainHeading from "./CarouselMainHeading";

const CarouselMain = () => {
  const headings = [
    {
      id: 1,
      text: "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
    },
    {
      id: 2,
      text: "Another exciting bit of representative placeholder content. This time, we've moved on to the second column.",
    },
    {
      id: 3,
      text: "And lastly this, the third column of representative placeholder content.",
    },
  ];

  const featurettes = [
    {
      id: 1,
      texta: "First featurette heading.",
      textb: "It’ll blow your mind.",
      textc:
        "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      reverse: false,
    },
    {
      id: 2,
      texta: "Oh yeah, it’s that good.",
      textb: "See for yourself.",
      textc:
        "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
      reverse: true,
    },
    {
      id: 3,
      texta: "And lastly, this one.",
      textb: "Checkmate.",
      textc:
        "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
      reverse: false,
    },
  ];

  return (
    <main>
      <CarouselMainCarousel />

      <div className="container marketing">
        <div className="row">
          {headings.map((heading) => (
            <CarouselMainHeading key={heading.id} text={heading.text} />
          ))}
        </div>

        <hr className="featurette-divider" />

        {featurettes.map((featurette) => (
          <CarouselMainFeaturette
            key={featurette.id}
            texta={featurette.texta}
            textb={featurette.textb}
            textc={featurette.textc}
            reverse={featurette.reverse}
          />
        ))}
      </div>
    </main>
  );
};

export default CarouselMain;
