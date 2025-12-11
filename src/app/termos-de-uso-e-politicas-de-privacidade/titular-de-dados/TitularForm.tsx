"use client";

import { useState } from "react";
import { submitTitularForm } from "./action";

export default function TitularForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(event.currentTarget);
        const result = await submitTitularForm(formData);

        setLoading(false);
        if (result.success) {
            setMessage({ type: "success", text: result.message });
            (event.target as HTMLFormElement).reset();
        } else {
            setMessage({ type: "error", text: result.message });
        }
    }

    return (
        <div className="bg-tertiary border border-gray-700 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif text-center">Entre em Contato</h3>
            <p className="text-gray-300 mb-6 text-center">
                Preencha o formulário abaixo para enviar sua solicitação diretamente para nossa equipe de privacidade.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail do titular *</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Solicitante *</label>
                    <div className="mt-2 space-y-2">
                        {["Titular de dados pessoais", "Pai/mãe", "Responsável Legal", "Procurador"].map((option) => (
                            <div key={option} className="flex items-center">
                                <input id={`solicitante_${option.replace(/\s+/g, '_')}`} name="solicitante" type="radio" value={option} required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor={`solicitante_${option.replace(/\s+/g, '_')}`} className="ml-3 block text-sm font-medium text-gray-300">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300">Nome do titular *</label>
                    <input type="text" name="solicitante" id="nome" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                </div>

                <div>
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-300">CPF do titular *</label>
                    <input type="text" name="cpf" id="cpf" required className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Vínculo do Titular com a MENTTO</label>
                    <div className="mt-2 space-y-2">
                        {["Funcionário CLT", "Fornecedor PJ", "Estagiário", "Menor aprendiz", "Participante dos curso e eventos promovidos pela Mentto", "Cliente ou seu representante legal", "Pessoa cuja imagem, voz ou outro dados pessoal aparece em instrumento de divulgação da MENTTO", "Pessoa que realizou cadastro ou enviou mensagem via site", "Outro vínculo que não os acima"].map((option) => (
                            <div key={option} className="flex items-center">
                                <input id={`vinculo_${option.substring(0, 10).replace(/\s+/g, '_')}`} name="vinculo_do_titular" type="radio" value={option} className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                                <label htmlFor={`vinculo_${option.substring(0, 10).replace(/\s+/g, '_')}`} className="ml-3 block text-sm font-medium text-gray-300">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Tipo de Solicitação</label>
                    <div className="mt-2 space-y-2">
                        {["Acesso a dados pessoais tratados", "Anonimização, bloqueio ou eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD", "Confirmação da existência de tratamento de dados pessoais", "Eliminação dos dados pessoais tratados com o consentimento", "Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa", "Revogação do consentimento anteriormente manifestado"].map((option) => (
                            <div key={option} className="flex items-start">
                                <input id={`tipo_${option.substring(0, 10).replace(/\s+/g, '_')}`} name="tipo_de_solicitacao" type="checkbox" value={option} className="focus:ring-primary h-4 w-4 text-primary border-gray-700 rounded bg-gray-800 mt-1" />
                                <label htmlFor={`tipo_${option.substring(0, 10).replace(/\s+/g, '_')}`} className="ml-2 block text-sm font-medium text-gray-300">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="descricao_da_solicitacao" className="block text-sm font-medium text-gray-300">Descrição da Solicitação *</label>
                    <textarea name="descricao_da_solicitacao" id="descricao_da_solicitacao" required rows={4} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Correção de Dados</label>
                    <p className="text-xs text-gray-400 mb-2">Para solicitar correção de dados pessoais incompletos, inexatos ou desatualizados, entre em contato com a área de Atendimento ao Candidato.</p>
                    <div className="flex items-center">
                        <input id="correcao_ciente" name="correcao_dos_dados" type="radio" value="ciente" required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                        <label htmlFor="correcao_ciente" className="ml-3 block text-sm font-medium text-gray-300">Ciente</label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Autorizo contato via whatsapp/telegram *</label>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input id="autorizo_sim" name="autorizo_contato" type="radio" value="sim" required className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                            <label htmlFor="autorizo_sim" className="ml-3 block text-sm font-medium text-gray-300">Sim</label>
                        </div>
                        <div className="flex items-center">
                            <input id="autorizo_nao" name="autorizo_contato" type="radio" value="não, somente por e-mail" className="focus:ring-primary h-4 w-4 text-primary border-gray-700 bg-gray-800" />
                            <label htmlFor="autorizo_nao" className="ml-3 block text-sm font-medium text-gray-300">Não, somente por e-mail</label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors"
                    >
                        {loading ? "Enviando..." : "Enviar Solicitação"}
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
