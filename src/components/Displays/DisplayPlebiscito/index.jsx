export function DisplayPlebiscito({ numeroDigitado }) {
  return (
    <div className="bg-[#323232] p-5 rounded-sm w-full h-[20rem]">
      <div className="bg-white p-2 rounded-sm h-full flex flex-col justify-between">
        {/* Título e opções centralizados */}
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">
            Você é a favor do passe livre estudantil?
          </h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            {numeroDigitado === "1" ? (
              <div className="border-2 border-black px-4 py-2 rounded-lg bg-black text-white font-bold">
                1 - Sim
              </div>
            ) : numeroDigitado !== "2" ? (
              <div className="border-2 border-black px-4 py-2 rounded-lg font-bold">
                1 - Sim
              </div>
            ) : null}

            {numeroDigitado === "2" ? (
              <div className="border-2 border-black px-4 py-2 rounded-lg bg-black text-white font-bold">
                2 - Não
              </div>
            ) : numeroDigitado !== "1" ? (
              <div className="border-2 border-black px-4 py-2 rounded-lg font-bold">
                2 - Não
              </div>
            ) : null}
          </div>
        </div>

        {/* Exibe "VOTO NULO" se o número digitado for diferente de 1 ou 2 */}
        {numeroDigitado.length > 0 &&
          numeroDigitado !== "1" &&
          numeroDigitado !== "2" && (
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">Número:</span>
              <div className="w-10 h-12 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold">
                {numeroDigitado || ""}
              </div>
              <div className="font-bold">NÚMERO ERRADO</div>
              <div className="font-bold">VOTO NULO</div>
            </div>
          )}

        {/* Rodapé alinhado à esquerda */}
        <div className="text-xs text-left border-t border-1 border-black">
          Aperte a tecla:
          <br />
          CONFIRMA para CONFIRMAR este voto
          <br />
          CORRIGE para REINICIAR este voto
        </div>
      </div>
    </div>
  );
}
