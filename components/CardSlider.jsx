import Card from "./Card";
export default function CardSlider({ cards }) {
  return (
    <>
      <div className="flex">
        <swiper-container
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#A91D3A",
            "--swiper-pagination-bullet-inactive-color": "#fff",
          }}
          navigation="true"
          direction="vertical"
        >
          {cards.map((carpet) =>
            carpet.carpet.map((c, index) => (
              <swiper-slide>
                <Card key={index} index={index} carpet={c} />
              </swiper-slide>
            ))
          )}
        </swiper-container>
      </div>
    </>
  );
}
