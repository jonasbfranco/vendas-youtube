import FormSaidas from "@/components/form/form-saidas";
import SaidaList from "@/components/saidas/list-saidas";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function CadastroSaidas() {
    return (
        <div>
            <div>
                <div className="text-3xl font-bold text-slate-300 mt-4">
                    Cadastro de Saidas
                </div>
                <div className="mt-4 mb-4 flex justify-between items-center">
                    <Input
                        className="w-80 text-slate-800 bg-slate-100"
                        placeholder="Procurar saidas"
                    />

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-8 py-[22px] text-md hover:bg-slate-700 border-none">
                                + Cadastrar Saidas
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px] bg-slate-800 border-none">
                            <DialogHeader>
                                <DialogTitle></DialogTitle>
                            </DialogHeader>
                                <FormSaidas />
                            <DialogFooter>
                                {/* <Button type="submit">Save changes</Button> */}
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <SaidaList />
            </div>
        </div>
    );
}
