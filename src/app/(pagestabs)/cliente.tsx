import ClientList from "@/components/cliente/list-cliente";
import FormDialog from "@/components/form/form-dialog";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroCliente() {
    return (
        <div>
            <div>
                <div className="text-3xl font-bold text-slate-300 mt-4">
                    Cadastro de Clientes
                </div>
                <div className="mt-4 mb-4 flex justify-between items-center">
                    <Input
                        className="w-80 text-slate-800 bg-slate-100"
                        placeholder="Procurar clientes"
                    />

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-8 py-[22px] text-md hover:bg-slate-700 border-none">
                                + Cadastrar Cliente
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px] bg-slate-800 border-none">
                            <DialogHeader>
                                <DialogTitle></DialogTitle>
                            </DialogHeader>
                                <FormDialog />
                            <DialogFooter>
                                {/* <Button type="submit">Save changes</Button> */}
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </div>
                <ClientList />
            </div>
        </div>
    );
}
