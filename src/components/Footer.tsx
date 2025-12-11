import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 pt-16 pb-8 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                    {/* Column 1: Logo & Mission */}
                    <div className="max-w-xs">
                        <Image
                            alt="Mentto logo"
                            className="h-12 mb-6 dark:invert w-auto"
                            src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Logo-secundario-scaled.png?fit=300%2C68&ssl=1"
                            width={300}
                            height={68}
                        />
                        <p className="text-sm leading-relaxed">
                            Nossa missão é impulsionar pessoas e empresas a prosperarem com inovação e estratégia em um mundo em constante transformação.
                        </p>
                    </div>

                    {/* Column 2: Início */}
                    <div className="md:pt-2">
                        <Link
                            href="/"
                            className="font-bold text-[#083D5F] hover:text-primary transition-colors"
                        >
                            Início
                        </Link>
                    </div>

                    {/* Column 3: Modelo Integrado */}
                    <div className="md:pt-2">
                        <Link
                            href="/modelo-integrado"
                            className="font-bold text-[#083D5F] hover:text-primary transition-colors"
                        >
                            Modelo integrado de gestão da inovação
                        </Link>
                    </div>

                    {/* Column 4: Address */}
                    <div className="md:text-right">
                        <h5 className="font-bold text-[#083D5F] dark:text-white mb-6">QG da Mentto</h5>
                        <address className="text-sm not-italic space-y-4">
                            <p>Rua José Antonio Asmar, 427<br />Jardim São Luiz<br />Pompeia/SP<br />CEP 17586-052</p>

                            <div className="space-y-1">
                                <p className="flex items-center justify-end gap-2">
                                    <span className="w-4 h-4 inline-block">📞</span> +55 14 99875-0740
                                </p>
                                <p className="flex items-center justify-end gap-2">
                                    <span className="w-4 h-4 inline-block">📞</span> +55 14 99838-2406
                                </p>
                            </div>

                            <p>queroinovar@mentto.com.br</p>
                        </address>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <Link className="text-[#083D5F] hover:text-primary transition-colors" href="https://www.instagram.com/menttotech/">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.147 0-3.882 1.735-3.882 3.882s1.735 3.882 3.882 3.882 3.882-1.735 3.882-3.882S14.147 8.118 12 8.118zM12 14.167c-1.196 0-2.167-.97-2.167-2.167s.97-2.167 2.167-2.167 2.167.97 2.167 2.167-.97 2.167-2.167 2.167zm4.833-6.428a1.167 1.167 0 100-2.333 1.167 1.167 0 000 2.333z" fillRule="evenodd"></path>
                                </svg>
                            </Link>
                            <Link className="text-[#083D5F] hover:text-primary transition-colors" href="https://www.linkedin.com/company/mentto/">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </Link>
                        </div>

                        {/* Terms */}
                        <div className="text-center">
                            <Link className="text-[#083D5F] font-bold text-sm hover:text-primary transition-colors" href="/termos-de-uso-e-politicas-de-privacidade">
                                Termos de Uso e Políticas de Privacidade
                            </Link>
                        </div>

                        {/* Design By */}
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Design feito por: <span className="font-bold text-gray-700">Mentto</span></p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center border-t border-gray-100 dark:border-gray-800 pt-8">
                        <p className="text-xs text-gray-400">Todos os direitos © reservados a Mentto Educação, Estratégia e Inovação - CNPJ: 33.304.526/0001-14</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
