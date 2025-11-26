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
        <form id="contact-form" action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label className="block text-xs font-bold text-white mb-2" htmlFor="name">Nome *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none transition-colors text-sm"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-white mb-2" htmlFor="email">E-mail *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none transition-colors text-sm"
                        placeholder="E-mail"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold text-white mb-2" htmlFor="message">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none transition-colors text-sm"
                    placeholder="Mensagem"
                ></textarea>
            </div>

            {status === "error" && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                    {message}
                </div>
            )}

            {status === "success" && (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
                    {message}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "Enviando..." : "Enviar"}
            </button>
        </form>
    );
}
