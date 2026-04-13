"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function NovoCadastro() {
  const [showDetails, setShowDetails] = useState({
    name: true,
    email: false,
    phone: false,

    cep: false,
    rua: false,
    numero: false,
  });

  const toggleDetails = (section: keyof typeof showDetails) => {
    setShowDetails((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="p-4 bg-white m-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Novo Cadastro</h2>
      {/*Seção de dados pessoais do cliente*/}
      <form className="max-w-2x1 mx-auto">
        <button
          type="button"
          onClick={() => toggleDetails("name")}
          className="w-full flex items-center justify-between p-3  bg-gray-50 hover:bg-gray-100 rounded-t-lg"
        >
          <h3 className="text-lg font-semibold">Dados do Proprietário</h3>
          {showDetails.name ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {showDetails.name && (
          <div className="mb-4 py-3 space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Nome Completo
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                type="text"
                id="name"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                type="email"
                id="email"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="phone"
              >
                Telefone
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                type="tel"
                id="phone"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
                <label htmlFor="Cadastro" className=" text-gray-700 text-sm font-medium mb-2">Tipo de Cadastro</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  id="Cadastro"
                >
                  <option value="individual">Captção externa</option>
                  <option value="juridico">Atendimento presencial</option>
                </select>
              </div>

            <button
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm mt-2"
              type="submit"
            >
              Salvar
            </button>
          </div>
        )}
        {/*Locacalização do imóvel do proprietário */}

        <button
          type="button"
          onClick={() => toggleDetails("cep")}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
        >
          <h3 className="text-lg font-semibold">Localização do Imóvel</h3>
          {showDetails.cep ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {showDetails.cep && (
            <div className="mb-4 py-3 space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="cep"
                >
                  Cep
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  type="text"
                  id="cep"
                  placeholder="Digite o Cep"
                />

              </div>
              <div>
                <label htmlFor="Rua" className=" text-gray-700 text-sm font-medium mb-2">Rua</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  type="text"
                  id="Rua"
                  placeholder="Digite o nome da rua"
                />
              </div>
              <div>
                <label htmlFor="Bairro">Bairro</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  type="text"
                  id="Bairro"
                  placeholder="Digite o nome do bairro"
                />
              </div>
            </div>
        )}
      </form>
    </div>
  );
}
