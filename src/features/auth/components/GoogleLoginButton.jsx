"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const router = useRouter();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const res = await fetch("/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential: credentialResponse.credential }),
          });

          const data = await res.json();

          if (data.token) {
            localStorage.setItem("token", data.token);
            router.push("/");
          } else {
            router.push("/login");
          }
        } catch (err) {
          console.error("Error en login:", err);
          router.push("/login");
        }
      }}
      onError={() => {
        router.push("/login");
      }}
    />
  );
}
