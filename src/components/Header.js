import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch(cacheResults());

  useEffect(() => {
    console.log(searchQuery);

    //Make an API call after eeach key press
    //but if the diff b/w 2 API is less than < 200ms
    //then decline the API call
    // Debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //function for making api call
  const getSearchSuggestion = async () => {
    console.log(searchQuery);
    //fetching Youtube-search-api data
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 mb-2 shadow-lg ">
      <div className="flex justify-start col-span-1 ">
        <RxHamburgerMenu
          className="h-8 w-8 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            toggleMenuHandler();
          }}
        />
        <a href="/">
          <img
            className="h-7 pl-4"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="youtubeLogo"
          />
        </a>
      </div>
      <div className="col-span-11 ">
        <div className="min-w-full flex  flex-col">
          <div className="min-w-full flex justify-center">
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setShowSuggestions(false);
              }}
              className="w-2/4  border-gray-400 border-2 rounded-l-full py-1 pl-4 text-base"
              type="text"
            />
            <button className="border-2 border-gray-400 rounded-r-full px-2 py-1 bg-gray-50 ml-0 hover:bg-gray-200">
              <CiSearch className="h-6 w-8" />
            </button>
          </div>
          {showSuggestions && (
            <div className=" bg-white flex  absolute ml-64 mt-9 py-4  w-[560px] rounded-xl shadow-md  border-[1px] border-gray-100">
              <ul className="w-full">
                {suggestions.map((sugg) => (
                  <li
                    key={sugg}
                    className="pb-2  font-medium hover:bg-gray-100 hover:cursor-default "
                  >
                    <CiSearch className="h-6 w-5 mx-4  inline " />
                    {sugg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 flex justify-end ">
        <FaUserCircle className="text-gray-500 h-8 w-7 hover:cursor-pointer hover:text-gray-500 " />
      </div>
    </div>
  );
};

export default Header;
