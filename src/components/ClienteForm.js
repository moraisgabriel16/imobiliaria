// src/components/ClienteForm.js
import React, { useState } from 'react';
import { createCliente } from '../services/api';

function ClienteForm() {
    const [formData, setFormData] = useState({
        cpf: '',
        nome: '',
        dataNascimento: '',
        telefonePrincipal: '',
        telefoneSecundario: '',
        email: '',
        enderecoImovel: '',
        torre: '',
        apartamento: '',
        tipoImovel: '',
        areaImovel: '',
        quartos: '',
        banheiros: '',
        vagasGaragem: '',
        dataInicioContrato: '',
        dataTerminoContrato: '',
        valorAluguel: '',
        vencimentoBoleto: '',
        formaPagamento: '',
        taxaCondominio: '',
        taxaIptu: '',
        multaAtraso: '',
        indiceReajuste: '',
        tipoCliente: 'Proprietário',
        numeroRegistroEnel: '',
    });
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Formato: XXX.XXX.XXX-XX
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-\d{4}$/;

        if (!cpfRegex.test(formData.cpf)) {
            formErrors.cpf = 'CPF inválido. Use o formato XXX.XXX.XXX-XX.';
        }

        if (formData.email && !emailRegex.test(formData.email)) {
            formErrors.email = 'Email inválido.';
        }

        if (!telefoneRegex.test(formData.telefonePrincipal)) {
            formErrors.telefonePrincipal = 'Telefone principal inválido. Use o formato (XX) XXXXX-XXXX.';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const response = await createCliente(formData);
            if (response) {
                setStatus('success');
                setFormData({
                    cpf: '',
                    nome: '',
                    dataNascimento: '',
                    telefonePrincipal: '',
                    telefoneSecundario: '',
                    email: '',
                    enderecoImovel: '',
                    torre: '',
                    apartamento: '',
                    tipoImovel: '',
                    areaImovel: '',
                    quartos: '',
                    banheiros: '',
                    vagasGaragem: '',
                    dataInicioContrato: '',
                    dataTerminoContrato: '',
                    valorAluguel: '',
                    vencimentoBoleto: '',
                    formaPagamento: '',
                    taxaCondominio: '',
                    taxaIptu: '',
                    multaAtraso: '',
                    indiceReajuste: '',
                    tipoCliente: 'Proprietário',
                    numeroRegistroEnel: '',
                });
            } else {
                setStatus('error');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Cadastro de Cliente</h2>
            {status === 'success' && <div className="alert alert-success">Cliente cadastrado com sucesso!</div>}
            {status === 'error' && <div className="alert alert-danger">Erro ao cadastrar cliente.</div>}
            <form onSubmit={handleSubmit}>
                <h5>Informações Pessoais</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">CPF</label>
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.cpf && <div className="invalid-feedback">{errors.cpf}</div>}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Nome Completo</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Data de Nascimento</label>
                        <input
                            type="date"
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Telefone Principal</label>
                        <input
                            type="text"
                            name="telefonePrincipal"
                            value={formData.telefonePrincipal}
                            onChange={handleChange}
                            className={`form-control ${errors.telefonePrincipal ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.telefonePrincipal && <div className="invalid-feedback">{errors.telefonePrincipal}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Telefone Secundário</label>
                        <input
                            type="text"
                            name="telefoneSecundario"
                            value={formData.telefoneSecundario}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Tipo de Cliente</label>
                        <select
                            name="tipoCliente"
                            value={formData.tipoCliente}
                            onChange={handleChange}
                            className="form-control"
                        >
                            <option value="Proprietário">Proprietário</option>
                            <option value="Inquilino">Inquilino</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Número de Registro da Enel</label>
                        <input
                            type="text"
                            name="numeroRegistroEnel"
                            value={formData.numeroRegistroEnel}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <h5>Informações do Imóvel</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Endereço do Imóvel</label>
                        <input
                            type="text"
                            name="enderecoImovel"
                            value={formData.enderecoImovel}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Torre</label>
                        <input
                            type="text"
                            name="torre"
                            value={formData.torre}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Apartamento / Unidade</label>
                        <input
                            type="text"
                            name="apartamento"
                            value={formData.apartamento}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Área (m²)</label>
                        <input
                            type="text"
                            name="areaImovel"
                            value={formData.areaImovel}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                {/* Continue a adicionar todos os campos restantes aqui para completar o formulário */}
                <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
            </form>
        </div>
    );
}

export default ClienteForm;
