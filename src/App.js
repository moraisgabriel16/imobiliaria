// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ClientesList from './pages/ClientesList';
import ClienteDetails from './pages/ClienteDetails';
import ClienteForm from './components/ClienteForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<ClientesList />} />
                <Route path="/clientes/:cpf" element={<ClienteDetails />} /> {/* Rota para detalhes do cliente */}
                <Route path="/cadastro-cliente" element={<ClienteForm />} />
            </Routes>
        </Router>
    );
}

export default App;
