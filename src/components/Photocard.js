import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

const data = [
  {
    cover:
        "https://cdn.discordapp.com/attachments/942706380689772575/1002181200028368966/unknown.png",
  },
  {
    cover:
        "https://cdn.discordapp.com/attachments/942706380689772575/1001856587616489654/unknown.png",
  },
  {
    cover:
        "https://cdn.discordapp.com/attachments/952971793029804043/958551550324797480/unknown.png",
  },
  {
    cover:
      "https://cdn.discordapp.com/attachments/942706380689772575/1001857962161221723/unknown.png",
  },
  {
    cover:
      "https://cdn.discordapp.com/attachments/942706380689772575/1001856973458919444/unknown.png",
  }
];

export default function PCard() {
  const ref = React.useRef();
  return (
    <ResponsiveContainer
      carouselRef={ref}
      render={(parentWidth, carouselRef) => {
        let currentVisibleSlide = 5;
        if (parentWidth <= 1440) currentVisibleSlide = 3;
        else if (parentWidth <= 1080) currentVisibleSlide = 1;
        return (
          <StackedCarousel
            ref={carouselRef}
            data={data}
            carouselWidth={parentWidth}
            slideWidth={300}
            height={270}
            slideComponent={Slide}
            maxVisibleSlide={5}
            currentVisibleSlide={currentVisibleSlide}
            useGrabCursor={true}
          />
        );
      }}
    />
  );
}

const Slide = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      className="not-selectable"
      style={{
        // userSelect: "none",
        // maxWidth: "461px",
        // height: "516px",
        backgroundColor: "#464646",
        borderRadius: 15
      }}
    >
      <img
        style={{
          // height: "100%",
          // width: "100%",
          // objectFit: "cover",
          // borderRadius: 10
          width: 295,
          height: 236,
          margin: "6px 6px",
          display: "inline-block",
          backgroundColor: "#808080"
        }}
        draggable={false}
        src={cover}
        alt="Karin's pic"
      />
    </div>
  );
});
