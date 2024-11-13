// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ClientesList from './pages/ClientesList';
import ClienteDetails from './pages/ClienteDetails';
import ClienteForm from './components/ClienteForm';
import Navbar from './components/Navbar'; // Importar o Navbar

function App() {
    return (
        <Router basename="/imobiliaria">
            <Navbar />  {/* Adiciona o Navbar para navegação persistente */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} /> {/* Redireciona a rota base para a Home */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/clientes" element={<ClientesList />} />
                    <Route path="/clientes/:cpf" element={<ClienteDetails />} />
                    <Route path="/cadastro-cliente" element={<ClienteForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
