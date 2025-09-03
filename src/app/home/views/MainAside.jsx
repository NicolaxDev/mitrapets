import React from "react";
import {
  HiOutlinePlusCircle,
  HiOutlineHome,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

export default function FiltersAside() {

  const links = [
    { title: "Inicio", href: "", icon: <HiOutlineHome /> },
    { title: "Crear publicacion", href: "", icon: <HiOutlinePlusCircle /> },
    { title: "Mis publicaciones", href: "", icon: <LuFileSpreadsheet /> },
    { title: "Solicitudes", href: "", icon: <VscGitPullRequestGoToChanges /> },
    { title: "Cuenta", href: "", icon: <HiOutlineUserCircle /> },
  ];
  
  return (
    <aside className="hidden sm:flex flex-col w-[20%] border-r border-accent/50 min-h-screen justify-center bg-accent">
      <h1 className="hidden text-white font-gasoek sm:text-3xl min-h-[15vh] sm:flex flex-col items-start justify-center pl-8">
        Mitrapets
      </h1>
      <nav className="flex flex-col items-start justify-center gap-4 mt-8 text-lg font-medium px-8">
        {
          links.map((link, index) => (
            <a key={index} href={link.href} className="font-normal flex items-center gap-2 border border-transparent hover:border-accent w-full p-2 rounded-lg hover:bg-white/30 ease-in-out duration-200 transition-all text-white" > {link.icon} {link.title}</a>
          ))
        }
      </nav>
    </aside>
  );
}
