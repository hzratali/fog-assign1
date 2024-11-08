import React, { useEffect, useState, useRef } from "react";
import useSongContext from "../../hooks/useSongContext";
import { Howl } from "howler";
import LoopButton from "../svgs/Loop";
import BackButton from "../svgs/Back";
import PlayButton from "../svgs/Play";
import NextButton from "../svgs/Next";
import PauseButton from "../svgs/Pause";
import ShuffleButton from "../svgs/Shuffle";
import SingleLoop from "../svgs/Loop1";

const ButtonControls = () => {
  const { currentSong, songs, setPlaying, setCurrentSong, playing, setSongs } =
    useSongContext();
  const soundRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [loop, setLoop] = useState("none");

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.unload();
    }
    if (currentSong) {
      const newSound = new Howl({
        src: [currentSong.url],
        loop: loop === "single",
      });
      soundRef.current = newSound;
      if (playing) {
        newSound.play();
        newSound.seek(currentTime);
      }
      newSound.on("end", handleSongEnd);
    }
  }, [currentSong, loop]);

  useEffect(() => {
    if (soundRef.current) {
      if (playing) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [playing]);

  useEffect(() => {
    let interval;
    if (soundRef.current && playing) {
      interval = setInterval(() => {
        setCurrentTime(Math.floor(soundRef.current.seek()));
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [soundRef.current, playing]);

  const handlePlayPauseSong = () => {
    if (playing) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleLoop = () => {
    if (loop === "none") {
      setLoop("single");
    } else if (loop === "single") {
      setLoop("playlist");
    } else {
      setLoop("none");
    }
  };

  const handleSongEnd = () => {
    if (loop === "single") {
      soundRef.current.seek(0);
      soundRef.current.play();
      setPlaying(true);
    } else if (loop === "playlist") {
      handleNext();
    } else {
      setPlaying(false);
    }
  };

  const handleBack = () => {
    const currentIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    setPlaying(false);
    setCurrentTime(0);
    setCurrentSong(prevSong);
    setPlaying(true);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setPlaying(false);
    setCurrentTime(0);
    setCurrentSong(nextSong);
    setPlaying(true);
  };

  const handleShuffle = () => {
    if (songs.length < 2) {
      return; // No need to shuffle if there's only one song
    }

    const shuffledSongs = [...songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [
        shuffledSongs[j],
        shuffledSongs[i],
      ];
    }

    setPlaying(false);
    setCurrentTime(0);
    setCurrentSong(shuffledSongs[0]);
    setSongs(shuffledSongs);
    setPlaying(true);
  };

  const getProgressPercentage = () => {
    if (!currentSong || !soundRef.current) {
      return 0;
    }
    return (currentTime / soundRef.current.duration()) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressBarChange = (e) => {
    if (!soundRef.current) return;
    const newTime = (e.target.value / 100) * soundRef.current.duration();
    soundRef.current.seek(newTime);
    setCurrentTime(newTime);
  };

  return (
    <div className="flex flex-col font-poppins gap-2 items-center">
      <div className="flex text-white items-center gap-2">
        <p>{formatTime(currentTime)}</p>
        <input
          type="range"
          min="0"
          max="100"
          value={getProgressPercentage()}
          onChange={handleProgressBarChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          style={{
            background: `linear-gradient(to right, #f00 ${getProgressPercentage()}%, #ccc 0%)`,
          }}
        />
        <p>{currentSong?.duration}</p>
      </div>
      <div className="flex flex-row justify-between w-full text-white px-2">
        <button onClick={handleLoop}>
          {loop === "none" ? (
            <LoopButton className="opacity-70" />
          ) : loop === "single" ? (
            <SingleLoop />
          ) : (
            <LoopButton />
          )}
        </button>
        <button onClick={handleBack}>
          <BackButton />
        </button>
        <button onClick={handlePlayPauseSong}>
          {playing ? <PauseButton /> : <PlayButton />}
        </button>
        <button onClick={handleNext}>
          <NextButton />
        </button>
        <button onClick={handleShuffle}>
          <ShuffleButton />
        </button>
      </div>
    </div>
  );
};

export default ButtonControls;
