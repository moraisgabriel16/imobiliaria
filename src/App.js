// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ClientesList from './pages/ClientesList';
import ClienteDetails from './pages/ClienteDetails';
import ClienteForm from './components/ClienteForm';
import Navbar from './components/Navbar'; // Importar o Navbar
import Login from './components/Login'; // Importar o Login

function App() {
    return (
        <Router basename="/imobiliaria">
            <AppContent /> {/* Novo componente para controlar o conteúdo da aplicação */}
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    // Verifica se está na página de login, caso esteja não renderiza a Navbar
    const isLoginPage = location.pathname === '/login';

    return (
        <>
            {!isLoginPage && <Navbar />}  {/* Renderiza a Navbar apenas se não estiver na rota de login */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} /> {/* Redireciona a rota base para o Login */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/clientes" element={<ClientesList />} />
                    <Route path="/clientes/:cpf" element={<ClienteDetails />} />
                    <Route path="/cadastro-cliente" element={<ClienteForm />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
