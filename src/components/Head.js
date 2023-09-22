import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsVisibility, setSuggestionsVisibility] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(
    () => {
      //API call

      // Performing Debouncing

      /** Setup of debouncing
       * make an api call on every key press
       * but if the difference b/w 2 API calls is (less than) < 200ms -> Decline the API calls.
       * Make API calls whnen timer expire
       */

      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
        else getSearchSuggestions();
      }, 200);

      // We performing unmounting using return in useEffect
      // We do unmounting , because we want to destroy the prevoius timer,  because it is calling unneccesary
      return () => {
        clearTimeout(timer);
      };
    }, // eslint-disable-next-line
    [searchQuery]
  );

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const searchOutput = await data.json();
    //console.log(searchOutput[0]);
    console.log(searchOutput[1]);
    setSuggestions(searchOutput[1]);

    // caching using store
    dispatch(
      cacheResults({
        [searchQuery]: searchOutput[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // We did not pass anything inside toggleMenu() because there is no payload in toggleMenu Action function in appSlice.
  };
  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1 placeholder:">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-6 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onFocus={() => setSuggestionsVisibility(true)}
            onBlur={() => setSuggestionsVisibility(false)}
          ></input>
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {suggestionsVisibility && suggestions.length > 0 ? (
          <div className="fixed bg-white py-2 px-2 w-[26.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className=" py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTFMLZaO6rvrzg8O4_dpG5-jyShsxXLrbnuj-RklWtgT3oPvQe"
        ></img>
      </div>
    </div>
  );
};

export default Head;
