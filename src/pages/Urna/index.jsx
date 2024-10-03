import { useState } from "react";
import person from "../../assets/person.png";
import { DisplayVereador } from "../../components/Displays/DisplayVereador";
import { DisplayPrefeito } from "../../components/Displays/DisplayPrefeito";
import { DisplayPlebiscito } from "../../components/Displays/DisplayPlebiscito";
import { Teclado } from "../../components/Teclado";
import { DisplayFim } from "../../components/Displays/DisplayFim";

export function Urna() {
  const [etapa, setEtapa] = useState("vereador");
  const [numeroDigitado, setNumeroDigitado] = useState("");

  const handleNumeroClick = (numero) => {
    if (etapa === "vereador" && numeroDigitado.length < 5) {
      setNumeroDigitado((prev) => prev + numero);
    } else if (etapa === "prefeito" && numeroDigitado.length < 2) {
      setNumeroDigitado((prev) => prev + numero);
    } else if (etapa === "plebiscito" && numeroDigitado.length < 1) {
      setNumeroDigitado(numero);
    }
  };

  const handleConfirma = () => {
    if (etapa === "vereador" && numeroDigitado === "00000") {
      setEtapa("prefeito");
    } else if (etapa === "prefeito" && numeroDigitado === "00") {
      setEtapa("plebiscito");
    } else if (
      etapa === "plebiscito" &&
      (numeroDigitado === "1" || numeroDigitado === "2")
    ) {
      setEtapa("fim");
    }
    setNumeroDigitado("");
  };

  const handleCorrige = () => {
    setNumeroDigitado("");
  };

  return (
    <div className="min-h-screen w-full bg-[#1C69AF] flex items-center justify-center">
      <div className="w-1/2 flex flex-col bg-[#B7B5B2] px-8 py-4 rounded-sm space-x-8 ">
        {etapa === "vereador" && (
          <DisplayVereador numeroDigitado={numeroDigitado} person={person} />
        )}
        {etapa === "prefeito" && (
          <DisplayPrefeito numeroDigitado={numeroDigitado} person={person} />
        )}
        {etapa === "plebiscito" && (
          <DisplayPlebiscito numeroDigitado={numeroDigitado} />
        )}
        {etapa === "fim" && <DisplayFim />}
        <Teclado
          handleNumeroClick={handleNumeroClick}
          handleConfirma={handleConfirma}
          handleCorrige={handleCorrige}
        />
      </div>
    </div>
  );
}
