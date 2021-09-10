import React from "react";

const Card = ({ name, email, id, imgResolution }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow shadow-2">
      <img
        width="300px"
        alt="robot"
        // src={`https://robohash.org/${id}?size=${imgResolution}`}
        srcSet={`https://robohash.org/${id}?size=300x300 300w,
           https://robohash.org/${id}?size=600x600 600w,
           https://robohash.org/${id}?size=1000x1000 1000w`}
        // sizes="(max-width: 800px) 300px, 600px"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
