import React, { useEffect, useState } from "react";
import ActionArtist from "./svgs/ActionArtist";
import useSongContext from "../hooks/useSongContext";
import ButtonControls from "./Music/PlayPauseCard";

const ActionArea = () => {
  const { currentSong, songs, setPlaying, playing } = useSongContext();

  return (
    <div className="flex flex-col justify-end bg-gradient-black-gray px-2">
      <div className="flex m-2 rounded-lg max-w-72 max-h-96 border-none bg-[#6B0000] py-4 px-4 flex-col items-center justify-evenly gap-1">
        <span className="text-white text-base font-semibold font-poppins">
          Now playing
        </span>
        <ActionArtist className="h-40 w-56" />
        <div className="flex flex-col justify-center gap-1">
          <span className="text-white font-semibold font-poppins text-lg">
            {currentSong?.title.toString().length > 20
              ? `${currentSong?.title.toString().substring(0, 20)}...`
              : currentSong?.title}
          </span>
          <span className="text-white font-normal text-xs">
            {currentSong.artist}
          </span>
        </div>
        <ButtonControls />
      </div>
    </div>
  );
};

export default ActionArea;
