import React from "react";
import GoogleLoginButton from "../../features/auth/components/GoogleLoginButton";
import Image from "next/image";
import pets from "../assets/pets.png";
import petsGreen from "../assets/petsGreen.png";
import "../styles/landing.css";

export default function page() {
  return (
    <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center opacity-0 animate-fadeIn">
      <div className="shadow flex items-center justify-around w-[90%]">
        <div className="flex items-center justify-around flex-col text-center h-[90dvh] sm:h-[90vh] sm:w-[50%]">
          <h1 className="text-center text-accent font-gasoek text-4xl sm:text-5xl ">
            Mitrapets
          </h1>
          <div>
            <h2 className="font-bold text-3xl">Bienvenido</h2>
            <span className="font-thin text-md sm:text-lg">
              “Las segundas oportunidades ocurren”
            </span>
          </div>
          <GoogleLoginButton />
          <div className="sm:hidden ">
            <Image src={pets} alt="Login Image" width={200} />
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-thin">
              Al continuar aceptas nuestros{" "}
              <a href="" className="text-accent">
                términos y condiciones
              </a>{" "}
            </p>
            <span className="font-thin">
              <a href="" className="text-accent">
                Soporte
              </a>{" "}
              |{" "}
              <a href="" className="text-accent">
                Contacto comercial
              </a>
            </span>
          </div>
        </div>
        <div className="w-[50%] h-[90vh] overflow-hidden relative rounded-r-[10px] hidden sm:block">
          <Image
            src={petsGreen}
            alt="Login Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
