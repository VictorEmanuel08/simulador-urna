import React, { useEffect, useState } from "react";

export function DisplayFim() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Função para formatar a data no formato desejado
  const formatDate = (date) => {
    const weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    const day = weekdays[date.getDay()];
    const dayOfMonth = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${dayOfMonth}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const formattedDate = formatDate(new Date());

  useEffect(() => {
    // Simula o carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10; // Aumenta o progresso
        } else {
          clearInterval(interval);
          setLoading(false); // Finaliza o carregamento
          return prev;
        }
      });
    }, 100); // Atualiza a cada 100ms

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="bg-[#323232] p-5 rounded-sm w-full h-[20rem]">
      <div className="relative bg-white rounded-sm h-full flex flex-col justify-between">
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            {/* Barra de Carregamento */}
            <div className="w-full bg-gray-300 rounded-lg h-2 mb-2">
              <div
                className="bg-green-700 h-full rounded-lg"
                style={{ width: `${progress}%`, transition: "width 0.1s" }}
              />
            </div>
            <div className="text-xl font-bold">Gravando...</div>
          </div>
        ) : (
          <>
            {/* Data e Hora no canto superior esquerdo */}
            <div className="absolute top-2 left-2 text-xs font-bold">
              {formattedDate}
            </div>

            {/* Texto centralizado */}
            <div className="flex-grow flex items-center justify-center text-9xl font-semibold">
              FIM
            </div>

            {/* "VOTOU" no canto inferior direito */}
            <div className="text-gray-500 px-3 text-4xl font-normal text-right">
              VOTOU
            </div>

            <div className="w-full bg-cyan-200 text-xs text-center">
              Município: 99999 - Minha Cidade | Zona: 9999 Seção: 9999
            </div>
          </>
        )}
      </div>
    </div>
  );
}
