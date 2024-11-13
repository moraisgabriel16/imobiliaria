// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClienteByCpf } from '../services/api';

function Home() {
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const formatCpf = (value) => {
        value = value.replace(/\D/g, '');
        if (value.length <= 3) {
            return value;
        } else if (value.length <= 6) {
            return value.replace(/(\d{3})(\d+)/, "$1.$2");
        } else if (value.length <= 9) {
            return value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
        } else {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    };

    const handleCpfChange = (e) => {
        setCpf(formatCpf(e.target.value));
    };

    const handleSearch = async () => {
        if (cpf.trim() === '') {
            setError('Por favor, insira um CPF.');
            return;
        }

        setError('');
        const cliente = await getClienteByCpf(cpf);

        if (cliente) {
            navigate(`/clientes/${cpf}`);
        } else {
            setError('Cliente não encontrado.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Sistema de Gestão de Clientes e Imóveis</h2>

            <div className="card mx-auto p-4" style={{ maxWidth: '600px' }}>
                <h4 className="text-center mb-3">Buscar Cliente por CPF</h4>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite o CPF do cliente"
                        value={cpf}
                        onChange={handleCpfChange}
                        maxLength="14"
                    />
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
            </div>
        </div>
    );
}

export default Home;
