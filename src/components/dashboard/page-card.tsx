import CardKpi from "./card-kpi";
import { DollarSignIcon, ShoppingBagIcon, User2Icon, Wallet2Icon } from "lucide-react";

export function DashboardCard() {
    return (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardKpi 
                title="Clientes"
                icon={<User2Icon />}
                value="13"
                observation="+10% from last month"
                backgroundColor="bg-violet-800"
            />

            <CardKpi 
                title="Vendas"
                icon={<ShoppingBagIcon />}
                value="8000"
                observation="+16% from last month"
                backgroundColor="bg-blue-800"
            />

            <CardKpi 
                title="Recebidas"
                icon={<DollarSignIcon />}
                value="5000"
                observation="+12% from last month"
                backgroundColor="bg-green-800"
            />

            <CardKpi 
                title="Total"
                icon={<Wallet2Icon />}
                value="-3000"
                observation="+8% from last month"
                backgroundColor="bg-red-800"
            />
        </div>
    )
}