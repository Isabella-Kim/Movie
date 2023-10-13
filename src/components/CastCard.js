import React from "react";

const CastCard = ({ cast }) => {
  return (
    <div className="CastCard">
      <div className="castCardWrap">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${cast?.profile_path}`}
          alt=""
        />
        <h4>Acotor Name</h4>
        <h3>{cast?.name}</h3>
        <div className="br"></div>
        <h4>Character</h4>
        <h3>{cast?.character}</h3>
      </div>
    </div>
  );
};

export default CastCard;
