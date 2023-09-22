import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTFMLZaO6rvrzg8O4_dpG5-jyShsxXLrbnuj-RklWtgT3oPvQe"
      />
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>Comment : {text}</p>
        <h1>Reply</h1>
      </div>
    </div>
  );
};

export default Comment;
