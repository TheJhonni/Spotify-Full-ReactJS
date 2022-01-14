import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div>
      <img
        className="w-53 mb-5"
        src="https://links.papareact.com/9xl"
        aly="spotify Logo"
      />
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
