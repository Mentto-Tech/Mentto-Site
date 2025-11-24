import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-mentto-blue/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Using text for now as logo image might be protected/unavailable. 
              Can be replaced with <Image> later. */}
                    <span className="font-serif text-2xl font-bold text-white">
                        Mentto
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-bold text-white hover:text-primary transition-colors"
                    >
                        Início
                    </Link>
                    <Link
                        href="/modelo-integrado"
                        className="text-sm font-bold text-gray-200 hover:text-primary transition-colors"
                    >
                        Modelo integrado de gestão da inovação
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        Contato
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
