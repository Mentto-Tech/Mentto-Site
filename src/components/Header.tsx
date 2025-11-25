"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-mentto-blue/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="https://i0.wp.com/mentto.com.br/wp-content/uploads/2025/08/Logo-secundario-scaled.png?fit=640%2C145&ssl=1"
                        alt="Mentto"
                        width={160}
                        height={40}
                        className="h-10 w-auto object-contain"
                        unoptimized
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-bold text-mentto-blue hover:text-primary transition-colors"
                    >
                        Início
                    </Link>
                    <Link
                        href="/modelo-integrado"
                        className="text-sm font-bold text-mentto-blue/80 hover:text-primary transition-colors"
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
                <button
                    className="md:hidden p-2 text-mentto-blue"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-mentto-blue/10 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                    <Link
                        href="/"
                        className="text-mentto-blue font-bold py-2 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Início
                    </Link>
                    <Link
                        href="/modelo-integrado"
                        className="text-mentto-blue font-bold py-2 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Modelo integrado de gestão da inovação
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contato
                    </Link>
                </div>
            )}
        </header>
    );
}
