import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../../HomeCards/HomeCard";
import HomeCards from "../../HomeCards/HomeCards";

export default function Banner({ handleSubmit }) {
  // console.log("Banner", key);
  const divStyle = {
    backgroundImage: "url('/Resources/Rectangle 4281.png') ",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Set the desired height
  };
  const styles = {
    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  };
  // ,-mt-24 md:-mt-20
  return (
    <div style={divStyle} className=" lg:-mt-28">
      <div
        style={styles.content}
        className="flex items-end justify-center md:items-end lg:items-center py-8"
      >
        <form className="" onSubmit={handleSubmit}>
          <div className="flex w-62 lg:w-96">
            <input
              className="peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:bg-blue-gray-50"
              placeholder="Search here..."
              type="text"
              name="search"
            ></input>
            <button
              className="select-none rounded-lg bg-[#FF444A] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
