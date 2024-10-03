export function DisplayVereador({ numeroDigitado, person }) {
  const numeroLength = numeroDigitado.length;

  return (
    <div className="bg-[#323232] p-5 rounded-sm w-full h-[20rem]">
      <div className="bg-white p-2 rounded-sm h-full flex flex-col justify-between">
        <div>
          <div className="w-full flex flex-row items-center">
            <div className="w-1/2 flex flex-col">
              <h2 className="text-xl font-bold mb-2">SEU VOTO PARA</h2>
              <h3 className="text-xl font-bold mb-2">Vereador</h3>
            </div>

            {/* Contêiner com tamanho fixo para a imagem */}
            <div className="w-1/2 flex items-center justify-end">
              <div className="w-20 h-20">
                {/* Definindo tamanho fixo */}
                {numeroLength === 5 && (
                  <div className="flex flex-col items-center justify-center mb-2">
                    <img
                      className="w-full h-full object-contain"
                      src={person}
                      alt="Candidato"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-2 mb-2">
            <span className="text-xl font-bold">Número:</span>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-10 h-12 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold"
              >
                {numeroDigitado[index] || ""}
              </div>
            ))}
          </div>

          {numeroLength >= 2 && (
            <p className="text-base">Partido: Partido Exemplo</p>
          )}

          {numeroLength === 5 && (
            <>
              <p className="text-base">Nome: Vereador Exemplo</p>
              <p className="text-base">Partido: Partido Exemplo</p>
            </>
          )}
        </div>

        <p className="text-xs border-t border-1 border-black">
          Aperte a tecla:
          <br />
          CONFIRMA para CONFIRMAR este voto
          <br />
          CORRIGE para REINICIAR este voto
        </p>
      </div>
    </div>
  );
}
