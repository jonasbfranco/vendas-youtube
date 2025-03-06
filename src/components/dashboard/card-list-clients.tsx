import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CardListClient() {
    return (
        <Card className="w-full border-2 border-zinc-700 bg-transparent mt-8">
            <CardHeader>
                <CardTitle className="mb-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-[2rem] text-white">
                            Vendas Recentes
                        </p>
                        <p className="text-[1rem] text-white opacity-50">
                            Você fez 35 vendas este mês.
                        </p>
                    </div>
                </CardTitle>
                <Separator />
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 flex-col items-start">
                        <div className="w-48 md:w-full truncate md:text-xl font-bold text-zinc-100">
                            Jonas Baptista Franco
                        </div>
                        <div className="text-sm text-white opacity-50">
                            2 Compras
                        </div>
                    </div>
                    <div className="flex justify-end sm:w-1/2">
                        <div className="sm:text-2xl font-bold text-slate-300">
                            R$ 1.200,00
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-1 flex-col items-start">
                        <div className="w-48 md:w-full truncate md:text-xl font-bold text-zinc-100">
                            Josefina da Silva Sauro
                        </div>
                        <div className="text-sm text-white opacity-50">
                            3 Compras
                        </div>
                    </div>
                    <div className="flex justify-end sm:w-1/2">
                        <div className="sm:text-2xl font-bold text-slate-300">
                            R$ 2.000,00
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-1 flex-col items-start">
                        <div className="w-48 md:w-full truncate md:text-xl font-bold text-zinc-100">
                            Maria das Dores Xavier
                        </div>
                        <div className="text-sm text-white opacity-50">
                            1 Compras
                        </div>
                    </div>
                    <div className="flex justify-end sm:w-1/2">
                        <div className="sm:text-2xl font-bold text-slate-300">
                            R$ 800,00
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-1 flex-col items-start">
                        <div className="w-48 md:w-full truncate md:text-xl font-bold text-zinc-100">
                            Andrelina Pires de Souza
                        </div>
                        <div className="text-sm text-white opacity-50">
                            8 Compras
                        </div>
                    </div>
                    <div className="flex justify-end sm:w-1/2">
                        <div className="sm:text-2xl font-bold text-slate-300">
                            R$ 3.100,00
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-1 flex-col items-start">
                        <div className="w-48 md:w-full truncate md:text-xl font-bold text-zinc-100">
                            Henrique Pereira da Silva
                        </div>
                        <div className="text-sm text-white opacity-50">
                            3 Compras
                        </div>
                    </div>
                    <div className="flex justify-end sm:w-1/2">
                        <div className="sm:text-2xl font-bold text-slate-300">
                            R$ 1.950,00
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
