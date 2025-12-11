import requests
import json

# --- Configurações ---
# SUBSTITUA PELO SEU TOKEN REAL DA API MAILERLITE CLASSIC
API_KEY = ""
BASE_URL = "https://api.mailerlite.com/api/v2/fields"

# Lista de custom_ids do formulário de incidentes, incluindo os IDs melhorados (em negrito no mapeamento).
CUSTOM_FIELDS_IDS = [
    "tipo_de_comunicacao",
    "criterio_para_comunicacao",
    "agente_de_tratamento",
    "comunicacao_do_incidente",
    "nome_razao_social",
    "cpf_cnpj",
    # "telefone", USE "phone instead"
    "natureza_da_organizacao",
    "notificante_encarregado_de_dados",
    "incidente_de_seguranca",
    "quando_ocorreu",
    "data_incidente",
    "organizacao_envolvida",
    "organizacao_ciente",
    "justificativa",
    "justificativa_2",
    "natureza_dos_dados",
    "quantidade_de_afetados",
    "categoria_dos_afetados",
    "medidas_tomadas",
    "medidas_tomadas_apos",
    "medidas_tomadas_reverter",
    "fierelatorio_ripd",
    # NOVOS IDs MELHORADOS
    "consequencias_provaveis",          # Item 25
    "consequencias_transfronteiricas",  # Item 26
    "titulares_comunicados",           # Item 27
    "justificativa_nao_comunicacao",   # Item 28
]

# --- Cabeçalhos da Requisição ---
HEADERS = {
    "Content-Type": "application/json",
    "X-MailerLite-ApiKey": API_KEY,
    "Accept": "application/json"
}

def criar_campo_mailerlite(custom_id):
    """Envia a requisição para criar um campo personalizado no MailerLite usando o custom_id como título."""
    
    payload = {
        "title": custom_id,
        "type": "TEXT" 
    }
    
    print(f"Tentando criar campo: {custom_id}...")
    
    try:
        response = requests.post(BASE_URL, headers=HEADERS, data=json.dumps(payload))
        response.raise_for_status()
        
        campo_criado = response.json()
        
        print(f"✅ Sucesso! Campo '{campo_criado['title']}' (Key: {campo_criado['key']}) criado.")
        print("-" * 30)
        
    except requests.exceptions.HTTPError as err:
        print(f"❌ Falha ao criar campo {custom_id}: Erro HTTP {response.status_code}")
        try:
            error_details = response.json()
            if 'error' in error_details and 'already exists' in error_details['error']:
                 print(f"   Detalhes: O campo '{custom_id}' já existe. Ignorando.")
            else:
                 print(f"   Detalhes do Erro: {error_details}")
        except json.JSONDecodeError:
            print("   Resposta não é um JSON válido.")
        print("-" * 30)
    except requests.exceptions.RequestException as e:
        print(f"❌ Erro de conexão ou outro erro: {e}")
        print("-" * 30)

def main():
    """Função principal para iterar e criar todos os campos."""
    
    if API_KEY == "SUA_CHAVE_DE_API_AQUI":
        print("🛑 ERRO: Por favor, substitua 'SUA_CHAVE_DE_API_AQUI' pela sua chave de API MailerLite real no script.")
        return

    print("Iniciando a criação dos campos personalizados para Comunicação de Incidentes (com IDs melhorados)...")
    for custom_id in CUSTOM_FIELDS_IDS:
        criar_campo_mailerlite(custom_id)

    print("\nProcesso de criação de campos concluído.")
    
if __name__ == "__main__":
    main()