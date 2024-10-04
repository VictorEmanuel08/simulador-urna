import { FaArrowRight } from "react-icons/fa";

export function Teclado({
  handleNumeroClick,
  handleConfirma,
  handleCorrige,
  handleBranco,
  etapa,
  handleFim,
}) {
  const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="relative bg-[#B7B5B2] py-4 px-12 rounded-lg flex flex-row items-center justify-between space-x-2">
      <div className="w-1/4 flex flex-col items-center justify-center space-y-2">
        <div className="flex flex-col items-center justify-center text-gray-500 border-2 border-gray-400 rounded-md py-1 px-6 text-base font-medium">
          <p>URNA</p>
          <p>ELEITORAL</p>
        </div>
        <div className="w-full text-gray-500 border-2 border-gray-400 rounded-md py-2 px-6 text-base font-medium "></div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {numeros.map((numero) => (
          <button
            key={numero}
            onClick={() => handleNumeroClick(numero)}
            className="bg-stone-800 rounded-sm text-white hover:bg-stone-900 w-16 h-12 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
          >
            {numero}
          </button>
        ))}
        <div className="col-span-1"></div>{" "}
        {/* Espaço em branco para centralizar o 0 */}
        <button
          onClick={() => handleNumeroClick("0")}
          className="bg-stone-800 rounded-sm text-white hover:bg-stone-900 w-16 h-12 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
        >
          0
        </button>
        <div className="col-span-1"></div> {/* Espaço em branco */}
      </div>
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={handleBranco}
          className="bg-gray-200 rounded-sm hover:bg-gray-100 w-full h-12 text-xs font-semibold col-span-1 flex flex-col items-center justify-start leading-none px-1 py-2"
        >
          BRANCO
        </button>
        <button
          onClick={handleCorrige}
          className="bg-[#B54433] rounded-sm hover:bg-red-600 w-full h-12 text-xs font-semibold col-span-1 flex flex-col items-center justify-start leading-none px-1 py-2"
        >
          CORRIGE
        </button>
        <button
          onClick={handleConfirma}
          className="bg-green-700 rounded-sm hover:bg-green-600 w-full h-24 text-xs font-medium col-span-1 flex flex-col items-center justify-start leading-none px-1 py-2"
        >
          CONFIRMA
        </button>
      </div>
      {etapa === "plebiscito" && (
        <div className="absolute top-4 right-1 cursor-pointer" onClick={handleFim}>
          <FaArrowRight className="text-xl text-white" />
        </div>
      )}
    </div>
  );
}
