import React from "react";
import {
  HiOutlinePlusCircle,
  HiOutlineHome,
  HiOutlineUserCircle,
} from "react-icons/hi";
import FeedCard from "../components/FeedCard";

export default function MainFeed() {
  const users = [
    {
      name: "Nicolás",
      city: "Buenos Aires",
      avatar: "/rei.png",
      date: "2023-10-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      name: "Lucía",
      city: "Córdoba",
      avatar: "/rei.png",
      date: "2023-09-28",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
  ];

  return (
    <main className="flex sm:flex-row flex-col sm:w-[80%]">
      <div className="sm:w-[70%] px-6 sm:px-14 pt-4 sm:pt-8 overflow-y-auto sm:min-h-screen sm:max-h-screen min-h-[75dvh] max-h-[75dvh]">
        {Array.isArray(users) &&
          users.map((user, index) => (
            <FeedCard
              key={index}
              name={user.name}
              city={user.city}
              avatar={user.avatar}
              date={user.date}
              description={user.description}
            />
          ))}
      </div>

      <nav className="w-full sm:hidden flex items-center justify-around min-h-[10dvh] border-t border-accent bg-white rounded-t-xl">
        <a
          href=""
          className="flex flex-col items-center font-normal text-lg text-accent"
        >
          {" "}
          <strong className="text-2xl">
            <HiOutlineHome />
          </strong>{" "}
          Inicio
        </a>
        <a
          href=""
          className="flex flex-col items-center font-normal text-lg text-accent"
        >
          {" "}
          <strong className="text-2xl">
            <HiOutlinePlusCircle />
          </strong>{" "}
          Crear
        </a>
        <a
          href=""
          className="flex flex-col items-center font-normal text-lg text-accent"
        >
          {" "}
          <strong className="text-2xl">
            <HiOutlineUserCircle />
          </strong>{" "}
          Cuenta
        </a>
      </nav>

      <aside className="w-[30%] border-l border-accent/50 p-4 hidden lg:flex flex-col min-h-[85vh]">
        <h2>filtros</h2>
      </aside>
    </main>
  );
}
