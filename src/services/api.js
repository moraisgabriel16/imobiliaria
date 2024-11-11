// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://imobiliaria-backend-six.vercel.app/api', // URL do backend
});

// Função para listar todos os clientes
export const getClientes = async () => {
    try {
        const response = await api.get('/clientes');
        return response.data || [];
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return [];
    }
};

// Função para obter detalhes de um cliente pelo CPF
export const getClienteByCpf = async (cpf) => {
    try {
        const response = await api.get(`/clientes/${cpf}`);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return null;
    }
};

// Função para cadastrar um novo cliente
export const createCliente = async (clienteData) => {
    try {
        const response = await api.post('/clientes', clienteData);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        return null;
    }
};

// Função para atualizar os dados de um cliente pelo CPF
export const updateCliente = async (cpf, clienteData) => {
    try {
        const response = await api.put(`/clientes/${cpf}`, clienteData);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        return null;
    }
};

// Função para deletar um cliente pelo CPF
export const deleteCliente = async (cpf) => {
    try {
        const response = await api.delete(`/clientes/${cpf}`);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao deletar cliente:", error);
        return null;
    }
};

export default api;
