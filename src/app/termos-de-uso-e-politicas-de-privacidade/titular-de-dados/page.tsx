import Link from 'next/link';
import TitularForm from './TitularForm';

export default function TitularPage() {
    return (
        <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="border-b border-gray-700 pb-8">
                    <Link href="/termos-de-uso-e-politicas-de-privacidade" className="text-primary hover:text-opacity-80 font-medium mb-4 inline-block transition-colors">
                        &larr; Voltar para Termos e Políticas
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mt-2 font-serif">
                        Acesso à Informação: Titular de Dados
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Exerça seus direitos sobre seus dados pessoais de forma simples e transparente.
                    </p>
                </div>

                <div className="space-y-6 text-gray-200">
                    <p>
                        Na Mentto, valorizamos sua privacidade e transparência. Como titular de dados pessoais, você possui direitos garantidos pela Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta página foi criada para facilitar o exercício desses direitos.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 font-serif">Seus Direitos</h3>
                    <p>
                        Você pode solicitar a qualquer momento:
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 mt-6">
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Acesso aos Dados</h4>
                            <p className="text-sm text-gray-300">Confirmação da existência de tratamento e acesso aos dados que possuímos sobre você.</p>
                        </div>
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Correção de Dados</h4>
                            <p className="text-sm text-gray-300">Correção de dados incompletos, inexatos ou desatualizados.</p>
                        </div>
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Anonimização, Bloqueio ou Eliminação</h4>
                            <p className="text-sm text-gray-300">De dados desnecessários, excessivos ou tratados em desconformidade com a lei.</p>
                        </div>
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Portabilidade</h4>
                            <p className="text-sm text-gray-300">Portabilidade dos dados a outro fornecedor de serviço ou produto.</p>
                        </div>
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Informação sobre Compartilhamento</h4>
                            <p className="text-sm text-gray-300">Informação das entidades com as quais realizamos uso compartilhado de dados.</p>
                        </div>
                        <div className="bg-tertiary p-6 rounded-lg border border-gray-700">
                            <h4 className="font-bold text-white mb-2 font-serif">Revogação do Consentimento</h4>
                            <p className="text-sm text-gray-300">Revogação do consentimento, nos termos da lei.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-10 font-serif">Como Solicitar</h3>
                    <p>
                        Para exercer qualquer um dos seus direitos, ou caso tenha dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO).
                    </p>
                    <p>
                        Sua solicitação será analisada e respondida dentro dos prazos legais estabelecidos.
                    </p>
                </div>

                <TitularForm />
            </div>
        </main>
    );
}
