import React from "react";
import Header from "./Header";
import Songs from "./Songs";
import ArtistBanner from "./svgs/Artist";

const Main = () => {
  return (
    <div className="flex flex-col justify-start gap-2 h-auto bg-custom-gradient w-full overflow-y-auto">
      <div className="flex flex-col justify-between items-center">
        <Header />
        <ArtistBanner className="w-3/4 h-auto" />
      </div>
      <div className="">
        <Songs />
      </div>
    </div>
  );
};

export default Main;
