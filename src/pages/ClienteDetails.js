// src/pages/ClienteDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClienteByCpf, updateCliente, deleteCliente } from '../services/api';

function ClienteDetails() {
    const { cpf } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const loadCliente = async () => {
            const data = await getClienteByCpf(cpf);
            setCliente(data);
            setFormData(data);
        };
        loadCliente();
    }, [cpf]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async () => {
        const success = await updateCliente(cpf, formData);
        if (success) {
            alert('Cliente atualizado com sucesso!');
            setIsEditing(false);
            setCliente(formData);
        } else {
            alert('Erro ao atualizar cliente.');
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm('Tem certeza que deseja excluir este cliente?');
        if (confirmed) {
            const success = await deleteCliente(cpf);
            if (success) {
                alert('Cliente excluído com sucesso!');
                navigate('/clientes');
            } else {
                alert('Erro ao excluir cliente.');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Detalhes do Cliente</h2>
            {cliente ? (
                <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center mb-4">{cliente.nome}</h5>
                        
                        {!isEditing ? (
                            <>
                                <div className="mb-3"><strong>CPF:</strong> {cliente.cpf}</div>
                                <div className="mb-3"><strong>Data de Nascimento:</strong> {cliente.dataNascimento}</div>
                                <div className="mb-3"><strong>Telefone Principal:</strong> {cliente.telefonePrincipal}</div>
                                <div className="mb-3"><strong>Telefone Secundário:</strong> {cliente.telefoneSecundario}</div>
                                <div className="mb-3"><strong>Email:</strong> {cliente.email}</div>
                                
                                <hr />
                                <h5 className="text-center mt-3">Informações do Imóvel</h5>
                                <div className="mb-3"><strong>Endereço:</strong> {cliente.enderecoImovel}</div>
                                <div className="mb-3"><strong>Torre:</strong> {cliente.torre}</div>
                                <div className="mb-3"><strong>Apartamento / Unidade:</strong> {cliente.apartamento}</div>
                                <div className="mb-3"><strong>Tipo de Imóvel:</strong> {cliente.tipoImovel}</div>
                                <div className="mb-3"><strong>Área (m²):</strong> {cliente.areaImovel}</div>
                                <div className="mb-3"><strong>Quartos:</strong> {cliente.quartos}</div>
                                <div className="mb-3"><strong>Banheiros:</strong> {cliente.banheiros}</div>
                                <div className="mb-3"><strong>Vagas de Garagem:</strong> {cliente.vagasGaragem}</div>

                                <hr />
                                <h5 className="text-center mt-3">Informações do Contrato</h5>
                                <div className="mb-3"><strong>Data de Início do Contrato:</strong> {cliente.dataInicioContrato}</div>
                                <div className="mb-3"><strong>Data de Término do Contrato:</strong> {cliente.dataTerminoContrato}</div>
                                <div className="mb-3"><strong>Valor do Aluguel:</strong> {cliente.valorAluguel}</div>
                                <div className="mb-3"><strong>Data de Vencimento do Boleto:</strong> {cliente.vencimentoBoleto}</div>
                                <div className="mb-3"><strong>Forma de Pagamento:</strong> {cliente.formaPagamento}</div>
                                <div className="mb-3"><strong>Taxa de Condomínio:</strong> {cliente.taxaCondominio}</div>
                                <div className="mb-3"><strong>Taxa de IPTU:</strong> {cliente.taxaIptu}</div>
                                <div className="mb-3"><strong>Multa por Atraso:</strong> {cliente.multaAtraso}</div>
                                <div className="mb-3"><strong>Índice de Reajuste:</strong> {cliente.indiceReajuste}</div>
                                
                                <div className="text-center mt-4">
                                    <button onClick={() => setIsEditing(true)} className="btn btn-warning mx-2">Editar</button>
                                    <button onClick={handleDelete} className="btn btn-danger mx-2">Excluir</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Campos editáveis */}
                                <h5>Informações Pessoais</h5>
                                <div className="mb-3">
                                    <label className="form-label">Nome Completo</label>
                                    <input type="text" name="nome" value={formData.nome || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Data de Nascimento</label>
                                    <input type="date" name="dataNascimento" value={formData.dataNascimento || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telefone Principal</label>
                                    <input type="text" name="telefonePrincipal" value={formData.telefonePrincipal || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telefone Secundário</label>
                                    <input type="text" name="telefoneSecundario" value={formData.telefoneSecundario || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="form-control" />
                                </div>
                                
                                <h5>Informações do Imóvel</h5>
                                <div className="mb-3">
                                    <label className="form-label">Endereço</label>
                                    <input type="text" name="enderecoImovel" value={formData.enderecoImovel || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Torre</label>
                                    <input type="text" name="torre" value={formData.torre || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apartamento / Unidade</label>
                                    <input type="text" name="apartamento" value={formData.apartamento || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de Imóvel</label>
                                    <input type="text" name="tipoImovel" value={formData.tipoImovel || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Área (m²)</label>
                                    <input type="number" name="areaImovel" value={formData.areaImovel || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quartos</label>
                                    <input type="number" name="quartos" value={formData.quartos || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Banheiros</label>
                                    <input type="number" name="banheiros" value={formData.banheiros || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Vagas de Garagem</label>
                                    <input type="number" name="vagasGaragem" value={formData.vagasGaragem || ''} onChange={handleChange} className="form-control" />
                                </div>

                                <h5>Informações do Contrato</h5>
                                <div className="mb-3">
                                    <label className="form-label">Data de Início do Contrato</label>
                                    <input type="date" name="dataInicioContrato" value={formData.dataInicioContrato || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Data de Término do Contrato</label>
                                    <input type="date" name="dataTerminoContrato" value={formData.dataTerminoContrato || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Valor do Aluguel</label>
                                    <input type="number" name="valorAluguel" value={formData.valorAluguel || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Data de Vencimento do Boleto</label>
                                    <input type="number" name="vencimentoBoleto" value={formData.vencimentoBoleto || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Forma de Pagamento</label>
                                    <input type="text" name="formaPagamento" value={formData.formaPagamento || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Taxa de Condomínio</label>
                                    <input type="number" name="taxaCondominio" value={formData.taxaCondominio || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Taxa de IPTU</label>
                                    <input type="number" name="taxaIptu" value={formData.taxaIptu || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Multa por Atraso</label>
                                    <input type="number" name="multaAtraso" value={formData.multaAtraso || ''} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Índice de Reajuste</label>
                                    <input type="text" name="indiceReajuste" value={formData.indiceReajuste || ''} onChange={handleChange} className="form-control" />
                                </div>

                                <div className="text-center mt-4">
                                    <button onClick={handleUpdate} className="btn btn-success mx-2">Salvar</button>
                                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary mx-2">Cancelar</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-center">Cliente não encontrado.</p>
            )}
        </div>
    );
}

export default ClienteDetails;
