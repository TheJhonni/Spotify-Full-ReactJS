import React from "react";
import { loginUrl } from "../lib/spotify";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            href={loginUrl}
            className="text-white bg-[#18D860] p-5 rounded-full hover:text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Log in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
