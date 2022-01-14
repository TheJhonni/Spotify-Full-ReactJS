import React from "react";
import { useSession } from "next-auth/react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";

export default function Center() {
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFelGWx6TXTMA/profile-displayphoto-shrink_200_200/0/1609341273239?e=1647475200&v=beta&t=3nEdvgAPiO3H-KmCotq_gu_jpPNwWYuHNO155eSErKM"
          />
          <h2 className="text-white">Username</h2>
          <ChevronDoubleUpIcon className="h-5 w-5" />
        </div>
      </header>

      <section className="flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white padding-8">
        <h1>hellloo</h1>
      </section>
    </div>
  );
}
