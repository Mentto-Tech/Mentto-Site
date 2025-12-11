"use server";

export async function submitIncidenteForm(formData: FormData) {
    const email = formData.get("email") as string;

    // Helper to get all values for checkboxes and join them
    const getMultiValue = (key: string) => {
        const values = formData.getAll(key);
        return values.join(", ");
    };

    // Extract all fields
    const fields = {
        tipo_de_comunicacao: formData.get("tipo_de_comunicacao") as string,
        criterio_para_comunicacao: getMultiValue("criterio_para_comunicacao"), // Checkbox
        agente_de_tratamento: formData.get("agente_de_tratamento") as string,
        comunicacao_do_incidente: formData.get("comunicacao_do_incidente") as string,
        nome_razao_social: formData.get("nome_razao_social") as string,
        cpf_cnpj: formData.get("cpf_cnpj") as string,
        telefone: formData.get("telefone") as string,
        natureza_da_organizacao: formData.get("natureza_da_organizacao") as string,
        notificante_encarregado_de_dados: formData.get("notificante_encarregado_de_dados") as string,
        incidente_de_seguranca: formData.get("incidente_de_seguranca") as string,
        quando_ocorreu: formData.get("quando_ocorreu") as string,
        data_incidente: formData.get("data_incidente") as string,
        organizacao_envolvida: formData.get("organizacao_envolvida") as string,
        organizacao_ciente: formData.get("organizacao_ciente") as string,
        justificativa: formData.get("justificativa") as string,
        justificativa_2: formData.get("justificativa_2") as string,
        natureza_dos_dados: getMultiValue("natureza_dos_dados"), // Checkbox
        quantidade_de_afetados: formData.get("quantidade_de_afetados") as string,
        categoria_dos_afetados: formData.get("categoria_dos_afetados") as string,
        medidas_tomadas: formData.get("medidas_tomadas") as string,
        medidas_tomadas_apos: formData.get("medidas_tomadas_apos") as string,
        medidas_tomadas_reverter: formData.get("medidas_tomadas_reverter") as string,
        fierelatorio_ripd: formData.get("fierelatorio_ripd") as string,
        consequencias_provaveis: formData.get("consequencias_provaveis") as string,
        consequencias_transfronteiricas: formData.get("consequencias_transfronteiricas") as string,
        titulares_comunicados: formData.get("titulares_comunicados") as string,
        justificativa_nao_comunicacao: formData.get("justificativa_nao_comunicacao") as string,
    };

    if (!email) {
        return { success: false, message: "E-mail é obrigatório." };
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
                fields: fields,
                groups: process.env.MAILERLITE_INCIDENTE_GROUP_ID ? [process.env.MAILERLITE_INCIDENTE_GROUP_ID] : [],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("MailerLite API Error:", errorData);
            return { success: false, message: "Erro ao enviar comunicação de incidente." };
        }

        return { success: true, message: "Comunicação enviada com sucesso!" };
    } catch (error) {
        console.error("Error submitting to MailerLite:", error);
        return { success: false, message: "Erro inesperado. Tente novamente mais tarde." };
    }
}
