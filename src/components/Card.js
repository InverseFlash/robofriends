import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow shadow-2">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
