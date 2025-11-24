import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                            Aceleramos a Inovação, <br className="hidden lg:block" />
                            da Estratégia à Entrega
                        </h1>

                        <h2 className="text-lg md:text-xl text-gray-200 font-sans leading-relaxed max-w-2xl">
                            Combinamos método, tecnologia, equipes de alta performance e propósito
                            para ajudar sua organização a transformar desafios em resultados reais.
                        </h2>

                        <div className="pt-4">
                            <Link
                                href="#contact"
                                className="inline-block bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1"
                            >
                                Fale com um especialista
                            </Link>
                        </div>
                    </div>

                    {/* Image/Illustration */}
                    <div className="flex-1 w-full relative">
                        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                            {/* Using the original image URL. In a real project, this should be a local asset. */}
                            <Image
                                src="https://i0.wp.com/mentto.com.br/wp-content/uploads/elementor/thumbs/Ilustracao-2-ra9k5hedovggtdelukj54ezx0g7ff8tp0yv5g19hqm.png?w=640&ssl=1"
                                alt="Ilustração de Inovação"
                                fill
                                className="object-contain"
                                priority
                                unoptimized // Since it's an external URL not in next.config.js yet
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
