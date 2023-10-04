import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Signup = () => {
    const schema = z.object({
        name: z.string().nonempty(),
        email: z.string().email("Digite um endereço de email válido").nonempty("O email é obrigatório"),
        password: z.string().min(6, "A senha deve ter ao menos 6 caractéres.").nonempty("A senha deve ser preenchida.")
    });

    const { handleSubmit, control, reset, formState: { errors }, setError } = useForm({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('/signup', data);
            console.log(response);
            reset();
        } catch (error) {
            console.error('Erro', error);
            if (error.response && error.response.status === 422) {
                const laravelErrors = error.response.data.errors;
                for (const field in laravelErrors) {
                    setError(field, {
                        type: "manual",
                        message: laravelErrors[field][0],
                    });
                }
            } else {
                console.error('erro doido', error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-green-600 mb-4">Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="Nome"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            />
                        )}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            />
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                placeholder="Senha"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            />
                        )}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>
                <div>
                    <button type="submit" className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
