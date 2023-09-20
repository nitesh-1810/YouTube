import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
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
        ></img>
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></img>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        ></input>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
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
