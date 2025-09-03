import React from "react";
import Image from "next/image";
import { IoMdImages } from "react-icons/io";
import { VscRequestChanges } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiAlarmWarningLine } from "react-icons/ri";

export default function FeedCard({
  name,
  city,
  avatar,
  date,
  description,
}) {
  return (
    <div className="border-t border-r-gray-400 pt-4 px-2 mb-10">
      <div className="flex items-center">
        <Image
          src={avatar || ""}
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full mr-2"
        />
        <div className="flex items-center justify-between w-full">
            <div>
                <h2 className="font-medium">{name}</h2>
                <span className="font-extralight">{city}</span>
            </div>
            <span className="font-medium">{date}</span>
        </div>
      </div>
      <p className="font-light my-4 px-1">
        {description}
      </p>
      <div className="px-1">
        <Image
            src="/catPRUEBA.jpeg"
            alt="Post Image"
            width={300}
            height={200}
            className="w-full h-auto mt-4 rounded-lg"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center">
        <button className="flex items-center p-2 bg-accent/65 rounded-md ml-1 mt-2 text-white gap-2">Ver mas imagenes <IoMdImages /> </button>
        <div className="w-full sm:w-[60%] px-4 mt-2 flex justify-between">
            <button className="flex items-center gap-1 underline  text-accent">Solicitar <VscRequestChanges /> </button>
            <button className="flex items-center gap-1 underline ">Compartir <IoShareSocialOutline /> </button>
            <button className="flex items-center gap-1 underline  text-alert">Reportar <RiAlarmWarningLine /> </button>
        </div>
      </div>
    </div>
  );
}
