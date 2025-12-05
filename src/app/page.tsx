import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Cpu, TrendingUp, Presentation, Kanban, Users, Rocket, Landmark, Package } from "lucide-react";
import Image from "next/image";
import CaseCard from "@/components/CaseCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Features Section - 2 columns */}
      <section className="container mx-auto px-4">
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
      <section id="servicos" className="container mx-auto px-4 scroll-mt-32">
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
                <Presentation className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Planejamento Estratégico
            </h3>
            <p className="text-gray-200 text-center mb-6">
              Definição clara de metas e caminhos para gerar impacto real e sustentável.
            </p>
          </div>

          {/* Card 2 - Inovação */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Inovação
            </h3>
            <p className="text-gray-200 text-center mb-6">
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
            <p className="text-gray-200 text-center mb-6">
              Capacitação de líderes para conduzir equipes rumo a resultados.
            </p>
          </div>

          {/* Card 4 - Desenvolvimento de Produtos */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Desenvolvimento de Produtos
            </h3>
            <p className="text-gray-200 text-center mb-6">
              Criação de soluções alinhadas às demandas do mercado.
            </p>
          </div>

          {/* Card 5 - Gestão Ágil de Projetos */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Kanban className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Gestão Ágil de Projetos
            </h3>
            <p className="text-gray-200 text-center mb-6">
              Entregas rápidas, eficientes e com foco em valor.
            </p>
          </div>

          {/* Card 6 - Governança */}
          <div className="group rounded-2xl overflow-hidden bg-tertiary border border-white/10 hover:border-primary/50 transition-all p-6">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Landmark className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 text-center">
              Governança
            </h3>
            <p className="text-gray-200 text-center mb-6">
              Estrutura e processos para decisões assertivas e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Commented Out) */}
      {/*
      <section className="py-24 bg-tertiary relative overflow-hidden">
        /* Background decoration */
        /*
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform origin-top-right pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16">
            O que as pessoas estão dizendo
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
            <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Elvis-Fusco-e1754772724727.jpg"
                alt="Elvis Fusco"
                fill
                className="object-cover rounded-2xl shadow-lg"
                unoptimized
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#083D5F] mb-1">Elvis Fusco</h3>
                <p className="text-gray-500 font-medium">Reitor do Univem e Presidente da Asserti</p>
              </div>

              <blockquote className="text-gray-600 text-lg leading-relaxed italic relative">
                <span className="text-6xl text-primary/20 absolute -top-8 -left-4 font-serif">"</span>
                A Mentto traz uma abordagem única que conecta a estratégia à execução de forma prática. A parceria tem sido fundamental para impulsionar o ecossistema de inovação de Marília e região.
                <span className="text-6xl text-primary/20 absolute -bottom-12 -right-4 font-serif">"</span>
              </blockquote>

              <div className="mt-8 flex justify-center md:justify-start items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Logo-secundario-scaled.png?fit=300%2C68&ssl=1"
                  alt="Logo Parceiro"
                  width={120}
                  height={30}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>

          /* Dots navigation */
          /*
          <div className="flex justify-center gap-3 mt-12">
            <button className="w-3 h-3 rounded-full bg-primary transition-all hover:scale-125"></button>
            <button className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-all"></button>
            <button className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-all"></button>
          </div>
        </div>
      </section>
      */}

      {/* Cases Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white-600 mb-12 text-center">
          Cases de sucesso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <CaseCard
            imageSrc="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Plan-360-ra96wvciqsk467cj388ozmsirww5816hekkjfzud9y.png?w=640&ssl=1"
            imageAlt="Plan360"
            location="Marília"
            title="Plan360"
            description="Programa de planejamento estratégico voltado para fortalecer as empresas da Cadeia Produtiva Local de Tecnologia da Informação em Marília e região, promovendo capacitação e integração entre empresas, startups e instituições."
            linkHref="https://cplti.org.br/#plan360"
          />

          <CaseCard
            imageSrc="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Inova-Skill-ra96xpfcthpahq4u7l8r7f79s8rw2chw6pg2sulrcy.png?w=640&ssl=1"
            imageAlt="InovaSkill"
            location="Pompeia"
            title="InovaSkill"
            description="Programa de intraempreendedorismo que conecta estudantes de graduação e empresas da região para desenvolver projetos inovadores, impulsionando a inovação dentro das empresas."
            linkHref="https://mentto.com.br/programa/inovaskill-2025-empresas"
          />
          {/* Case 3 - Placeholder for third case */}
          {/* <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-300 text-center mb-6 font-semibold">Mais Cases</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-4">Transformação Digital</h3>
              <p className="text-gray-300 text-center mb-6 mb-6">
                Conheça outros projetos de sucesso que transformaram estratégia em resultados reais para nossas empresas parceiras.
              </p>
              <a href="#contact" className="text-primary font-bold text-center mb-6 hover:underline">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Vamos conversar sobre inovação?
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
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
