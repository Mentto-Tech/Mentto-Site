import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Cpu, TrendingUp, Target, BarChart3, Users, Zap, Hammer } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Features Section - 2 columns */}
      <section id="servicos" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <FeatureCard
            icon={Cpu}
            title="Sistema Inteligente de Gestão de Projetos"
            description="Acelere o desenvolvimento de projetos de inovação minimizando riscos e potencializando resultados."
            linkHref="/modelo-integrado"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Consultoria Estratégica de Inovação"
            description="Impulsione o crescimento do seu negócio com inovação estratégica e equipes de alta performance."
            linkHref="#servicos"
          />
        </div>
      </section>

      {/* Layers Section */}
      <section className="py-24 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Atuamos em todas as <br />
                camadas da sua organização
              </h2>
              <div className="text-gray-200 text-lg leading-relaxed space-y-4">
                <p>
                  Aumentando o valor intangível do seu negócio e impulsionando seus resultados, com:
                </p>
                <ul className="space-y-3 list-disc list-inside marker:text-primary">
                  <li>Direcionamento estratégico do seu negócio</li>
                  <li>Alavancas e atuadores do seu negócio</li>
                  <li>Tração e entrega de resultados</li>
                </ul>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative w-full aspect-square md:aspect-[4/3]">
                {/* Using original image URL */}
                <Image
                  src="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Camadas-ra96uvwpvoald0leiozmk6ssbn5e7att84syq2vtdm.png?w=640&ssl=1"
                  alt="Camadas da Organização"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 6 cards grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Consultorias, palestras e workshops em
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Planejamento Estratégico */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Planejamento Estratégico
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Definição clara de metas e caminhos para gerar impacto real e sustentável.
            </p>
          </div>

          {/* Card 2 - Inovação */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Inovação
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Transformação de ideias em soluções aplicáveis e escaláveis.
            </p>
          </div>

          {/* Card 3 - Liderança */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Liderança
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Capacitação de líderes para conduzir equipes rumo a resultados.
            </p>
          </div>

          {/* Card 4 - Desenvolvimento de Produtos */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Desenvolvimento de Produtos
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Criação de soluções alinhadas às demandas do mercado.
            </p>
          </div>

          {/* Card 5 - Gestão Ágil de Projetos */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Gestão Ágil de Projetos
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Entregas rápidas, eficientes e com foco em valor.
            </p>
          </div>

          {/* Card 6 - Governança */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Governança
            </h3>
            <p className="text-gray-200 text-sm text-center">
              Estrutura e processos para decisões assertivas e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
          Cases de sucesso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1 - Plan360 */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full">
              <Image
                src="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Plan-360-ra96wvciqsk467cj388ozmsirww5816hekkjfzud9y.png?w=640&ssl=1"
                alt="Plan360"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                Marília
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-4">Plan360</h3>
              <p className="text-gray-300 text-sm mb-6">
                Programa de planejamento estratégico voltado para fortalecer as empresas da Cadeia Produtiva Local de Tecnologia da Informação em Marília e região, promovendo capacitação e integração entre empresas, startups e instituições.
              </p>
              <a href="https://cplti.org.br/#plan360" target="_blank" className="text-primary font-bold text-sm hover:underline">
                Saiba mais
              </a>
            </div>
          </div>

          {/* Case 2 - InovaSkill */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full">
              <Image
                src="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Inova-Skill-ra96xpfcthpahq4u7l8r7f79s8rw2chw6pg2sulrcy.png?w=640&ssl=1"
                alt="InovaSkill"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                Pompeia
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-4">InovaSkill</h3>
              <p className="text-gray-300 text-sm mb-6">
                Programa de intraempreendedorismo que conecta estudantes de graduação e empresas da região para desenvolver projetos inovadores, impulsionando a inovação dentro das empresas.
              </p>
              <a href="https://mentto.com.br/programa/inovaskill-2025-empresas" target="_blank" className="text-primary font-bold text-sm hover:underline">
                Saiba mais
              </a>
            </div>
          </div>

          {/* Case 3 - Placeholder for third case */}
          {/* <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-300 text-sm font-semibold">Mais Cases</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-4">Transformação Digital</h3>
              <p className="text-gray-300 text-sm mb-6">
                Conheça outros projetos de sucesso que transformaram estratégia em resultados reais para nossas empresas parceiras.
              </p>
              <a href="#contact" className="text-primary font-bold text-sm hover:underline">
                Saiba mais
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black text-center mb-12">
            Passaram pela Mentto
          </h2>
          <div className="relative w-full">
            <Image
              src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Passaram-pela-Mentto.png?fit=1784%2C465&ssl=1"
              alt="Clientes da Mentto"
              width={1200}
              height={465}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-tertiary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Vamos conversar sobre inovação?
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed">
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
