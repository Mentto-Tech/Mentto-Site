"use client";

import { useState } from "react";
import { submitIncidenteForm } from "./action";

export default function IncidenteForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(event.currentTarget);
        const result = await submitIncidenteForm(formData);

        setLoading(false);
        if (result.success) {
            setMessage({ type: "success", text: result.message });
            (event.target as HTMLFormElement).reset();
        } else {
            setMessage({ type: "error", text: result.message });
        }
    }

    return (
        <div className="bg-tertiary border border-gray-700 rounded-xl p-8 shadow-sm mt-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif text-center">Comunicar Incidente</h3>
            <p className="text-gray-300 mb-6 text-center">
                Utilize o formulário abaixo para reportar um incidente de segurança ou suspeita de violação de dados.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">

                {/* Seção 1: Informações Básicas */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Informações do Notificante</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail *</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                        </div>
                        <div>
                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-300">Telefone (DDD) *</label>
                            <input type="text" name="telefone" id="telefone" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="notificante_encarregado_de_dados" className="block text-sm font-medium text-gray-300">O notificante, em sendo pessoa jurídica, é encarregado de dados? *</label>
                            <p className="text-xs text-gray-400 mb-1">O DPO (Data Protection Officer) tem a função de ser o canal de comunicação entre a empresa, a ANPD e o titular dos dados.</p>
                            <textarea name="notificante_encarregado_de_dados" id="notificante_encarregado_de_dados" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                        </div>
                        <div>
                            <label htmlFor="nome_razao_social" className="block text-sm font-medium text-gray-300">Dados do notificante: (Nome ou Razão Social) *</label>
                            <input type="text" name="nome_razao_social" id="nome_razao_social" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="cpf_cnpj" className="block text-sm font-medium text-gray-300">CPF/CNPJ *</label>
                            <input type="text" name="cpf_cnpj" id="cpf_cnpj" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Qual a natureza da Organização ou pessoa notificante? *</label>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input id="natureza_publica" name="natureza_da_organizacao" type="radio" value="pública" required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                    <label htmlFor="natureza_publica" className="ml-3 block text-sm font-medium text-gray-300">pública</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="natureza_privada" name="natureza_da_organizacao" type="radio" value="privada" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                    <label htmlFor="natureza_privada" className="ml-3 block text-sm font-medium text-gray-300">privada</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Agente de Tratamento. O notificante é:</label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input id="agente_controlador" name="agente_de_tratamento" type="radio" value="Controlador de Dados" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="agente_controlador" className="ml-3 block text-sm font-medium text-gray-300">Controlador de Dados (coletou diretamente)</label>
                            </div>
                            <div className="flex items-center">
                                <input id="agente_operador" name="agente_de_tratamento" type="radio" value="Operador de dados pessoais" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="agente_operador" className="ml-3 block text-sm font-medium text-gray-300">Operador de dados pessoais (acessou/tratou sem coletar diretamente)</label>
                            </div>
                            <div className="flex items-center">
                                <input id="agente_nenhum" name="agente_de_tratamento" type="radio" value="Nenhuma das opções anteriores" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="agente_nenhum" className="ml-3 block text-sm font-medium text-gray-300">Nenhuma das opções anteriores</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="comunicacao_do_incidente" className="block text-sm font-medium text-gray-300">Se o notificante é operador de dados, informar se já houve comunicação do incidente ao Controlador de Dados: *</label>
                        <textarea name="comunicacao_do_incidente" id="comunicacao_do_incidente" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                </div>

                {/* Seção 2: Detalhes do Incidente */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Detalhes do Incidente</h4>

                    <div>
                        <label htmlFor="incidente_de_seguranca" className="block text-sm font-medium text-gray-300">Incidente de segurança (Descreva de forma resumida) *</label>
                        <textarea name="incidente_de_seguranca" id="incidente_de_seguranca" required rows={3} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Quando o Incidente Ocorreu? *</label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input id="quando_nao_conhecimento" name="quando_ocorreu" type="radio" value="Não tenho conhecimento" required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="quando_nao_conhecimento" className="ml-3 block text-sm font-medium text-gray-300">Não tenho conhecimento</label>
                            </div>
                            <div className="flex items-center">
                                <input id="quando_nao_certeza" name="quando_ocorreu" type="radio" value="Não tenho certeza" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="quando_nao_certeza" className="ml-3 block text-sm font-medium text-gray-300">Não tenho certeza</label>
                            </div>
                            <div className="flex items-center">
                                <input id="quando_informado" name="quando_ocorreu" type="radio" value="Data e hora informados no item seguinte" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="quando_informado" className="ml-3 block text-sm font-medium text-gray-300">Data e hora informados no item seguinte</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="data_incidente" className="block text-sm font-medium text-gray-300">Data e hora do incidente:</label>
                            <input type="text" name="data_incidente" id="data_incidente" placeholder="DD/MM/AAAA HH:mm" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Tipo de Comunicação:</label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input id="tipo_completa" name="tipo_de_comunicacao" type="radio" value="Completa" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="tipo_completa" className="ml-3 block text-sm font-medium text-gray-300">Completa (incidente nas instalações da MENTTO)</label>
                            </div>
                            <div className="flex items-center">
                                <input id="tipo_parcial" name="tipo_de_comunicacao" type="radio" value="Parcial" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="tipo_parcial" className="ml-3 block text-sm font-medium text-gray-300">Parcial (ambiente externo, mas envolve dados da MENTTO)</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Critério para a comunicação:</label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input id="criterio_risco" name="criterio_para_comunicacao" type="checkbox" value="O incidente de segurança pode acarretar risco ou dano relevante aos titulares." className="focus:ring-primary h-4 w-4 text-primary border-gray-700 rounded bg-gray-800" />
                                <label htmlFor="criterio_risco" className="ml-3 block text-sm font-medium text-gray-300">O incidente de segurança pode acarretar risco ou dano relevante aos titulares.</label>
                            </div>
                            <div className="flex items-center">
                                <input id="criterio_incerteza" name="criterio_para_comunicacao" type="checkbox" value="Não tenho certeza sobre o nível de risco do incidente de segurança." className="focus:ring-primary h-4 w-4 text-primary border-gray-700 rounded bg-gray-800" />
                                <label htmlFor="criterio_incerteza" className="ml-3 block text-sm font-medium text-gray-300">Não tenho certeza sobre o nível de risco do incidente de segurança.</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="organizacao_envolvida" className="block text-sm font-medium text-gray-300">O notificante sabe informar se a organização envolvida no incidente teve ciência do mesmo? *</label>
                        <input type="text" name="organizacao_envolvida" id="organizacao_envolvida" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                    </div>
                    <div>
                        <label htmlFor="organizacao_ciente" className="block text-sm font-medium text-gray-300">O notificante sabe informar como a organização teve ciência do incidente?</label>
                        <input type="text" name="organizacao_ciente" id="organizacao_ciente" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                    </div>
                    <div>
                        <label htmlFor="justificativa" className="block text-sm font-medium text-gray-300">Justificativa se a comunicação não foi em 2 dias úteis: *</label>
                        <input type="text" name="justificativa" id="justificativa" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                    </div>
                    <div>
                        <label htmlFor="justificativa_2" className="block text-sm font-medium text-gray-300">Justificativa se a comunicação não foi imediata:</label>
                        <input type="text" name="justificativa_2" id="justificativa_2" className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                    </div>
                </div>

                {/* Seção 3: Impacto e Dados Afetados */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Impacto e Dados Afetados</h4>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Qual a natureza dos dados pessoais afetados pelo incidente?</label>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["raça/etnia", "religião", "opinião política", "filiação a sindicato", "Filiação a organização de caráter religioso, filosófico ou político", "saúde", "vida sexual", "gênero", "biométrico", "Dado de comprovação de identidade oficial (RG, CPF, CNH)", "dados financeiros", "Nomes de usuário ou senhas", "dados de geolocalização", "Outro"].map((option) => (
                                <div key={option} className="flex items-start">
                                    <input id={`natureza_${option.replace(/\s+/g, '_')}`} name="natureza_dos_dados" type="checkbox" value={option} className="focus:ring-primary h-4 w-4 text-primary border-gray-700 rounded bg-gray-800 mt-1" />
                                    <label htmlFor={`natureza_${option.replace(/\s+/g, '_')}`} className="ml-2 block text-sm font-medium text-gray-300">{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="quantidade_de_afetados" className="block text-sm font-medium text-gray-300">Qual a quantidade de titulares afetados? *</label>
                        <input type="text" name="quantidade_de_afetados" id="quantidade_de_afetados" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Qual a categoria de titulares afetados? *</label>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["Funcionários", "Prestadores de Serviço", "Clientes", "Consumidores", "Usuários", "Pacientes de serviços de saúde", "crianças e/ou adolescentes", "Outros"].map((option) => (
                                <div key={option} className="flex items-center">
                                    <input id={`categoria_${option.replace(/\s+/g, '_')}`} name="categoria_dos_afetados" type="radio" value={option} required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                    <label htmlFor={`categoria_${option.replace(/\s+/g, '_')}`} className="ml-3 block text-sm font-medium text-gray-300">{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="consequencias_provaveis" className="block text-sm font-medium text-gray-300">Quais as prováveis consequências do incidente de segurança para os titulares afetados?</label>
                        <textarea name="consequencias_provaveis" id="consequencias_provaveis" rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="consequencias_transfronteiricas" className="block text-sm font-medium text-gray-300">O incidente pode trazer consequências transfronteiriças?</label>
                        <textarea name="consequencias_transfronteiricas" id="consequencias_transfronteiricas" rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                </div>

                {/* Seção 4: Medidas e Comunicação */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Medidas e Comunicação</h4>

                    <div>
                        <label htmlFor="medidas_tomadas" className="block text-sm font-medium text-gray-300">Medidas para prevenir a ocorrência do incidente *</label>
                        <textarea name="medidas_tomadas" id="medidas_tomadas" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="medidas_tomadas_apos" className="block text-sm font-medium text-gray-300">Medidas tomadas após a ciência do incidente *</label>
                        <textarea name="medidas_tomadas_apos" id="medidas_tomadas_apos" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="medidas_tomadas_reverter" className="block text-sm font-medium text-gray-300">Medidas para reverter ou mitigar os efeitos *</label>
                        <textarea name="medidas_tomadas_reverter" id="medidas_tomadas_reverter" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="fierelatorio_ripd" className="block text-sm font-medium text-gray-300">Realizou relatório de impacto (RIPD)? *</label>
                        <textarea name="fierelatorio_ripd" id="fierelatorio_ripd" required rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Os titulares foram comunicados sobre o incidente?</label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input id="comunicados_sim" name="titulares_comunicados" type="radio" value="Sim" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="comunicados_sim" className="ml-3 block text-sm font-medium text-gray-300">Sim</label>
                            </div>
                            <div className="flex items-center">
                                <input id="comunicados_nao" name="titulares_comunicados" type="radio" value="Não" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="comunicados_nao" className="ml-3 block text-sm font-medium text-gray-300">Não</label>
                            </div>
                            <div className="flex items-center">
                                <input id="comunicados_nao_sei" name="titulares_comunicados" type="radio" value="Não sei" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor="comunicados_nao_sei" className="ml-3 block text-sm font-medium text-gray-300">Não sei</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="justificativa_nao_comunicacao" className="block text-sm font-medium text-gray-300">Justificativa (caso não comunicado)</label>
                        <textarea name="justificativa_nao_comunicacao" id="justificativa_nao_comunicacao" rows={2} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors"
                    >
                        {loading ? "Enviando..." : "Enviar Comunicação de Incidente"}
                    </button>
                </div>

                {message && (
                    <div className={`mt-4 p-4 rounded-md ${message.type === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                        {message.text}
                    </div>
                )}
            </form>
        </div>
    );
}
