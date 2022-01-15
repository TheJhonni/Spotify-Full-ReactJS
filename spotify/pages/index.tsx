import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
//import { getTokenFromUrl } from "../lib/spotify";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}
