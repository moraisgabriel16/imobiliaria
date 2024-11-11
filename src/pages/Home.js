// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Sistema de Gestão de Clientes e Imóveis</h1>
            <Link to="/clientes" className="btn btn-primary mx-2">Ver Clientes</Link>
            <Link to="/cadastro-cliente" className="btn btn-secondary mx-2">Cadastrar Cliente</Link>
        </div>
    );
}

export default Home;
