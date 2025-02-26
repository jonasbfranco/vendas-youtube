import CardKpi from "./card-kpi";
import { User2Icon } from "lucide-react";

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
                title="Clientes"
                icon={<User2Icon />}
                value="13"
                observation="+10% from last month"
                backgroundColor="bg-blue-800"
            />

            <CardKpi 
                title="Clientes"
                icon={<User2Icon />}
                value="13"
                observation="+10% from last month"
                backgroundColor="bg-green-800"
            />

            <CardKpi 
                title="Clientes"
                icon={<User2Icon />}
                value="13"
                observation="+10% from last month"
                backgroundColor="bg-red-800"
            />
        </div>
    )
}