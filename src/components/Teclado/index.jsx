export function Teclado({ handleNumeroClick, handleConfirma, handleCorrige }) {
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
          <div className="col-span-1"></div> {/* Espaço em branco para centralizar o 0 */}
          <button
            onClick={() => handleNumeroClick("0")}
            className="bg-stone-800 rounded-lg text-white hover:bg-stone-900 w-16 h-12 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
          >
            0
          </button>
          <div className="col-span-1"></div> {/* Espaço em branco */}
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
  }
  