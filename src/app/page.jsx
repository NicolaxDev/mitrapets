'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // 👈 si no hay token, va al login
    }
  }, [router]);

  return (
    <div className="">
      <h1>Bienvenido a mitrapets</h1>
    </div>
  );
}
