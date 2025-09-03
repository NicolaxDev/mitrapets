"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth(redirectIfNoAuth = true) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      if (redirectIfNoAuth) {
        router.push("/login"); // redirige si no hay token
      }
    }
  }, [router, redirectIfNoAuth]);

  return { isAuthenticated };
}
