"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const router = useRouter();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        localStorage.setItem("token", credentialResponse.credential || "");
        router.push("/");
      }}
      onError={() => {
        router.push("/login");
      }}
    />
  );
}
