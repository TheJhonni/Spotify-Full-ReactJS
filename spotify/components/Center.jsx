import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";

export default function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log(err));
  }, [spotifyApi, playlistId]);

  console.log(playlist);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2 className="text-white">The Jhonni</h2>
          <ChevronDoubleUpIcon className="h-5 w-5 text-white" />
        </div>
      </header>

      <section className="flex items-end space-x-7 bg-gradient-to-b to-black from-blue-600 h-80 text-white padding-8">
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[1]?.url}
          alt=""
        />
      </section>
    </div>
  );
}
