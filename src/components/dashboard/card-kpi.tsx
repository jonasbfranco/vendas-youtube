import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type CardProps= {
    title: string
    icon: ReactNode
    value: string
    observation: string
    backgroundColor: string
}
export default function CardKpi(props: CardProps){
    return (
        <Card className={`w-full border-none ${props.backgroundColor}`}>
            <CardHeader>
                <CardTitle className="-mt-3">
                    <div className="flex justify-between items-center">
                        <p className="text-[18px] text-slate-300">{props.title}</p>
                        <p className="text-slate-300 opacity-50">{props.icon}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="-mt-5 -mb-3">
                <div className="flex flex-col justify-start items-start">
                    <div>
                        <p className="text-6xl font-black text-slate-300">{props.value}</p>
                    </div>
                    <div>
                        <p className="text-xs font-light opacity-80 text-slate-400">{props.observation}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}