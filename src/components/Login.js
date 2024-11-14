// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // Defina os emails permitidos
    const allowedEmails = ['adm@seistema.com', 'ale@sistema.com'];

    const handleLogin = (e) => {
        e.preventDefault();

        // Verificar se o email é permitido
        if (allowedEmails.includes(email) && password === '123456') { // A senha aqui é fictícia para demonstrar
            navigate('/home');
        } else {
            setError('Email ou senha inválidos.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Login</h2>
            <div className="card mx-auto p-4" style={{ maxWidth: '400px' }}>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
