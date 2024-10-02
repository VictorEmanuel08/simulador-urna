export function DisplayPlebiscito({ numeroDigitado }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-80 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">SEU VOTO PARA</h2>
          <h3 className="text-2xl font-bold mb-4">Plebiscito</h3>
          <div className="flex space-x-2 mb-4">
            <span className="text-xl font-bold">Número:</span>
            <div className="w-10 h-12 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold">
              {numeroDigitado || ""}
            </div>
          </div>
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
  }
  