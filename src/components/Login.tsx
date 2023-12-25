"use client";

import { auth } from "@src/utils";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";

const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();

  const onGoogleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(
          result as any
        );
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(credential);
      });
  };

  return <button onClick={onGoogleAuth}>Sign in with google</button>;
};

export default GoogleLogin;
