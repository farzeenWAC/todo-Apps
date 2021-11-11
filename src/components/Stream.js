import React from "react";
import Series from "./Series";

function Stream() {
  return (
    <div>
      <Series
        url={`https://api.themoviedb.org/3/trending/all/week?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&language=en-US`}
      />
    </div>
  );
}

export default Stream;
