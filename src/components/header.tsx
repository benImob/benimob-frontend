"use client"

import Link from "next/link"
import { useState } from "react"
import { FaHome, FaPlus, FaUsers, FaSearch, FaBell, FaUser } from "react-icons/fa" 


export function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    return (
        <header className="bg-white text-gray-800 p-2 border-b flex flex-col items-center gap-3">
        <div className="flex w-full gap-8 max-w-2xl items-center">
        <h1 className="p-2 font-bold text-2xl text-blue-600">Ben.Imob</h1>
        <div className="relative justify-between">
            <input 
                className="border rounded-3xl w-70 py-2 px-4 " 
                type="text" 
                placeholder="Busca" 
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-linear-to-r from-blue-600 to-blue-300 hover:bg-blue-300 p-2 rounded-full cursor-pointer">
                <FaSearch size={15} />
            </button>
            <button className="absolute left-140 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600 p-2">
                <FaBell size={15} />
            </button>
            <div className="absolute left-150 top-1/2 -translate-y-1/2 ">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 p-4 cursor-pointer">
                    <FaUser size={20} />
                    <span className="text-sm whitespace-nowrap">Yago Ben</span>
                </button>
                {isProfileOpen && (
                    <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-9">
                        <button className="w-full text-left px-3 py-5 hover:bg-blue-100 text-sm">
                            Editar Perfil
                        </button>
                        <button className="w-full text-left px-3 py-5 hover:bg-blue-100 text-sm border-t border-gray-300">
                            Acessar Conta
                        </button>
                    </div>
                )}
            </div>
        </div>
        </div>

    
    
    <nav className="py-4 w-full max-w-2xl flex justify-start">
    <ul className="">
        <li className="inline-block px-10 py-2 bg-linear-to-r from-blue-600 to-blue-300 text-white cursor-pointer hover:from-blue-700 hover:to-blue-400 rounded mr-2">
            <Link href="/Busca" className="text-white no-underline flex items-center">
                <FaHome className="mr-2" size={15} /> Inicio
            </Link>
        </li>
        <li className="inline-block px-10 py-2 bg-linear-to-r from-blue-600 to-blue-300 text-white cursor-pointer hover:from-blue-700 hover:to-blue-400 rounded mr-2">
            <Link href="/novo-cadastro" className="text-white no-underline flex items-center">
                <FaPlus className="mr-2" size={15} /> Novo Cadastro
            </Link>
        </li>
        <li className="inline-block px-10 py-2 bg-linear-to-r from-blue-600 to-blue-300 text-white cursor-pointer hover:from-blue-700 hover:to-blue-400 rounded">
            <Link href="/gestao-leads" className="text-white no-underline flex items-center">
                <FaUsers className="mr-2" size={15} /> Gestão de Leads
            </Link>
        </li>
    </ul>
    </nav>
        </header>
    )
}