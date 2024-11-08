import React from "react";
import SongList from "./Music/SongList";
import useSongContext from "../hooks/useSongContext";

const Songs = () => {
  const { songs, setSongs } = useSongContext();

  const onSongReorder = (newSongs) => {
    setSongs(newSongs);
  };

  return (
    <div className="bg-transparent">
      <div className="grid grid-cols-10 gap-4 font-poppins text-lg font-bold text-[#CFC5C5]">
        <span className="col-span-2 text-right mr-10">Popular</span>
        <span className="col-span-3"></span>
        <span className="col-span-3"></span>
        <span className="col-span-2 text-left">See All</span>
      </div>
      <SongList songs={songs} onSongReorder={onSongReorder} />
    </div>
  );
};

export default Songs;
