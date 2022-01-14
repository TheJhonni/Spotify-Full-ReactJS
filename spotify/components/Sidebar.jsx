import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm  border-r border-rgay-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Create Playlist...</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="w-5 h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
        <p className="cursor-pointer hover:text-white ">
          Playlist Name..........
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
