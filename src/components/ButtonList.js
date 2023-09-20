import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Travel",
  "Cricket",
  "Cooking",
  "News",
  "Travel",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
