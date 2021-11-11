import React from "react";
import Footer from "./Footer";
import Series from "./Series";

const Movies = () => {
  return (
    <div>
      <Series
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_genres=27`}
      />
    </div>
  );
};

export default Movies;
