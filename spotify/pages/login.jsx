/* import React from "react";
import { loginUrl } from "../lib/spotify";
// import { Link } from "react-router-dom";
// import { getProviders, signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-40 mb-5" src="https://links.papareact.com/9xl" alt="" />
      <a
        href={loginUrl}
        className="text-black bg-white p-3 rounded hover:bg-black hover:text-white"
      >
        Log in with Spotify
      </a>
    </div>
  );
}

export default Login;

/* export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
} */
