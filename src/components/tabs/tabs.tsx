export default function TabsLinks() {
    return (
        <div className="flex justify-between mt-6">
            <div className="bg-gray-700 px-6 py-2 rounded-md text-slate-300 hover:bg-gray-600 cursor-pointer w-[300px] text-center">
                Dashboard
            </div>
            <div className="bg-gray-700 px-6 py-2 rounded-md text-slate-300 hover:bg-gray-600 cursor-pointer w-[300px] text-center">
                Cliente
            </div>
            <div className="bg-gray-700 px-6 py-2 rounded-md text-slate-300 hover:bg-gray-600 cursor-pointer w-[300px] text-center">
                Entrada
            </div>
            <div className="bg-gray-700 px-6 py-2 rounded-md text-slate-300 hover:bg-gray-600 cursor-pointer w-[300px] text-center">
                Saída
            </div>
        </div>
    );
}
