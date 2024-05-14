'use client'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import SideBarNav from '@/components/SideBarNav/page'

const formSchema = z.object({
    nomeProduto: z.string().min(2, { message: 'O Produto deve ter no mínimo 2 letras' }),
    valor: z.coerce.number().min(1, { message: 'O valor tem que ser no mínimo 1' }),
    categoria: z.string().min(2, { message: 'A Categoria deve ter no mínimo 2 letras' }),
    local: z.string().min(2, { message: 'O local deve ter no mínimo 2 letras ' }),
    quantidade: z.coerce.number().min(1, { message: 'A Quantidade deve ser no mínimo 1 ' }),
    codigo: z.coerce.number().min(1, { message: 'O Codigo deve ser no mínimo 1' }),
    peso: z.coerce.number().min(1, { message: 'O Peso deve ser no mínimo 1 kilo' })
})


const FormProducts = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nomeProduto: "",
            valor: 0,
            categoria: "",
            local: "",
            quantidade: 0,
            codigo: 0,
            peso: 0,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className=' border p-10 space-y-4 justify-center items-center ml-80 '>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col justify-center items-center space-y-2.5 m-auto max-w-64  text-[#34b3e2] ">
                    <div className='space-y-3 '>
                        <FormField
                            control={form.control}
                            name="nomeProduto"
                            render={({ field }) => (
                                <FormItem className='rounded-xl '>
                                    <FormLabel>Nome do Produto</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Nome" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="valor"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>Valor do produto</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Valor" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoria"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>Categoria do produto</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Categoria" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="local"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>Nome do local</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Local" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantidade"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>quantidade</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="quantidade" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="codigo"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>Codigo do Produto</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Codigo" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="peso"
                            render={({ field }) => (
                                <FormItem className='rounded-xl'>
                                    <FormLabel>Peso do Produto</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-xl' placeholder="Peso" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='hover:border-2 '>Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default FormProducts