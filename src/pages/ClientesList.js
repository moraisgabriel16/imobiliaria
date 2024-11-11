// src/pages/ClientesList.js
import React, { useEffect, useState } from 'react';
import { getClientes } from '../services/api';
import { Link } from 'react-router-dom';

function ClientesList() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const loadClientes = async () => {
            const data = await getClientes();
            setClientes(data);
        };
        loadClientes();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Listagem de Clientes</h2>
            {clientes.length > 0 ? (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.cpf}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>
                                    <Link to={`/clientes/${cliente.cpf}`} className="btn btn-info btn-sm">
                                        Ver Detalhes
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">Nenhum cliente encontrado.</p>
            )}
        </div>
    );
}

export default ClientesList;
