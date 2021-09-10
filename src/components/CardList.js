import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => {
  // const [imgRes, setImageRes] = useState("300x300");

  // const shouldUseHighRes = () => {
  //   console.log(window.innerWidth);
  //   if (window.innerWidth >= 600) {
  //     console.log("high res");
  //     return "600x600";
  //   }
  // };

  // useEffect(() => {
  //   if (window.innerWidth >= 600) {
  //     setImageRes("600x600");
  //   }
  // }, []);

  return (
    <Fragment>
      {robots.map((robot, index) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
            // imgResolution={imgRes}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
