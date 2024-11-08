import DiscoverIcon from "../components/svgs/DiscoverIcon";
import HomeIcon from "../components/svgs/HomeIcon";
import LibraryIcon from "../components/svgs/LibraryIcon";
import LogoutIcon from "../components/svgs/Logout";
import SettingsIcon from "../components/svgs/Settings";
import TrendIcon from "../components/svgs/TrendIcon";
import BilleJean from "./audio/BillieJean.mp3";
import BeatIt from "./audio/BeatIt.mp3";
import DontStop from "./audio/DontStoptilYouGetEnough.mp3";
import RockWithYou from "./audio/RockWithYou.mp3";
import SmoothCriminal from "./audio/SmoothCriminal.mp3";

export const HEADERS = [
  { title: "Music" },
  { title: "Podcast" },
  { title: "Live" },
  { title: "Radio" },
];

export const MENU = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Home",
  },
  {
    icon: <TrendIcon className="h-6 w-6" />,
    title: "Trends",
  },
  {
    icon: <LibraryIcon className="h-6 w-6" />,
    title: "Library",
  },
  {
    icon: <DiscoverIcon className="h-6 w-6" />,
    title: "Discover",
  },
];

export const GENERAL = [
  {
    icon: <SettingsIcon className="h-6 w-6" />,
    title: "Settings",
  },
  {
    icon: <LogoutIcon className="h-6 w-6" />,
    title: "Logout",
  },
];

export const SONGS = [
  {
    title: "Billie Jean",
    imageURL:
      "https://res.cloudinary.com/harahman/image/upload/v1728937320/FOG-Assignment/sky9wypyohttwcpnppo6.jpg",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:53",
    playing: "648,745,045",
    url: BilleJean,
  },
  {
    title: "Beat It",
    imageURL:
      "https://res.cloudinary.com/harahman/image/upload/v1728937736/FOG-Assignment/gxgue5ltvrnrcujq3og5.jpg",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:19",
    playing: "748,745,045",
    url: BeatIt,
  },
  {
    title: "Don't Stop 'Til You Get Enough",
    imageURL:
      "https://res.cloudinary.com/harahman/image/upload/v1728937847/FOG-Assignment/c2yk2lveikrqhjlq4d6w.jpg",
    artist: "Michael Jackson",
    album: "Bad 25th Anniversary",
    duration: "5:58",
    playing: "106,745,045",
    url: DontStop,
  },
  {
    title: "Rock With You - Single Version",
    imageURL:
      "https://res.cloudinary.com/harahman/image/upload/v1728937953/FOG-Assignment/bp27lbcgodtc7nkrluqp.jpg",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "4:13",
    playing: "158,040,045",
    url: RockWithYou,
  },
  {
    title: "Smooth Criminal - 2012 Remaster",
    imageURL:
      "https://res.cloudinary.com/harahman/image/upload/v1728938022/FOG-Assignment/t7jldum0aul8rsy6cnpj.jpg",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:17",
    playing: "148,745,045",
    url: SmoothCriminal,
  },
];
