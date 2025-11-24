export default function Footer() {
    return (
        <footer className="bg-black/40 text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-serif text-2xl font-bold text-white">
                            Mentto
                        </span>
                        <p className="text-gray-400 text-sm mt-2">
                            Aceleramos a Inovação, da Estratégia à Entrega.
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Mentto. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}
