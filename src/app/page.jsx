"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainAside from "./home/views/MainAside";
import MainFeed from "./home/views/MainFeed";

export default function Home() {

  // const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="sm:hidden text-center text-accent font-gasoek text-4xl sm:text-5xl min-h-[10dvh] sm:min-h-[15vh] flex items-center justify-center border-b border-accent/50">
        Mitrapets
      </h1>
      <div className="w-full flex flex-col sm:flex-row">
        <MainAside />
        <button className="sm:hidden min-h-[5dvh] bg-accent " >hola desde filtros moviles</button>
        <MainFeed />
      </div>
    </div>
  );
}
