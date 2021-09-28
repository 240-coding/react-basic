import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
    rating: 3.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/Ucp9wz73XdGbFikPOe3D1i1NiEwUiSjf5bwwzqJB3Ot4TA1gvIyrDL-y2t_7b9jIsbzS4PQ50vkDlBh9dJydWQUrKYKdWks6AcjgDMgqKvpTXprlbro",
    rating: 3.9,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
