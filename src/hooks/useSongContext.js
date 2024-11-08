import { useContext } from "react";
import SongContext from "../context/SongContext";

const useSongContext = () => {
  return useContext(SongContext);
};

export default useSongContext;
