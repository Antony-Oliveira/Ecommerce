import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

const Login = () => {

    const {data, setData} = useForm({
        email: '',
        password: ''
    });

    const [ loading, setLoading] = useState(false)

    async function submit(e) {
        console.log(e);
        try {
            setLoading(true);
            const response = await axios.post('/teste', data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }



    }
    return (
        <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-green-600 mb-4">Login</h2>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>
                <div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700"
                    >
                        Entrar
                    </button>
                    {loading ? <p>Loading...</p> : null}
                </div>
            </form>
        </div>
    )
}

export default Login;
