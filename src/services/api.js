// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://imobiliaria-backend-eight.vercel.app/api'  // URL do backend em produção
        : 'http://localhost:5000/api'                 // URL do backend local em desenvolvimento
});

// Funções de CRUD usando `api` com a base URL definida dinamicamente
export const getClientes = async () => {
    try {
        const response = await api.get('/clientes');
        return response.data || [];
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return [];
    }
};

export const getClienteByCpf = async (cpf) => {
    try {
        const response = await api.get(`/clientes/${cpf}`);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return null;
    }
};

export const createCliente = async (clienteData) => {
    try {
        const response = await api.post('/clientes', clienteData);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        return null;
    }
};

export const updateCliente = async (cpf, clienteData) => {
    try {
        const response = await api.put(`/clientes/${cpf}`, clienteData);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        return null;
    }
};

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
