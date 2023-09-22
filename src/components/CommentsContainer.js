import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [],
  },
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [
      {
        name: "John wick",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
        reply: [],
      },
      {
        name: "John wick",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
        reply: [
          {
            name: "John wick",
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
            reply: [],
          },
          {
            name: "John wick",
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
            reply: [
              {
                name: "John wick",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
                reply: [],
              },
              {
                name: "John wick",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
                reply: [],
              },
            ],
          },
        ],
      },
      {
        name: "John wick",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
        reply: [],
      },
    ],
  },
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [],
  },
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [],
  },
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [],
  },
  {
    name: "John wick",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    reply: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[41rem]">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentList comment={commentData} />
    </div>
  );
};

export default CommentsContainer;
