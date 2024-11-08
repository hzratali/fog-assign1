import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songs, onSongReorder }) => {
  const [draggedSong, setDraggedSong] = useState(null);

  const handleDragStart = (e, song) => {
    setDraggedSong(song);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSong) => {
    e.preventDefault();
    if (draggedSong && draggedSong !== targetSong) {
      const newSongs = [...songs];
      const draggedSongIndex = songs.indexOf(draggedSong);
      const targetSongIndex = songs.indexOf(targetSong);
      newSongs.splice(draggedSongIndex, 1);
      newSongs.splice(targetSongIndex, 0, draggedSong);
      setDraggedSong(null);
      onSongReorder(newSongs);
    }
  };

  return (
    <ul className="bg-transparent px-6">
      {/* Header row */}
      <li className="grid grid-cols-10 gap-4 items-start justify-start text-[#CFC5C5] font-bold text-medium font-poppins py-2 px-4 bg-transparent">
        <div className="col-span-1">#</div>
        <div className="col-span-3">TITLE</div>
        <div className="col-span-2 hidden md:block">PLAYING</div>
        <div className="col-span-1 hidden md:block">TIME</div>
        <div className="col-span-3">ALBUM</div>
      </li>

      {/* Songs list */}
      {songs.map((song, index) => (
        <li
          key={song.title}
          draggable
          onDragStart={(e) => handleDragStart(e, song)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, song)}
        >
          <SongItem {...song} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default SongList;
