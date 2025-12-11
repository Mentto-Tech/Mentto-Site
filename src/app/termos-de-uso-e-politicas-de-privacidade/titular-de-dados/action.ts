"use server";

export async function submitTitularForm(formData: FormData) {
    const email = formData.get("email") as string;

    // Helper to get all values for checkboxes and join them
    const getMultiValue = (key: string) => {
        const values = formData.getAll(key);
        return values.join(", ");
    };

    const solicitante = formData.get("solicitante") as string;
    const vinculo_do_titular = formData.get("vinculo_do_titular") as string;
    const tipo_de_solicitacao = getMultiValue("tipo_de_solicitacao"); // Checkbox
    const cpf = formData.get("cpf") as string;
    const descricao_da_solicitacao = formData.get("descricao_da_solicitacao") as string;
    const autorizo_contato = formData.get("autorizo_contato") as string;
    const correcao_dos_dados = formData.get("correcao_dos_dados") as string;

    if (!email || !solicitante || !cpf) {
        return { success: false, message: "E-mail, Solicitante e CPF são obrigatórios." };
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
                    solicitante: solicitante,
                    vinculo_do_titular: vinculo_do_titular,
                    tipo_de_solicitacao: tipo_de_solicitacao,
                    cpf: cpf,
                    descricao_da_solicitacao: descricao_da_solicitacao,
                    autorizo_contato: autorizo_contato,
                    correcao_dos_dados: correcao_dos_dados,
                },
                groups: process.env.MAILERLITE_ACESSO_GROUP_ID ? [process.env.MAILERLITE_ACESSO_GROUP_ID] : [],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("MailerLite API Error:", errorData);
            return { success: false, message: "Erro ao enviar solicitação." };
        }

        return { success: true, message: "Solicitação enviada com sucesso!" };
    } catch (error) {
        console.error("Error submitting to MailerLite:", error);
        return { success: false, message: "Erro inesperado. Tente novamente mais tarde." };
    }
}
