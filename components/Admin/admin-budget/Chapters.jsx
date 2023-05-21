import React from "react";

function Chapters(props) {
  const chapters = props;

  const items = [];

  for (const key in chapters.data) {
    const item = chapters.data[key];
    items.push({ id: key, ...item });
  }
  return (
    <div className=" w-full">
      <ul className=" grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 h-full">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className=" hover:bg-[var(--primary-color-light)] hover:cursor-pointer bg-[#cae6f3]    h-[160px] center flex-col rounded-[10px] shadow-md space-y-1"
            >
              <h2 className=" text-[28px] text-[#023047]/80 font-semibold">
                {item.chapterAmount}{" "}
              </h2>
              <h5 className=" text-[20px] text-[#023047]/60 font-semibold">
                {item.chapterTitle}
              </h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Chapters;
