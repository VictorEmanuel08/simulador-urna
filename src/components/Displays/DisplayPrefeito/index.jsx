export function DisplayPrefeito({ numeroDigitado, person }) {
  const numeroLength = numeroDigitado.length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-100 h-84 flex flex-col justify-between">
      <div>
        <div className="w-full flex flex-row items-center mb-2">
          <div className="w-1/2 flex flex-col">
            <h2 className="text-lg font-bold mb-2">SEU VOTO PARA</h2>
            <h3 className="text-xl font-bold mb-2">Prefeito</h3>
          </div>
          {numeroLength === 2 && (
            <div className="w-1/2 flex items-center justify-end">
              <img className="w-1/2" src={person} alt="Candidato" />
            </div>
          )}
        </div>
        <div className="flex space-x-2 mb-2">
          <span className="text-xl font-bold">Número:</span>
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-10 h-12 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold"
            >
              {numeroDigitado[index] || ""}
            </div>
          ))}
        </div>
        {numeroLength === 2 && (
          <>
            <p className="text-lg">Nome: Candidato Exemplo</p>
            <p className="text-lg">Partido: Partido Exemplo</p>
            <p className="text-lg">Vice: Candidato Exemplo</p>
          </>
        )}
        
      </div>
      <div className="border border-black"></div>
      <p className="text-sm">
        Aperte a tecla:
        <br />
        CONFIRMA para CONFIRMAR este voto
        <br />
        CORRIGE para REINICIAR este voto
      </p>
    </div>
  );
}
