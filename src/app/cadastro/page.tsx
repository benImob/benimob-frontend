'use client'

import {useState} from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function NovoCadastro() {
    const [showDetails, setShowDetails] = useState({
        name: true,
        email: false,
        phone: false,

        cep: false,
        rua: false,
        numero: false
    });

    const toggleDetails = (section: keyof typeof showDetails) => {
        setShowDetails(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    }
    return (
        <div className="p-4 bg-white m-10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Novo Cadastro</h2>
            {/*Seção de dados pessoais do cliente*/}
            <form className="max-w-md">
                <button
                type="button"
                onClick={() => toggleDetails('name')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
                >
                    <h3 className="text-lg font-semibold">Dados do Proprietário</h3>
                    {showDetails.name ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {showDetails.name && (
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nome Completo</label>
                    <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Digite o nome completo" />    
                
                
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Digite o email" />
                
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefone</label>
                    <input className="w-full px-3 py-2 border rounded" type="tel" id="phone" placeholder="Digite o telefone" />
                
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">Salvar</button>
                </div>
                )}
                {/*Locacalização do imóvel do proprietário */}

                <button
                type="button"
                onClick={() => toggleDetails('cep')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
                >
                    <h3 className="text-lg font-semibold">Localização do Imóvel</h3>
                    {showDetails.cep ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {showDetails.cep && (
                <div>
                   <label className="block text-gray-700 mb-2" htmlFor="name">Cep</label>
                    <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Digite o Cep" />    
                
                
                    <label className="block text-gray-700 mb-2" htmlFor="email">Rua</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Digite a rua" />
                
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Número</label>
                    <input className="w-full px-3 py-2 border rounded" type="tel" id="phone" placeholder="Digite o número" />
                
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">Salvar</button>
                </div>
                )}
            </form>
        </div>
    );
}