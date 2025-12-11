import Link from 'next/link';
import IncidenteForm from './IncidenteForm';

export default function IncidentePage() {
    return (
        <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="border-b border-gray-700 pb-8">
                    <Link href="/termos-de-uso-e-politicas-de-privacidade" className="text-primary hover:text-opacity-80 font-medium mb-4 inline-block transition-colors">
                        &larr; Voltar para Termos e Políticas
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mt-2 font-serif">
                        Política de Resposta a Incidentes
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Diretrizes para gestão e comunicação de incidentes de segurança.
                    </p>
                </div>

                <div className="space-y-4 text-gray-200">
                    <h3 className="text-xl font-semibold text-white mt-6 font-serif">INTRODUÇÃO</h3>
                    <p>
                        Esta Política tem como objetivo preparar a Mentto para lidar com a gestão de um incidente de segurança garantindo que responda de forma mais rápida, organizada e eficiente ao evento, minimizando suas consequências para todos os envolvidos.
                    </p>
                    <p>
                        O nível da resposta dependerá do tipo de dados e da complexidade do tratamento aplicado. Antes de mais nada, é necessário definir o que é um incidente. De maneira geral, um incidente é uma situação inesperada, capaz de alterar a ordem normal das coisas e, no caso da proteção de dados, colocar em risco dados pessoais dos indivíduos que se relacionam com a Mentto.
                    </p>
                    <p>
                        O National Institute of Standards and Technology (NIT), define um incidente de segurança como uma violação ou ameaça de violação da política de segurança computacional, política de uso aceitável ou padrões de prática de segurança. De acordo com o artigo 46 da Lei Geral de Proteção de Dados (LGPD),
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic bg-tertiary py-2 pr-2 rounded-r text-gray-300">
                        Os agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer outra forma de tratamento inadequado ou ilícito.
                    </blockquote>
                    <p>
                        Seguindo o disposto no artigo 48 da referida Lei, é obrigação do controlador comunicar à autoridade nacional e ao titular dos dados a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante aos titulares. Devendo esta comunicação ser feita em prazo razoável, conforme definição da autoridade nacional, tendo em seu conteúdo, no mínimo:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>A descrição da natureza dos dados pessoais afetados;</li>
                        <li>As informações sobre os titulares envolvidos;</li>
                        <li>A indicação das medidas técnicas e de segurança utilizadas para a proteção dos dados;</li>
                        <li>Os riscos relacionados ao incidente;</li>
                        <li>Os motivos da demora, no caso de a comunicação não ter sido imediata;</li>
                        <li>As medidas que foram ou que estão sendo tomadas para reverter ou mitigar os efeitos do prejuízo.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">1. PLANEJAMENTO</h3>
                    <p>
                        Consiste em identificar, prever e descrever possíveis situações de violação de dados, bem como as respectivas ações que deverão ser tomadas, os prazos e as formas de registro, garantindo que em situações reais se tenha um plano de ação previamente traçado. O planejamento deverá conter, no mínimo:
                    </p>
                    <ul className="list-none pl-5 space-y-2">
                        <li><strong>a.</strong> a previsão de possíveis situações de sinistros bem como as formas de monitoramento e a ação que deverá ser tomada em caso de sua ocorrência;</li>
                        <li><strong>b.</strong> a definição da área que deverá ser informada em situação de ocorrência do sinistro e como reportar;</li>
                        <li><strong>c.</strong> o detalhamento das ações necessárias deve levar em conta a criticidade do evento.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">2. IDENTIFICAÇÃO</h3>
                    <p>
                        Deve-se definir os critérios para detectar, identificar e registrar as situações de incidentes e descrever os recursos utilizados para a identificação de alertas de segurança e acionamento das equipes responsáveis para que sejam tomadas as devidas providências. Devem ser avaliadas todas as possíveis fontes capazes de representar uma ameaça à proteção de dados. Abaixo, algumas situações que devem ser consideradas suspeitas:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Recebimento de e-mails com caracteres e/ou arquivos anexos suspeitos;</li>
                        <li>Comportamento inadequado de dispositivos;</li>
                        <li>Problema no acesso a determinados arquivos ou serviços;</li>
                        <li>Roubo de dispositivos de armazenamento ou computadores com informações;</li>
                        <li>Alerta de software antivírus;</li>
                        <li>Consumo excessivo e repentino de memória em servidores ou computadores;</li>
                        <li>Tráfego de rede incomum;</li>
                        <li>Conexões bloqueadas por firewall;</li>
                    </ul>
                    <p>
                        Análise dos logs de tentativas de acesso não autorizado aos servidores. Situações de não cumprimento dos procedimentos internos também podem oferecer riscos à segurança dos dados pessoais, deste modo, a observação da Cartilha de Boas Práticas é de extrema importância. Todos os colaboradores e parceiros da Instituição são responsáveis por reportar qualquer tipo de eventos e fragilidades, que possam causar danos à segurança da informação. A notificação deve ser registrada por e-mail ao Encarregado de Proteção de Dados.
                    </p>

                    <h4 className="text-lg font-semibold text-white mt-6 font-serif">2.1 CATEGORIAS DA VIOLAÇÃO DE SEGURANÇA</h4>
                    <p>A violação de segurança será classificada dentre as categorias citadas a seguir:</p>
                    <ul className="list-none pl-5 space-y-2">
                        <li><strong>a. Material:</strong> quando o incidente envolve dados armazenados em dispositivos físicos. Exemplos: perda de portadores de dados, pastas de arquivos perdidas, smartphones perdidos, etc.</li>
                        <li><strong>b. Verbal:</strong> quando há vazamento de dados de forma verbal, seja por indiscrição (comentários acerca de dados pessoais que são percebidos por terceiros e utilizados em má-fé) ou de forma intencional, repassando indevidamente informações sigilosas.</li>
                        <li><strong>c. Ciberespaço:</strong> quando o incidente está relacionado à Tecnologia da Informação. Nessa categoria enquadram-se o hackeamento, mau gerenciamento de patches, codificação incorreta, medidas de segurança insuficientes, etc.</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-white mt-6 font-serif">2.2 AVALIAÇÃO DA CRITICIDADE DE SEGURANÇA</h4>
                    <p>Alguns fatores serão determinantes na definição da criticidade de um incidente:</p>
                    <p><strong>I. A categoria da criticidade:</strong> de maneira genérica, o incidente será classificado em uma das categorias abaixo:</p>
                    <ul className="list-none pl-5 space-y-2">
                        <li><strong>a. Risco Baixo:</strong> classificação utilizada quando o incidente de segurança de dados afetar apenas dados pessoais, não incluído o número do CPF;</li>
                        <li><strong>b. Risco Moderado:</strong> classificação utilizada quando o incidente de segurança de dados afetar dados pessoais, incluído o número do CPF, e/ou pelo menos um dado sensível, não incluído raça, religião, nome social e dados de saúde;</li>
                        <li><strong>c. Risco Alto:</strong> classificação utilizada quando o incidente de segurança de dados afetar dados pessoais, incluído o número do CPF e/ou mais que um dado sensível, incluindo raça, religião, nome social e dados de saúde.</li>
                    </ul>
                    <ul className="list-none pl-5 space-y-2 mt-2">
                        <li><strong>II. Dados legíveis/ilegíveis:</strong> dados protegidos por algum sistema de pseudonimização (criptografia, por exemplo).</li>
                        <li><strong>III. Volume de dados pessoais:</strong> expresso em quantidade de registros, arquivos, documentos e/ou em períodos de tempo (uma semana, um ano, etc.).</li>
                        <li><strong>IV. Facilidade de identificação de indivíduos:</strong> facilidade com que se pode deduzir a identidade das pessoas a partir dos dados envolvidos no incidente.</li>
                        <li><strong>V. Indivíduos com características especiais:</strong> se o incidente afeta pessoas com características ou necessidades especiais.</li>
                        <li><strong>VI. Número de indivíduos afetados:</strong> dentro de uma determinada escala, por exemplo, mais de 100 indivíduos.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">3. CONTENÇÃO</h3>
                    <p>
                        Após um incidente ser identificado como uma violação de segurança, o mesmo deverá ser contido para evitar que outros sistemas sejam afetados ou que ocasionem danos maiores, deve ser previsto ações para a contenção de curto prazo, backup do sistema e contenção a longo prazo. Durante a contenção, deve haver o registro do incidente e das medidas de contenção que foram adotadas, evitando ao máximo a perda de evidências e as provas do ocorrido. É importante lembrar da necessidade de trabalho colaborativo de toda a Mentto.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Responsável pelo tratamento de dados da área afetada pelo incidente:</strong> a partir do momento que foi identificado um possível incidente de segurança de dados, a área responsável pela categoria de dados deve imediatamente informar o encarregado de dados para iniciar o processo de contenção.</li>
                        <li><strong>Operador:</strong> os operadores de dados, assim como os colaboradores internos, têm a responsabilidade de informar a ocorrência de incidente de segurança ao encarregado de dados, imediatamente.</li>
                        <li><strong>Encarregado da Proteção de Dados:</strong> após ser informado, o encarregado de proteção de dados deverá avaliar a existência do plano de ação para tal incidente e iniciá-lo, e caso identifique o fato concreto de vazamento de dados pessoais, preencher o documento de Comunicação de Incidente de Segurança, para notificação à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares afetados.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">4. ERRADICAÇÃO</h3>
                    <p>
                        Após a ameaça ter sido contida, é necessário proceder com a sua remoção e a restauração dos sistemas que foram afetados, de modo que voltem a operar em sua normalidade.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">5. RECUPERAÇÃO</h3>
                    <p>
                        Os sistemas afetados são restabelecidos e voltam a operar em ambiente de produção. É necessário definir as ações que devem ser tomadas para que o sistema volte a sua normalidade. Deve ser realizada uma varredura para identificar as perdas ocorridas e como recuperar o que foi perdido.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 font-serif">6. LIÇÕES APRENDIDAS</h3>
                    <p>
                        É fundamental que os mesmos erros não voltem a acontecer. Assim, é necessário que os incidentes sejam documentados, especificando quais foram os procedimentos de respostas utilizadas para contorná-los, de forma a manter um histórico das ocorrências e das ações tomadas.
                    </p>
                </div>

                <IncidenteForm />
            </div>
        </main>
    );
}
