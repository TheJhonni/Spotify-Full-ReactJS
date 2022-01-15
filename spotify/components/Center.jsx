import React from "react";
import { useSession } from "next-auth/react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";

export default function Center() {
  const { data: session } = useSession();
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
        <h1>hellloo</h1>
      </section>
    </div>
  );
}
