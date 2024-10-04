import { useState } from "react";
import { IoReload } from "react-icons/io5";
import { DisplayPrefeito } from "../../components/Displays/DisplayPrefeito";
import { DisplayVereador } from "../../components/Displays/DisplayVereador";
import { DisplayPlebiscito } from "../../components/Displays/DisplayPlebiscito";
import { DisplayFim } from "../../components/Displays/DisplayFim";
import { Teclado } from "../../components/Teclado";
import person from "../../assets/person.png";

export function Urna() {
  const [etapa, setEtapa] = useState("vereador");
  const [numeroDigitado, setNumeroDigitado] = useState("");
  const [votoBranco, setVotoBranco] = useState(false);

  const handleNumeroClick = (numero) => {
    if (votoBranco) return; // Não permite digitar se o voto for em branco
    if (etapa === "vereador" && numeroDigitado.length < 5) {
      setNumeroDigitado((prev) => prev + numero);
    } else if (etapa === "prefeito" && numeroDigitado.length < 2) {
      setNumeroDigitado((prev) => prev + numero);
    } else if (etapa === "plebiscito" && numeroDigitado.length < 1) {
      setNumeroDigitado(numero);
    }
  };

  const handleConfirma = () => {
    if (votoBranco) {
      // Se for voto em branco, vai diretamente para a próxima etapa
      setEtapa(
        etapa === "vereador"
          ? "prefeito"
          : etapa === "prefeito"
          ? "plebiscito"
          : "fim"
      );
      setVotoBranco(false);
    } else if (
      etapa === "vereador" &&
      (numeroDigitado === "00000" || numeroDigitado.length === 5)
    ) {
      setEtapa("prefeito");
    } else if (
      etapa === "prefeito" &&
      (numeroDigitado === "00" || numeroDigitado.length === 2)
    ) {
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
    setVotoBranco(false); // Corrige também o voto branco
  };

  const handleBranco = () => {
    setNumeroDigitado("");
    setVotoBranco(true);
  };

  const handleReload = () => {
    setEtapa("vereador");
    setNumeroDigitado("");
    setVotoBranco(false);
  };
  
  const handleVereador = () => {
    setEtapa("vereador");
    setNumeroDigitado("");
    setVotoBranco(false);
  };
  const handlePrefeito = () => {
    setEtapa("prefeito");
    setNumeroDigitado("");
    setVotoBranco(false);
  };
  const handlePlebiscito = () => {
    setEtapa("plebiscito");
    setNumeroDigitado("");
    setVotoBranco(false);
  };
  const handleFim = () => {
    setEtapa("fim");
    setNumeroDigitado("");
    setVotoBranco(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#1C69AF] flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center space-y-2 absolute top-12 right-12"
      >
        <div
          className=" bg-white rounded-full p-2 cursor-pointer"
          onClick={handleReload}
        >
          <IoReload className="text-2xl" />
        </div>
        <div className="w-full bg-white rounded-full p-1 flex items-center justify-center cursor-pointer" onClick={handleVereador}>Vereador</div>
        <div className="w-full bg-white rounded-full p-1 flex items-center justify-center cursor-pointer" onClick={handlePrefeito}>Prefeito</div>
        <div className="w-full bg-white rounded-full p-1 flex items-center justify-center cursor-pointer" onClick={handlePlebiscito}>Plebiscito</div>
        <div className="w-full bg-white rounded-full p-1 flex items-center justify-center cursor-pointer" onClick={handleFim}>Fim</div>
      </div>
      <div className="w-1/2 flex flex-col bg-[#B7B5B2] px-8 py-4 rounded-sm space-x-8 ">
        {etapa === "vereador" && (
          <DisplayVereador
            numeroDigitado={numeroDigitado}
            person={person}
            votoBranco={votoBranco}
          />
        )}
        {etapa === "prefeito" && (
          <DisplayPrefeito
            numeroDigitado={numeroDigitado}
            person={person}
            votoBranco={votoBranco}
          />
        )}
        {etapa === "plebiscito" && (
          <DisplayPlebiscito
            numeroDigitado={numeroDigitado}
            votoBranco={votoBranco}
          />
        )}
        {etapa === "fim" && <DisplayFim />}
        <Teclado
          handleNumeroClick={handleNumeroClick}
          handleConfirma={handleConfirma}
          handleCorrige={handleCorrige}
          handleBranco={handleBranco}
          etapa={etapa}
          handleFim={handleFim}
        />
      </div>
    </div>
  );
}
