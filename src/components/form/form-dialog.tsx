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
    name: z
        .string()
        .min(2, { message: "O nome tem que ter no minímo 2 caracteres" })
        .max(50),
    whatsapp: z
        .string()
        .min(13, { message: "O numero de whatsapp tem que ter 13 caracteres" })
        .max(50),
    city: z
        .string()
        .min(4, {
            message: "O nome da cidade tem que ter no minímo 4 caracteres",
        })
        .max(50),
});

export default function FormDialog() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            whatsapp: "",
            city: "",
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
                    Cadastro de Cliente
                </CardTitle>
                <CardDescription className="text-slate-500 text-xs">
                    Digite os dados para cadastro do cliente.
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
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Nome
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="text-slate-200"
                                            placeholder="Digite o nome do cliente"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Wahstapp
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="text-slate-200"
                                            type="text"
                                            placeholder="+551199887766"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-0">
                                    <FormLabel className="text-slate-400">
                                        Cidade
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="text-slate-200"
                                            placeholder="Digite o nome da cidade"
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
