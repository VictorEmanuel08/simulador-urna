import { useState } from "react";
import person from '../../assets/person.png'
import { DisplayVereador } from "../../components/Displays/DisplayVereador";
import { DisplayPrefeito } from "../../components/Displays/DisplayPrefeito";
import { DisplayPlebiscito } from "../../components/Displays/DisplayPlebiscito";
import {Teclado} from '../../components/Teclado'

export function Urna() {
  const [etapa, setEtapa] = useState("vereador");
  const [numeroDigitado, setNumeroDigitado] = useState("");
  const [votos, setVotos] = useState({
    vereador: "",
    prefeito: "",
    plebiscito: "",
  });

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
      setVotos((prev) => ({ ...prev, vereador: numeroDigitado }));
      setEtapa("prefeito");
    } else if (etapa === "prefeito" && numeroDigitado === "00") {
      setVotos((prev) => ({ ...prev, prefeito: numeroDigitado }));
      setEtapa("plebiscito");
    } else if (etapa === "plebiscito" && (numeroDigitado === "1" || numeroDigitado === "2")) {
      setVotos((prev) => ({ ...prev, plebiscito: numeroDigitado }));
      setEtapa("fim");
    }
    setNumeroDigitado("");
  };

  const handleCorrige = () => {
    setNumeroDigitado("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-[#D6D0C4] p-8 rounded-lg shadow-lg flex space-x-8">
        {etapa === "vereador" && <DisplayVereador numeroDigitado={numeroDigitado} person={person}/>}
        {etapa === "prefeito" && <DisplayPrefeito numeroDigitado={numeroDigitado} person={person}/>}
        {etapa === "plebiscito" && <DisplayPlebiscito numeroDigitado={numeroDigitado} />}
        <Teclado
          handleNumeroClick={handleNumeroClick}
          handleConfirma={handleConfirma}
          handleCorrige={handleCorrige}
        />
      </div>
    </div>
  );
}
