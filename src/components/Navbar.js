// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Novo arquivo CSS para melhorar os estilos do Navbar

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/imobiliaria">Imobiliária</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/clientes" onClick={() => setIsOpen(false)}>Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro-cliente" onClick={() => setIsOpen(false)}>Cadastrar Cliente</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home" onClick={() => setIsOpen(false)}>Buscar Cliente</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
