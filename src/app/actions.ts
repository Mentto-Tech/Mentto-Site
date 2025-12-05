"use server";

export async function contactFunction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const company = formData.get("company") as string;
    const segment = formData.get("segment") as string;

    if (!email || !name || !company) {
        return { success: false, message: "Nome, e-mail e empresa são obrigatórios." };
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
        console.error("MAILERLITE_API_KEY is not defined in environment variables.");
        return {
            success: false,
            message: "Erro de configuração no servidor. Entre em contato com o suporte.",
        };
    }

    try {
        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                email: email,
                fields: {
                    name: name,
                    phone: whatsapp,
                    company: company,
                    setor: segment,
                    voucher: ""
                },
                groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : [],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("MailerLite API Error:", errorData);

            // Handle specific error cases if needed
            if (response.status === 422) {
                return { success: false, message: "E-mail inválido ou já cadastrado." };
            }

            return { success: false, message: "Erro ao enviar dados para o MailerLite." };
        }

        return { success: true, message: "Inscrição realizada com sucesso!" };
    } catch (error) {
        console.error("Error submitting to MailerLite:", error);
        return { success: false, message: "Erro inesperado. Tente novamente mais tarde." };
    }
}
