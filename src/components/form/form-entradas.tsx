"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    data: z
        .string().date(),
    cliente: z
        .string(),
    valor: z
        .string(),
});

export default function FormEntradas() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            data: "",
            cliente: "",
            valor: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Card className="bg-slate-800 border-none">
            <CardHeader>
                <CardTitle className="text-slate-300 font-bold text-3xl">
                    Cadastro de Entradas
                </CardTitle>
                <CardDescription className="text-slate-500 text-xs">
                    Digite os dados para cadastro da entrada.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="data"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Data
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            className="text-slate-200"
                                            placeholder="Seelcione a data"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cliente"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Cliente
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="text-slate-200"
                                            placeholder="Escolha o cliente"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="valor"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Valor
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="text-slate-200"
                                            placeholder="Digite o valor"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="" type="submit">
                            Cadastrar{" "}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
