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
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            });
        } else {
            setStatus('error');
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
                        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Nome Completo</label>
                        <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="form-control" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Data de Nascimento</label>
                        <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Telefone Principal</label>
                        <input type="text" name="telefonePrincipal" value={formData.telefonePrincipal} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Telefone Secundário</label>
                        <input type="text" name="telefoneSecundario" value={formData.telefoneSecundario} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <h5>Informações do Imóvel</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Endereço do Imóvel</label>
                        <input type="text" name="enderecoImovel" value={formData.enderecoImovel} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Torre</label>
                        <input type="text" name="torre" value={formData.torre} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Apartamento / Unidade</label>
                        <input type="text" name="apartamento" value={formData.apartamento} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-3">
                        <label className="form-label">Tipo de Imóvel</label>
                        <input type="text" name="tipoImovel" value={formData.tipoImovel} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Área (m²)</label>
                        <input type="number" name="areaImovel" value={formData.areaImovel} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Número de Quartos</label>
                        <input type="number" name="quartos" value={formData.quartos} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Número de Banheiros</label>
                        <input type="number" name="banheiros" value={formData.banheiros} onChange={handleChange} className="form-control" />
                    </div>
                </div>

                <h5>Informações do Contrato</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Data de Início do Contrato</label>
                        <input type="date" name="dataInicioContrato" value={formData.dataInicioContrato} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Data de Término do Contrato</label>
                        <input type="date" name="dataTerminoContrato" value={formData.dataTerminoContrato} onChange={handleChange} className="form-control" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Valor do Aluguel Mensal</label>
                        <input type="number" name="valorAluguel" value={formData.valorAluguel} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Data de Vencimento do Boleto</label>
                        <input type="number" name="vencimentoBoleto" value={formData.vencimentoBoleto} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Forma de Pagamento</label>
                        <input type="text" name="formaPagamento" value={formData.formaPagamento} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
            </form>
        </div>
    );
}

export default ClienteForm;
