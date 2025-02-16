// components/auth/LoginButton.jsx
"use client"; // Client-side component

import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession(); // Get session data

  //Handle Sign In
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/productList",
    });
  };

  const handleSignOut = () => {
    signOut("google", {
      callbackUrl: "/",
    });
  };

  return session ? (
    <div className="flex items-center gap-x-2">
      <img
        src={session.user.image}
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />

      <p>{session.user.name}</p>

      <button
        onClick={handleSignOut}
        className="text-white bg-red-500 px-3 py-1 rounded"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <button
      onClick={handleSignIn}
      className="text-white bg-blue-500 px-3 py-1 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default LoginButton;
