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

const clientes = [
    {
        id: "1",
        name: "Jonas Baptista Franco",
        whatsapp: "16955443333",
        city: "Itápolis",
    },
    {
        id: "2",
        name: "Pedro Boer Franco",
        whatsapp: "17988776655",
        city: "Catanduva",
    },
    {
        id: "3",
        name: "Jonas Baptista Franco",
        whatsapp: "16955443333",
        city: "Itápolis",
    },
    {
        id: "4",
        name: "Kemily Fernanda Esteves Boer",
        whatsapp: "14/02/2015",
        city: "Santa Adélia",
    },
    {
        id: "5",
        name: "Josefina da Luz",
        whatsapp: "17966554433",
        city: "Ariranha",
    },
    {
        id: "6",
        name: "Pedro Boer Franco",
        whatsapp: "17988776655",
        city: "Catanduva",
    },
    {
        id: "7",
        name: "Andrelina Pires de Souza",
        whatsapp: "17911223344",
        city: "Pindorama",
    },
];

export default function ClientList() {
    return (
        <Table>
            <TableCaption>Lista das(os) últimas(os) clientes.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[440px]">Nome</TableHead>
                    <TableHead className="w-[140px]">Whatsapp</TableHead>
                    <TableHead className="w-[140px]">Cidade</TableHead>
                    <TableHead className="w-[140px] text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {clientes.map((cliente) => (
                    <TableRow key={cliente.id}>
                        <TableCell className="font-medium">{cliente.name}</TableCell>
                        <TableCell>{cliente.whatsapp}</TableCell>
                        <TableCell>{cliente.city}</TableCell>
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
