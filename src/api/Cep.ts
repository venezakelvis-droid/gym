import type React from "react";

export interface CepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: boolean;
}

const CepRequest = async (cep: string, isLoading: any): Promise<CepResponse> => {
    const cleanCep = String(cep).trim().replace(/[^\d]/g, "");
    console.log("cep:", cleanCep);
    
    if (cleanCep.length !== 8) {
        throw new Error("CEP inválido");
    }

    isLoading(true);

    const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`
    );

    if (!response.ok) {
        throw new Error("Erro ao consultar CEP");
    }

    const data: CepResponse = await response.json();

    if (data.erro) {
        throw new Error("CEP não encontrado");
    }

    return data;
};

export default CepRequest;
