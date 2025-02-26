import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowDownRightIcon, CircleDollarSignIcon, TrendingUpIcon, Users2Icon } from "lucide-react"
import { DashboardCard } from "@/components/dashboard/page-card"

export function TabsLinks() {
  return (
    <Tabs defaultValue="dashboard" className="w-full mt-6">
      
      <TabsList className="grid w-full grid-cols-4 bg-slate-800 mb-6">
        <TabsTrigger value="dashboard">Dashboard <span className="ml-2"><TrendingUpIcon size={14}/></span></TabsTrigger>
        <TabsTrigger value="cliente">Clientes<span className="ml-2"><Users2Icon size={14}/></span></TabsTrigger>
        <TabsTrigger value="entradas">Entradas<span className="ml-2"><CircleDollarSignIcon size={14}/></span></TabsTrigger>
        <TabsTrigger value="saidas">Saídas<span className="ml-2"><ArrowDownRightIcon size={14}/></span></TabsTrigger>
      </TabsList>
      
      <TabsContent value="dashboard">
        <Card className="bg-slate-800 border-slate-800">
          <CardContent className="bg-slate-800">
            <DashboardCard />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cliente">
        <Card className="bg-slate-800 border-slate-800">
          <CardContent className="bg-slate-800">
            <div>Page Cliente</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="entradas">
        <Card className="bg-slate-800 border-slate-800">
          <CardContent className="bg-slate-800">
            <div>Page Entradas</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="saidas">
        <Card className="bg-slate-800 border-slate-800">
          <CardContent className="bg-slate-800">
            <div>Page Saídas</div>
          </CardContent>
        </Card>
      </TabsContent>
      
    </Tabs>
  )
}
