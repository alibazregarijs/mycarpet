import Card from "./Card";
export default function CardSlider({ cards }) {
  return (
    <>
      <main>
        <swiper-container
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#A91D3A",
            "--swiper-pagination-bullet-inactive-color": "#fff",
          }}
          pagination-clickable="true"
          className="mySwiper"
        >
          {cards.map((carpet) =>
            carpet.carpet.map((c, index) => (
              <swiper-slide>
                <Card key={index} index={index} carpet={c} />
              </swiper-slide>
            ))
          )}
        </swiper-container>
      </main>
    </>
  );
}
