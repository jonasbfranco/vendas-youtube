import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const entradas = [
    {
        id: "1",
        cliente: "Jonas Baptista Franco",
        data: "01/01/2025",
        valor: "1000,00",
    },
    {
        id: "2",
        cliente: "Pedro Boer Franco",
        data: "20/02/2025",
        valor: "554,00",
    },
    {
        id: "3",
        cliente: "Jonas Baptista Franco",
        data: "28/02/2025",
        valor: "1235,00",
    },
    {
        id: "4",
        cliente: "Kemily Fernanda Esteves Boer",
        data: "14/02/2025",
        valor: "2100,00",
    },
    {
        id: "5",
        cliente: "Josefina da Luz",
        data: "04/02/2025",
        valor: "300,00",
    },
    {
        id: "6",
        cliente: "Pedro Boer Franco",
        data: "06/03/2025",
        valor: "700,00",
    },
    {
        id: "7",
        cliente: "Andrelina Pires de Souza",
        data: "03/03/2025",
        valor: "2000,00",
    },
];

export default function EntradaList() {
    return (
        <Table>
            <TableCaption>Lista das(os) últimas(os) clientes.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[140px]">Data</TableHead>
                    <TableHead className="w-[440px]">Cliente</TableHead>
                    <TableHead className="w-[140px]">Valor</TableHead>
                    <TableHead className="w-[140px] text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {entradas.map((entrada) => (
                    <TableRow key={entrada.id}>
                        <TableCell className="font-medium">{entrada.data}</TableCell>
                        <TableCell>{entrada.cliente}</TableCell>
                        <TableCell>{entrada.valor}</TableCell>
                        <TableCell>
                            <div className="flex justify-end gap-2">
                                <button className="px-4 py-2 bg-sky-700 hover:bg-sky-500 rounded-md">Detalhes</button>
                                <button className="px-4 py-2 bg-lime-700 hover:bg-lime-500 rounded-md">Editar</button>
                                <button className="px-4 py-2 bg-red-700 hover:bg-red-500 rounded-md">Excluir</button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    );
}
