import useSongContext from "../../hooks/useSongContext";
import Playing from "../svgs/Playing";

const SongItem = ({
  title,
  artist,
  index,
  playing,
  album,
  duration,
  url,
  imageURL,
}) => {
  const { currentSong, setCurrentSong, setPlaying } = useSongContext();

  const isActive = currentSong.title === title;

  const containerClasses = `grid grid-cols-10 gap-4 items-center justify-center font-poppins text-medium py-1 px-4 border-none ${
    isActive
      ? "bg-[#520000] text-white font-bold"
      : "text-[#CFC5C5] font-medium"
  }`;

  const handleSongChange = () => {
    setCurrentSong({ title, artist, album, duration, playing, url });
    setPlaying(true);
  };

  return (
    <div onClick={handleSongChange} className={containerClasses}>
      <div className="col-span-1 ">
        {isActive ? <Playing className="w-5 h-5" /> : index + 1}
      </div>
      <div className="col-span-3 flex flex-row items-center justify-start gap-2">
        <img src={imageURL} alt={title} className="w-10 h-10" />
        {title.toString().length > 25
          ? `${title.toString().substring(0, 25)}...`
          : title}
      </div>
      <div className="col-span-2 hidden md:block">{playing}</div>
      <div className="col-span-1 hidden md:block">{duration}</div>
      <div className="col-span-3">
        {album.toString().length > 20
          ? `${album.toString().substring(0, 20)}...`
          : album}
      </div>
    </div>
  );
};

export default SongItem;
