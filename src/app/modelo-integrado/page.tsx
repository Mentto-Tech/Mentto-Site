import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import { Target, Users, BarChart, FileText, Rocket } from "lucide-react";
import CaseCard from "@/components/CaseCard";
import ContactForm from "@/components/ContactForm";

export default function ModeloIntegrado() {
    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="py-16 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8 animate-fade-in-up">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                                Acelerando pesquisa e desenvolvimento em ambientes de inovação
                            </h1>
                            <div className="pt-4">
                                <Link
                                    href="#contact"
                                    className="inline-block bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1"
                                >
                                    Fale com um especialista
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Ilustracao-1-ra9k5ja2ogwz1aqll0fr1w10iytvjknfcdpsgt5ufe.png?w=640&ssl=1"
                                    alt="Ilustração Inovação"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Context Section */}
            <section className="bg-tertiary py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                                Apoiamos de forma transversal todos os níveis organizacionais de um projeto de base científica e tecnológica robusta
                            </h3>
                        </div>

                        <div className="flex-1 space-y-6">
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Um dos maiores desafios de projetos com base científica e tecnológica no Brasil é a falta de integração entre academia e mercado. Esses dois universos costumam falar “idiomas” diferentes — de um lado, o foco em publicações científicas; do outro, a busca por retorno sobre investimento.
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Para superar essa barreira, desenvolvemos métodos e frameworks que promovem uma integração fluida entre todos os stakeholders, criando uma linguagem comum que conecta e potencializa os dois mundos.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Section with Vale da Morte */}
            <section className="container mx-auto px-4">
                <div className="space-y-8">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                            Auxiliamos a reduzir o risco do vale da morte
                        </h2>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Aplicamos metodologias ágeis e gestão estratégica para levar sua inovação do laboratório ao mercado com segurança e velocidade.
                        </p>
                    </div>

                    {/* Vale da Morte Chart */}
                    <div className="relative w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 p-6 md:p-8">
                        <Image
                            src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Grafico-vale-da-morte.png?fit=2296%2C1387&ssl=1"
                            alt="Gráfico Vale da Morte"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-contain"
                            unoptimized
                        />
                    </div>

                    {/* Process Cards - 5 columns */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center">
                            Nosso processo de acompanhamento
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {/* Card 1 */}
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <h3 className="font-bold text-white text-xl mb-3">Diálogos Estratégicos</h3>
                                <br></br>
                                <hr className="mb-6" />
                                <p className="text-white-300 text-xs leading-relaxed mb-3">
                                    Mapeamento dos desafios e demandas centrais do projeto, por meio de entrevistas com líderes para compreender o contexto em profundidade.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-secondary rounded-lg p-4 text-center">
                                <h3 className="font-bold text-white text-xl mb-3">Kick-off com todos os envolvidos</h3>
                                <hr className="mb-6" />
                                <p className="text-white-300 text-xs leading-relaxed mb-3">
                                    Apresentação clara e objetiva da cultura organizacional, metodologias, processos e ferramentas que servirão como base para orientar, estruturar e otimizar todas as etapas de execução do projeto.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <h3 className="font-bold text-white text-xl mb-3">Auxílio na construção do direcionamento estratégico</h3>
                                <hr className="mb-6" />
                                <p className="text-white-300 text-xs leading-relaxed mb-3">
                                    Condução de um processo colaborativo para desenvolver o pensamento filosófico e definição metas, indicadores e resultados esperados.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-secondary rounded-lg p-4 text-center">
                                <h3 className="font-bold text-white text-xl mb-3">Acompanhamento da gestão tática e operacional</h3>
                                <hr className="mb-6" />
                                <p className="text-white-300 text-xs leading-relaxed mb-3">
                                    Suporte sistemático do desempenho, com verificação das metas e gestão das atividades em todos os ciclos de entrega.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-gray-800 rounded-lg p-4 text-center">
                                <h3 className="font-bold text-white text-xl mb-3">Facilitação do demonstrativo de resultados para os investidores</h3>
                                <hr className="mb-6" />
                                <p className="text-white-300 text-xs leading-relaxed mb-3">
                                    Criação de relatórios recorrentes com demonstrativos de resultados, aumentando a percepção de valor para os investidores do projeto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cases Section */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white-600 mb-12 text-center">
                    Cases de sucesso
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <CaseCard
                        imageSrc="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/pbis-ra97p4dw5j8d4ab84fv0xi59itnakjc1yefwpdyffq.jpg?w=640&ssl=1"
                        imageAlt="CCD PBIS"
                        location="Campinas"
                        title="CCD PBIS"
                        description="O Núcleo de Pesquisa Orientada a Problemas – Plataforma Biotecnológica Integrada de Ingredientes Saudáveis (NPOP-PBIS) desenvolve ingredientes saudáveis, sustentáveis e inovadores a partir de matérias-primas nacionais, fortalecendo a competitividade da indústria alimentícia brasileira. Criado no âmbito do programa Ciência para o Desenvolvimento da Fapesp, o projeto une universidades, institutos de pesquisa e empresas em modelo de parceria público-privada. Suas quatro linhas de pesquisa exploram tecnologias emergentes e processos biotecnológicos para criar lipídios estruturados, extratos fenólicos, prebióticos, proteínas doces e novas fontes de proteínas vegetais com funcionalidade tecnológica e nutricional."
                        linkHref="https://pbis.org.br/"
                    />

                    <CaseCard
                        imageSrc="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/circula-ra97pn6ny7y3khjx2nzkbdehej2muheoozhmax6jza.jpg?w=640&ssl=1"
                        imageAlt="CCD Circula"
                        location="Campinas"
                        title="CCD Circula"
                        description="O Centro de Ciência para o Desenvolvimento de Soluções para os Resíduos Pós-Consumo: Embalagens e Produtos é uma iniciativa colaborativa dedicada a desenvolver projetos de pesquisa internacionalmente competitivos, com foco na solução de problemas reais e na transferência de conhecimento e resultados para a sociedade e o mercado. Aprovado em junho de 2022 pela Fapesp, o centro recebe cinco anos de apoio financeiro e é liderado pelo Instituto de Tecnologia de Alimentos (Ital), por meio do Cetea. Baseado no modelo da Tríplice Hélice, promove a integração entre governo, institutos de pesquisa, universidades e empresas, fortalecendo a inovação e a sustentabilidade na gestão de resíduos pós-consumo de embalagens e produtos."
                        linkHref="https://ccdcircula.org.br/"
                    />
                </div>
            </section>

            {/* Institutions Section */}
            <section className="bg-white py-8 md:py-12">
                <div className="container mx-auto px-4 text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
                        Aplicação prática em projetos envolvendo estas instituições
                    </h2>
                </div>
                <div className="relative w-full h-64 md:h-[600px]">
                    <Image
                        src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Instituicoes-envolvidas.png?fit=1413%2C624&ssl=1"
                        alt="Instituições Envolvidas"
                        fill
                        className="object-contain px-4"
                        unoptimized
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-tertiary py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                                Vamos conversar sobre inovação?
                            </h2>
                            <p className="text-gray-200 leading-relaxed">
                                Preencha o formulário e descubra como podemos transformar ideias em resultados.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
