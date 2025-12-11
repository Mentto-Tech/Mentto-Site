import requests
import json

# --- Configurações ---
# SUBSTITUA PELO SEU TOKEN REAL DA API MAILERLITE CLASSIC
API_KEY = ""
BASE_URL = "https://api.mailerlite.com/api/v2/fields"

# Lista de campos personalizados a serem criados.
# O 'custom_id' do formulário será usado como 'title' (nome do campo) no MailerLite.
CAMPOS_PERSONALIZADOS = [
    {"custom_id": "solicitante", "type": "TEXT"},
    {"custom_id": "vinculo_do_titular", "type": "TEXT"},
    {"custom_id": "tipo_de_solicitacao", "type": "TEXT"},
    {"custom_id": "cpf", "type": "TEXT"},
    {"custom_id": "descricao_da_solicitacao", "type": "TEXT"},
    {"custom_id": "autorizo_contato", "type": "TEXT"},
    {"custom_id": "correcao_dos_dados", "type": "TEXT"},
]

# --- Cabeçalhos da Requisição ---
HEADERS = {
    "Content-Type": "application/json",
    "X-MailerLite-ApiKey": API_KEY,
    "Accept": "application/json"
}

def criar_campo_mailerlite(field_data):
    """Envia a requisição para criar um campo personalizado no MailerLite."""
    
    # Prepara o payload usando 'custom_id' como 'title'
    payload = {
        "title": field_data["custom_id"],
        "type": field_data["type"]
    }
    
    print(f"Tentando criar campo (title='{payload['title']}') ...")
    
    try:
        response = requests.post(BASE_URL, headers=HEADERS, data=json.dumps(payload))
        response.raise_for_status()  # Levanta HTTPError para códigos de status ruins (4xx ou 5xx)
        
        # Converte a resposta JSON
        campo_criado = response.json()
        
        print(f"✅ Sucesso! Campo '{campo_criado['title']}' (ID: {campo_criado['id']}) criado.")
        print(f"   Key para mapeamento: {campo_criado['key']}")
        print("-" * 30)
        
    except requests.exceptions.HTTPError as err:
        print(f"❌ Falha ao criar campo {payload['title']}: Erro HTTP {response.status_code}")
        try:
            # Tenta imprimir a mensagem de erro do MailerLite
            error_details = response.json()
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

    print("Iniciando a criação dos campos personalizados no MailerLite...")
    for field in CAMPOS_PERSONALIZADOS:
        criar_campo_mailerlite(field)

    print("\nProcesso de criação de campos concluído.")
    print("\n⚠️ Lembre-se que o nome do campo no MailerLite será o 'custom_id' do seu formulário.")

if __name__ == "__main__":
    main()