import { SONGS } from "../assets/constant";

const { createContext, useState } = require("react");

const SongContext = createContext();

const Provider = ({ children }) => {
  const [songs, setSongs] = useState(SONGS);
  const [currentSong, setCurrentSong] = useState(SONGS[0]);
  const [playing, setPlaying] = useState(false);

  const valueToShare = {
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    playing,
    setPlaying,
  };

  return (
    <SongContext.Provider value={valueToShare}>{children}</SongContext.Provider>
  );
};

export { Provider };

export default SongContext;
