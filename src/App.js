import React, { useState } from "react";
import person from "./assets/person.png";

export function App() {
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
    } else if (
      etapa === "plebiscito" &&
      (numeroDigitado === "1" || numeroDigitado === "2")
    ) {
      setVotos((prev) => ({ ...prev, plebiscito: numeroDigitado }));
      setEtapa("fim");
    }
    setNumeroDigitado("");
  };

  const handleCorrige = () => {
    setNumeroDigitado("");
  };

  const renderTeclado = () => {
    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
      <div className="bg-stone-600 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-2">
          {numeros.map((numero) => (
            <button
              key={numero}
              onClick={() => handleNumeroClick(numero)}
              className="bg-stone-800 rounded-lg text-white hover:bg-stone-900 w-16 h-12 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
            >
              {numero}
            </button>
          ))}
          <div className="col-span-1"></div>{" "}
          {/* Espaço em branco para centralizar o 0 */}
          <button
            onClick={() => handleNumeroClick("0")}
            className="bg-stone-800 rounded-lg text-white hover:bg-stone-900 w-16 h-12 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
          >
            0
          </button>
          <div className="col-span-1"></div>{" "}
          {/* Espaço em branco para centralizar o 0 */}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <button
            onClick={() => {}}
            className="bg-white rounded-lg text-black hover:bg-gray-200 w-full h-12 text-xs font-bold col-span-1"
          >
            BRANCO
          </button>
          <button
            onClick={handleCorrige}
            className="bg-orange-500 rounded-lg text-white hover:bg-orange-600 w-full h-12 text-xs font-bold col-span-1"
          >
            CORRIGE
          </button>
          <button
            onClick={handleConfirma}
            className="bg-green-500 rounded-lg text-white hover:bg-green-600 w-full h-12 text-xs font-bold col-span-1"
          >
            CONFIRMA
          </button>
        </div>
      </div>
    );
  };

  const renderDisplay = () => {
    const isVereador = etapa === "vereador";
    const numeroLength = numeroDigitado.length;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-80 flex flex-col justify-between">
        <div>
          <div className="w-full flex flex-row items-center mb-4">
            <div className="w-1/2 flex flex-col">
              <h2 className="text-xl font-bold mb-2">SEU VOTO PARA</h2>
              <h3 className="text-2xl font-bold mb-4">
                {etapa.charAt(0).toUpperCase() + etapa.slice(1)}
              </h3>
            </div>
            {numeroLength === 5 && (
              <div className="w-1/2 flex items-center justify-end">
                <img className="w-1/2" src={person} alt="Candidato" />
              </div>
            )}
          </div>

          <div className="flex space-x-2 mb-4">
            <span className="text-xl font-bold">Número:</span>
            {[...Array(isVereador ? 5 : etapa === "prefeito" ? 2 : 1)].map(
              (_, index) => (
                <div
                  key={index}
                  className="w-10 h-12 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold"
                >
                  {numeroDigitado[index] || ""}
                </div>
              )
            )}
          </div>

          {isVereador && numeroLength === 2 && (
            <p className="text-xl">Partido: Partido Exemplo</p>
          )}
          {isVereador && numeroLength === 5 && (
            <>
              <p className="text-xl">Nome: Vereador Exemplo</p>
              <p className="text-xl">Partido: Partido Exemplo</p>
            </>
          )}
        </div>
        <p className="text-sm">
          Aperte a tecla:
          <br />
          CONFIRMA para CONFIRMAR este voto
          <br />
          CORRIGE para REINICIAR este voto
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-[#D6D0C4] p-8 rounded-lg shadow-lg flex space-x-8">
        {renderDisplay()}
        {renderTeclado()}
      </div>
    </div>
  );
}
