"use client";

import { useState } from "react";
import { contactFunction } from "@/app/actions";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        setMessage("");

        const result = await contactFunction(formData);

        if (result.success) {
            setStatus("success");
            setMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            // Reset form
            const form = document.getElementById("contact-form") as HTMLFormElement;
            form?.reset();
        } else {
            setStatus("error");
            setMessage(result.message || "Ocorreu um erro ao enviar. Tente novamente.");
        }
    }

    return (
        <div className="bg-white p-10 rounded-lg shadow-xl w-full mx-auto">
            <h3 className="text-2xl font-bold text-[#083D5F] mb-6">Estamos te esperando</h3>
            <form id="contact-form" action={handleSubmit} className="space-y-5">
                <div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-5 py-4 rounded border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors text-lg"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-5 py-4 rounded border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors text-lg"
                        placeholder="Digite seu e-mail *"
                        required
                    />
                </div>
                <div>
                    <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        className="w-full px-5 py-4 rounded border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors text-lg"
                        placeholder="Seu WhatsApp"
                    />
                </div>
                <div>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full px-5 py-4 rounded border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors text-lg"
                        placeholder="Qual o nome da sua empresa? *"
                        required
                    />
                </div>
                <div>
                    <input
                        id="segment"
                        name="segment"
                        type="text"
                        className="w-full px-5 py-4 rounded border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors text-lg"
                        placeholder="Qual o segmento?"
                    />
                </div>

                {status === "error" && (
                    <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded text-sm">
                        {message}
                    </div>
                )}

                {status === "success" && (
                    <div className="p-3 bg-green-50 text-green-600 border border-green-200 rounded text-sm">
                        {message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#F26C55] text-white font-bold py-4 rounded hover:bg-[#E05A44] transition-colors text-base disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                    {status === "loading" ? "Enviando..." : "Quero transformar a minha empresa"}
                </button>
            </form>
        </div>
    );
}
