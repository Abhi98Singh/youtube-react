import { useSelector } from "react-redux";
import { GoHome } from "react-icons/go";
import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const shortsIconUrl =
    "https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png";

  //Early Return : control won't go to next line
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-md ">
      <ul>
        <Link to="/">
          <li className="font-medium pt-1 hover:bg-gray-100 hover:rounded-lg">
            <GoHome className="inline w-9 h-5 pr-3 ml-1 hover:text-black" />
            Home
          </li>
        </Link>
        <li className="font-medium pt-2 hover:bg-gray-100 hover:rounded-lg hover:cursor-pointer">
          {" "}
          <img
            src={shortsIconUrl}
            alt="noimg"
            className="inline w-9 h-7 pr-2 "
          />{" "}
          Shorts
        </li>
        {/* <li className="font-medium">
          <MdOutlineSubscriptions className="inline w-7 h-5" />
          Subsciptions
        </li> */}
        <li className="font-medium pt-1 hover:bg-gray-100 hover:rounded-lg hover:cursor-pointer">
          {" "}
          <MdLiveTv className="inline w-9 h-5 pr-3 mr-1" />
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-7">Subsciptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
