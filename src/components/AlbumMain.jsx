import React from "react";
import AlbumMainCard from "./AlbumMainCard";
import AlbumMainSection from "./AlbumMainSection";

const AlbumMain = () => {
  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  return (
    <main>
      <section className="py-5 text-center container">
        <AlbumMainSection />
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cards.map((card) => (
              <AlbumMainCard key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AlbumMain;
