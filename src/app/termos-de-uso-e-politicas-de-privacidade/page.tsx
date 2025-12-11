import Link from 'next/link';

export default function TermosPage() {
    return (
        <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-4xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-serif">
                        Termos de Uso e Políticas de Privacidade
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Nossos compromissos com ética, transparência e segurança.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Código de Conduta e Ética */}
                    <section id="codigo-conduta" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700 font-serif">
                            Código de Conduta e Ética
                        </h2>
                        <div className="space-y-4 text-gray-200">
                            <p>
                                A Mentto está comprometida com os mais elevados padrões de conduta ética e profissional. O Código de Conduta (“Código de Conduta” ou “Código”) oferece diretrizes básicas de práticas de negócios e de conduta profissional que devemos adotar e defender. Para promover a confiança e a crença do público, este Código mostra como vivenciamos nossos valores como pessoas e como uma equipe.
                            </p>
                            <p>
                                Na Mentto, vivemos nossos valores, atendemos ao nosso objetivo e impulsionamos o crescimento responsável por meio de nossas linhas de negócios.
                            </p>
                            <p>
                                Somos guiados pelo objetivo comum de ajudar a melhorar a experiência diante da jornada global de digitalização, por meio do poder de cada conexão.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Objetivos e Valores</h3>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p><strong>Nosso objetivo e valores</strong> formam a base da nossa cultura; uma cultura enraizada na integridade, na gestão disciplinada de risco e no trabalho em equipe para servir melhor nossos consumidores e clientes, fortalecer nossas comunidades e acrescentar valor aos nossos acionistas.</p>
                                </li>
                            </ol>
                            <p>
                                <strong>Trabalhar juntos:</strong> Acreditamos na importância de tratar cada consumidor, cliente e colega como um indivíduo e considerar cada momento como um momento importante. Nós nos empenhamos para vencer obstáculos e apresentar resultados, com disciplina e paixão. Acreditamos no vínculo com as pessoas, individualmente, com empatia e compreensão. Acreditamos que tudo o que fazemos para os consumidores, clientes, colegas de equipe e comunidades que atendemos é edificado em uma base de negócios sólida que presta serviços para os acionistas.
                            </p>
                            <ol start={2} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p><strong>Agir com responsabilidade:</strong> Acreditamos que a integridade e a gestão disciplinada dos riscos compõem a base do nosso negócio. Temos consciência de que nossas decisões e ações afetam as vidas das pessoas diariamente. Acreditamos na tomada de decisões que sejam claras, justas e baseadas nos princípios de sucesso compartilhado, cidadania responsável e criação de comunidades. Valorizar nosso pessoal Nós nos empenhamos para ajudar todos os funcionários a atingir seu potencial máximo. Acreditamos que históricos e experiências diversificadas nos tornam mais fortes. Respeitamos todos os indivíduos e valorizamos nossas diferenças em relação ao pensamento, estilo, cultura, etnia e experiência.</p>
                                </li>
                            </ol>
                            <p>
                                <strong>Confiar na equipe:</strong> Acreditamos que os melhores resultados são atingidos quando as pessoas trabalham juntas em toda a empresa. Acreditamos que ótimas equipes são formadas a partir da confiança mútua, propriedade compartilhada e responsabilidade. Agimos como uma só empresa e acreditamos que quando trabalhamos juntos, atendemos melhor todas as necessidades dos nossos consumidores e clientes.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Cultura</h3>
                            <p>
                                3. Nossa cultura vem de como administramos a empresa todos os dias, agindo com responsabilidade e gerenciando bem os riscos, o que inclui nossos compromissos com um comportamento honesto e ético, agindo com integridade e cumprindo as leis, regras, regulamentações e políticas aplicáveis. A administração dos riscos é essencial em tudo o que fazemos. O nosso sucesso depende da curiosidade intelectual e do bom senso de todos os funcionários da empresa. É por isso que, independentemente de onde trabalhamos na empresa, administrar bem os riscos é fundamental para atender aos nossos objetivos e valores e para proporcionar um crescimento responsável.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Compromisso</h3>
                            <p><strong>Decisões virtuosas e responsáveis</strong></p>
                            <p>
                                Inúmeras decisões são tomadas diariamente na Mentto à medida que alcançamos o nosso objetivo para melhorar a vida das pessoas, conectando aqueles que atendemos à tecnologia e inovação de que necessitam para ter sucesso. Cada decisão que tomamos como instituição e como funcionários afeta não apenas a empresa e nossos colegas de equipe, mas também nossos consumidores, clientes, acionistas e comunidades. Todos nos esforçamos para tomar decisões boas e responsáveis e para fazer a coisa certa. Contudo, tomar decisões nem sempre é fácil.
                            </p>
                            <ol start={4} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Embora em algumas situações o resultado correto seja óbvio e a decisão possa ser tomada facilmente, em muitas situações o resultado correto não é tão claro ou você pode estar sob pressão de tempo ou outras pressões relacionadas aos negócios.</p>
                                </li>
                            </ol>
                            <p>Independentemente da natureza de uma decisão específica, tenha em mente o seguinte para tomar decisões bem informadas e sensatas:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Certifique-se de conhecer os fatos relevantes.</li>
                                <li>Leve em conta as leis, regras, regulamentações e políticas aplicáveis.</li>
                                <li>Considere os interesses conflitantes.</li>
                                <li>Identifique todas as possíveis opções e suas consequências.</li>
                                <li>Defenda os valores da Mentto.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Tratamento Justo e Responsabilidades</h3>
                            <p>
                                5. Na Mentto, espera-se que façamos negociações justas com nossos funcionários, consumidores, fornecedores, concorrentes e outros terceiros:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Ninguém deve tirar vantagem de nenhum funcionário, consumidor, fornecedor, concorrente ou outro terceiro por meio de manipulação, dissimulação, uso inadequado de informações proprietárias e confidenciais, deturpação consciente de fatos ou qualquer outra prática de negociação desleal.</li>
                                <li>Ninguém deve oferecer nem aceitar subornos, comissões, promessas ou ofertas especiais de crédito.</li>
                                <li>Todos devem aprovar ou aceitar pedidos, contratos e compromissos com base em padrões objetivos de negócios para evitar favoritismo ou impressão de favoritismo.</li>
                                <li>Ninguém deve conspirar nem colaborar com concorrentes sob nenhuma circunstância.</li>
                                <li>Ninguém deve acessar uma conta de um cliente sem permissão ou necessidade comercial legítima e autorizada.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Exceções ao Código</h3>
                            <p>
                                6. A diretoria é responsável por aprovar qualquer exceção ao Código para o diretor executivo, diretor financeiro, diretor de contabilidade ou qualquer diretor ou funcionário executivo. A empresa prontamente divulgará qualquer exceção em seu site, ou por meio de um comunicado à imprensa ou outro registro público, conforme exigido pela lei, norma ou regra aplicável.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Obrigações Específicas Dos Gestores</h3>
                            <p>
                                Todos são responsáveis por cumprir com o Código; relatar violação ou suspeitas de violações do Código, das leis, regras, regulamentações, políticas ou procedimentos; práticas de negócios questionáveis que possam contradizer ou violar nosso Código; e cooperar em investigações de possíveis violações.
                            </p>
                            <p>7. Os gestores possuem obrigações adicionais descritas a seguir:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Praticar ativamente o comportamento ético, administrar riscos de acordo com a Estrutura de risco da empresa e vivenciar os padrões do nosso Código e dos nossos valores.</li>
                                <li>Garantir que as pessoas estão agindo de acordo com nossos valores, nosso Código e nossa Estrutura de riscos.</li>
                                <li>Assegurar-se de que os indivíduos sob sua supervisão estejam cientes do nosso Código, das políticas e dos procedimentos correlatos.</li>
                                <li>Conservar um ambiente no local de trabalho que estimule discussões francas sobre questões éticas sem medo de represálias.</li>
                                <li>Evitar condutas que possam ser consideradas abuso de sua posição ou influência (por exemplo, pressionar inadequadamente os colegas de equipe para obter benefício pessoal ou atividades).</li>
                                <li>Tratar confidencialmente todos os relatórios e reclamações sobre questões éticas e seguir de modo consistente as políticas e procedimentos da empresa para resolvê-los.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Postura Ética</h3>
                            <p>
                                Sustentar nossa cultura de gerenciar riscos bem em toda a empresa é fundamental para o nosso sucesso e nossos esforços para impulsionar o crescimento responsável. Crescer com responsabilidade é apoiado por nosso compromisso de agir com responsabilidade, o que significa que, à medida que ajudamos a melhorar a vida da Comunidade Global, precisamos sempre nos comportar com justiça, honestidade e integridade.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conflitos de interesses</h3>
                            <ol start={8} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>O Código de conduta oferece diretrizes básicas de ética na prática de negócios, gestão de conflitos de interesses e conduta aparentes ou reais que devemos adotar e defender como funcionários ou como pessoas que exercem funções e tarefas em nome da empresa através de relacionamentos com terceiros.</p>
                                </li>
                            </ol>
                            <p>Conflitos de interesses podem ocorrer quando:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Negócios pessoais, interesses financeiros ou atividades concorrem ou interferem em suas obrigações para com a empresa, seus acionistas ou seus clientes. Um conflito pode surgir quando um funcionário toma medidas ou tem interesses que podem dificultar a realização do trabalho de sua empresa de maneira objetiva e eficaz.</li>
                                <li>Os interesses de dois ou mais clientes da empresa estão em conflito, gerando um possível risco de prejuízo substancial aos interesses de um ou ambos os clientes.</li>
                                <li>Os interesses da empresa entram em conflito com os interesses dos seus clientes.</li>
                                <li>As atividades de um funcionário fora do trabalho entram em conflito com os valores principais da empresa ou com este Código de Conduta.</li>
                            </ul>
                            <p>
                                Conflitos de interesses também podem surgir quando você ou membros da sua família recebem benefícios pessoais, produtos ou serviços impróprios ou tratamento preferencial em decorrência do cargo que você ou seu familiar ocupa na empresa. Para as finalidades deste Código, o termo “membros da família” inclui um cônjuge ou parceiro, filho (incluindo adotivo), pai, avô(ó), neto(a), primo(a), tio(a), irmão(ã), sogro(a) ou cunhado(a) do funcionário ou cônjuge ou parceiro do funcionário, relações de padrasto/madrasta e enteado/enteada do acima mencionado ou indivíduos que residem na casa do funcionário.
                            </p>
                            <ol start={9} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Tais situações podem interferir em seu julgamento ou capacidade de cumprir de modo apropriado suas responsabilidades em nome da Mentto, seus clientes ou seus acionistas.</p>
                                </li>
                            </ol>
                            <p>
                                Todos são responsáveis por identificar, gerenciar e comunicar (ao seu gerente ou ao diretor de conformidade e risco operacional) conflitos de interesse reais ou aparentes de acordo com requisitos regulatórios aplicáveis e as políticas da Mentto, incluindo este Código.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Presentes e Entretenimento</h3>
                            <p>
                                Um conflito de interesse pode surgir ao dar ou receber presentes ou convites de entretenimento de clientes, clientes potenciais ou terceiros. Essas atividades devem ser legítimas e não devem ser frequentes nem exageradas. Ninguém deve dar ou aceitar entretenimento de clientes ou de terceiros atuais ou potenciais; a menos que seja para um fim de negócios válido, proporcione uma oportunidade para uma conversa de negócios significativa e esteja, de outra forma, em conformidade com as políticas de nossa empresa e políticas locais, incluindo a Política Antissuborno/Anticorrupção.
                            </p>
                            <ol start={10} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Antes de entreter ou dar qualquer item de valor para um funcionário público, é preciso confirmar os requerimentos aplicáveis ao caso de acordo com as políticas e procedimentos relacionados, que podem incluir a obtenção de aprovação prévia de seu gestor e de seu diretor de conformidade e risco operacional.</p>
                                </li>
                            </ol>
                            <p>
                                Ninguém deve oferecer ou receber presentes em dinheiro ou equivalente a dinheiro em espécie de/para clientes ou fornecedores atuais ou potenciais ou terceiros.
                            </p>
                            <p>
                                Essas restrições não se destinam a controlar presentes ou entretenimento com base em relações familiares, quando as situações deixem claro que o fator motivador é o relacionamento e não os negócios da Mentto. Com base na legislação e regulamentos do setor e, particularmente, para o caso dos funcionários em determinadas áreas de negócios, seus atos em relação a presentes e entretenimento podem ser restritos a limites específicos de valor em dólar (ou equivalentes na moeda local) e/ou estar sujeitos a certos limiares de pré-aprovação. Requisitos de rastreamento e reporte específicos também podem se aplicar. Em qualquer caso, é preciso confirmar a compatibilidade das obrigações funcionais com o superior hierárquico direto.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Atividades Comerciais Externas</h3>
                            <ol start={11} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Um conflito de interesses ou outros riscos podem surgir por meio de atividades, emprego ou outros relacionamentos conduzidos fora da função desempanhada no relacionamento com a Mentto. Ninguém deve agir em nome da empresa ou parecer representá-la em nenhuma transação de negócios fora de suas funções e responsabilidades.</p>
                                </li>
                            </ol>
                            <p>Todos devem informar seu superior hierárquico direto e obter todas as aprovações necessárias antes de:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Procurar um emprego adicional fora da Mentto;</li>
                                <li>Envolver-se em um empreendimento comercial independente;</li>
                                <li>Juntar-se ao conselho de uma entidade com ou sem fins lucrativos;</li>
                                <li>Executar serviços para outra organização comercial;</li>
                                <li>Concorrer ou aceitar indicação para qualquer cargo político;</li>
                                <li>Procurar obter ou utilizar ativamente licenças profissionais da Mentto.</li>
                            </ul>
                            <ol start={12} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Ninguém deve buscar tais atividades e relacionamentos externos utilizando os recursos da Mentto (incluindo, entre outros, espaço físico, materiais, meios de comunicação ou tempo) ou permitir que alguma atividade comercial, civil ou beneficente externa interfira no seu desempenho profissional.</p>
                                </li>
                            </ol>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Atividades Fora do Ambiente de Trabalho</h3>
                            <p>
                                Espera-se que os funcionários ajam de maneira consistente com altos padrões de conduta profissional que mereçam confiança e segurança do público. Todos devem estar cientes de que suas ações fora do trabalho têm potencial para afetar a marca/reputação, as relações com o cliente, relações com colegas de trabalho ou sua função na Mentto.
                            </p>
                            <ol start={13} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Se as ações fora do trabalho estiverem associadas a Mentto, mesmo se a associação não for intencional, um conflito de interesses ou violação de conduta real ou potencial pode surgir, principalmente se as ações forem conflitantes com os nossos valores principais ou com este Código de Conduta. Algumas situações durante as quais isso pode ocorrer são, entre outras:</p>
                                </li>
                            </ol>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Comunicações públicas (incluindo mídias sociais como Snapchat, Facebook, WhatsApp etc.);</li>
                                <li>Participação em funções patrocinadas pelo banco ou externas, por exemplo, eventos comunitários de voluntariado, conferências e atividades de formação de equipes;</li>
                                <li>Comunicação entre funcionários em dispositivos móveis pessoais, incluindo mensagens de texto.</li>
                            </ul>
                            <p>
                                Ações fora do trabalho que criam um conflito de interesses real ou potencial, excluindo discursos protegidos envolvendo termos e condições de emprego, podem levar a sanção disciplinar e inclusive rescisão contratual.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Terceiros</h3>
                            <ol start={14} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Um conflito de interesses pode surgir através de relacionamentos com terceiros ou outros prestadores de serviços. Aquele que estiver autorizado a aprovar ou assinar pedidos, contratos, compromissos ou contratações de terceiros de bens ou serviços, deverá fazê-lo com base em padrões comerciais objetivos para evitar qualquer favoritismo real ou aparente. As interações entre funcionários e terceiros, que também podem ser clientes da Mentto, devem ser conduzidas de acordo com todas as políticas e princípios aplicáveis.</p>
                                </li>
                            </ol>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Antissuborno e anticorrupção</h3>
                            <p>
                                Todos devem cumprir a Lei de Práticas de Corrupção Estrangeiras (Foreign Corrupt Practices Act) dos Estados Unidos, a Lei antissuborno do Reino Unido (U.K. Bribery Act), assim como todas as outras leis antissuborno e anticorrupção aplicáveis onde forem realizados negócios em nome da Mentto.
                            </p>
                            <ol start={15} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Ninguém pode dar, prometer ou oferecer dinheiro ou qualquer coisa de valor, ou autorizar terceiros que estejam trabalhando em nome da Mentto a dar, prometer ou oferecer qualquer coisa de valor, incluindo, entre outros, moeda, ofertas de emprego, presentes e entretenimento extravagantes para qualquer cliente, funcionário público ou qualquer outra pessoa com o propósito de influenciar indevidamente uma decisão, garantir uma vantagem, evitar uma desvantagem ou obter ou manter negócios. Se você se envolver em tal conduta, estará expondo a si próprio como também a empresa a responsabilidade regulatória, civil e/ou criminal e danos significativos à reputação, prejudicando a confiança de nossos clientes, acionistas e comunidades.</p>
                                </li>
                            </ol>
                            <p>Caso persista qualquer dúvida ou preocupação em relação ao Código de Conduta, consulte seu superior hierárquico direto.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Cumprimento das Leis e Regulamentos</h3>
                            <ol start={16} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>O crescimento responsável e sustentável é apoiado por nossos compromissos com o comportamento ético, agindo com integridade e cumprindo as leis, regras, regulamentos e políticas que reforçam esse comportamento.</p>
                                </li>
                            </ol>
                            <p>
                                Ninguém deve tomar qualquer medida, seja pessoal ou em nome da Mentto, que possa violar qualquer lei, regra, regulamento ou política ou procedimento interno da empresa.
                            </p>
                            <p>
                                Embora seja impossível listar todas as leis, regras, regulamentos, políticas e procedimentos aplicáveis, esta seção apresenta tópicos adicionais relacionados às leis, regras e regulamentos dos quais todos devem estar cientes.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Combate à lavagem de dinheiro e sanções econômicas</h3>
                            <ol start={17} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Lavagem de dinheiro significa pegar dinheiro “sujo” derivado de atividades ilegais e fazer com que pareça “limpo”, como se fosse provindo de recursos legítimos. Sanções econômicas são ferramentas de política externa que impõem rígidos limites para uma gama de atividades, incluindo o fornecimento de serviços financeiros ou condução de transações.</p>
                                </li>
                            </ol>
                            <p>Estas são impostas por governos ou órgãos internacionais para tentar isolar ou impedir uma pessoa, entidade ou jurisdição de participar de uma atividade ou finalidade específica.</p>
                            <p>Todos nós temos um papel a desempenhar ao ajudar a impedir que criminosos e alvos de sanções usem produtos e serviços da Mentto.</p>
                            <p>Isso inclui a obrigação de conhecer nossos clientes, encaminhar atividades suspeitas e transações com países, pessoas ou negócios sancionados.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Livros e Registros</h3>
                            <ol start={18} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Registros e livros contábeis precisos refletem a nossa reputação, nossa integridade e nossa credibilidade, e cada um deles defende os interesses de nossos acionistas.</p>
                                </li>
                            </ol>
                            <p>A contabilidade da Mentto deve manter livros e registros precisos, incluindo, entre outros, qualquer sistema de registro de transações de clientes, de acordo com as necessidades do negócio e os requisitos legais.</p>
                            <p>Para assegurar a integridade de suas demonstrações financeiras consolidadas, a Mentto conta com controles e procedimentos contábeis e operacionais internos.</p>
                            <p>Funcionários e fornecedores responsáveis pela preparação das demonstrações financeiras da empresa, ou que fornecem informações como parte desse processo devem manter e seguir esses controles para que todas as transações subjacentes, tanto dentro da Mentto quanto com terceiros, sejam documentadas, registradas e relatadas apropriadamente.</p>
                            <p>Além disso, todos temos a responsabilidade de promover a divulgação total, justa, precisa, oportuna e compreensível de informações em relatórios e documentos registrados ou entregues pela Mentto a órgãos reguladores ou outras comunicações públicas.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Transparência nas Comunicações</h3>
                            <p><strong>Comunicações eletrônicas e mídia social</strong></p>
                            <ol start={19} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>A Mentto reconhece que, quando usadas adequadamente, as comunicações eletrônicas e mídia social podem causar um impacto positivo na experiência de nossos clientes. Melhoras nas comunicações eletrônicas ajudam os funcionários a economizarem o tempo e a melhorarem a eficiência geral dos negócios. As comunicações eletrônicas são uma parte importante de como a faz negócios. Aderir a esta seção do Código desenvolve e preserva a confiança dos clientes parceiros e fornecedores, protege nossa marca, minimiza os riscos (por exemplo, de reputação, regulatórios e jurídicos) e maximiza o uso apropriado de comunicações eletrônicas e de mídia social dos funcionários para ajudar a conduzir os negócios de maneira adequada.</p>
                                </li>
                            </ol>
                            <p>As tecnologias de comunicação eletrônica (incluindo e-mail, texto, mensagens instantâneas, voz, vídeo, ferramentas de colaboração e web conferência) garantem um foco contínuo na proteção de conteúdo e informações.</p>
                            <ol start={20} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Todos que defendem a marca da Mentto portanto são responsáveis por saber como e onde as informações são compartilhadas e utilizar dispositivos e aplicativos de comunicação seguros, gerenciados e aprovados pela empresa para compartilhar informações da empresa, incluindo informações que podem ser materiais, não públicas, confidenciais, privadas etc. Todas as comunicações eletrônicas enviadas por meio dos sistemas da empresa e/ou para ou de dispositivos concedidos pela empresa ou dispositivos permitidos pela empresa quando tais dispositivos estiverem conectados à rede, ferramentas e aplicativos da empresa, incluindo comunicações por meio de mídia social, são, na medida máxima permitida pela lei, sujeitos ao monitoramento e retenção pelo ou em nome da Mentto.</p>
                                </li>
                            </ol>
                            <p>Para questões sobre leis e restrições locais, será preciso entrar em contato com o departamento jurídico.</p>
                            <p>Aqueles que diretamente representam a Mentto, têm permissão para uso pessoal limitado de dispositivos emitidos pela empresa, dispositivos gerenciados pela empresa, aplicativos gerenciados da empresa, intranet, internet e e-mail para comunicações pessoais.</p>
                            <p>A Mentto pode monitorar e inspecionar todo o uso que os colaboradores fazem desses recursos, incluindo assegurar que a produtividade não seja afetada negativamente, manter a integridade dos sistemas (como o monitoramento da introdução de malware ou transmissões de dados inadequadas) e evitar atividades que podem dar origem a responsabilidade da empresa ou riscos (como reclamações de assédio ou conduta ilegal).</p>
                            <ol start={21} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>No entanto, os funcionários não estão autorizados a utilizar dispositivos pessoais para atividades comerciais da empresa, pois a Mentto não pode monitorar, proteger ou reter dados de comunicações comerciais ou informações provenientes de dispositivos pessoais, incluindo, entre outros, aplicativos, produtos, serviços, sites externos e recursos de mensagens, e-mail, números de telefone, chat, mensagens instantâneas, mensagens de texto SMS, iMessage, câmera, vídeo, voz e voz para texto.</p>
                                </li>
                            </ol>
                            <p>As comunicações de voz em um dispositivo pessoal são permitidas desde que o funcionário não esteja sujeito a nenhum requisito ou obrigação de registro de voz, conforme aplicável. Os funcionários sujeitos a qualquer requisito de registro de voz devem estar em um dispositivo gerenciado da empresa e devem consultar seus requisitos específicos de linha de negócios. O comportamento do funcionário e/ou usuário autorizado em todas as comunicações eletrônicas e mídia social (uso interno e externo) deve aderir aos padrões deste Código.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Proteção de Informações</h3>
                            <p><strong>Informações de supervisão recebidas de autoridades regulatórias</strong></p>
                            <ol start={22} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Informações de supervisão recebidas de autoridades regulatórias devem ser tratadas como confidenciais. Informações recebidas de autoridades reguladoras devem ser mantidas em segurança e não disseminadas fora da Mentto sem a devida autorização. Essas informações só devem ser compartilhadas dentro da empresa com outros funcionários que tenham “necessidade de saber” sobre a informação. O departamento jurídico deverá ser consultado se persistirem duvidas sobre essas restrições.</p>
                                </li>
                            </ol>
                            <p><strong>Informações sobre funcionários</strong></p>
                            <p>O acesso de informações sobre outros funcionários ou o uso de tais informações, devem ser regidos pela confidencialidade e a segurança de tais informações. Como parte do compromisso da empresa em proteger as informações de internos, a Mentto tem processos e controles em vigor para regulamentar o uso, transmissão, compartilhamento, armazenamento, divulgação, transferência, segurança, precisão e acesso às informações dos funcionários.</p>
                            <p><strong>Informações de Terceiros</strong></p>
                            <ol start={23} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Todos devem manter confidencial e segura qualquer informação sobre a compra de produtos ou serviços da empresa ou outras informações recebidas pela Mentto. Compartilhar essas informações pode resultar em danos de concorrência a terceiros, fornecer uma vantagem indevida ao concorrente do terceiro e violar acordos que a Mentto tenha com terceiros.</p>
                                </li>
                            </ol>
                            <p><strong>Propriedade Intelectual De Terceiros</strong></p>
                            <p>Respeitamos os direitos de propriedade intelectual de terceiros. Os funcionários não devem obter ou usar a propriedade intelectual de terceiros em violação das obrigações de confidencialidade ou lei. O uso, a venda ou outra distribuição de propriedade intelectual em violação dos acordos de licença ou leis de propriedade intelectual é proibido e acarretará sanções civis e penais aos responsáveis.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Da Dignidade da Pessoa Humana</h3>
                            <p><strong>Diversidade e inclusão</strong></p>
                            <ol start={24} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Na Mentto, nossa diversidade nos fortalece mais e é essencial para a nossa capacidade de relacionamento, atingir nosso objetivo e impulsionar o crescimento de forma responsável. Reconhecemos o potencial de cada um incentivando ativamente um ambiente de trabalho diversificado e inclusivo em termos de pensamento, estilo, orientação sexual, gênero, identidade de gênero, raça, etnia, cultura, religião e experiência.</p>
                                </li>
                            </ol>
                            <p>Nossa diversidade oferece também novas ideias e perspectivas e, quando reunidos com inclusão, somados em um ambiente inovador onde todos podem ser eles mesmos no trabalho, construir carreiras e contribuir para a nossa empresa.</p>
                            <p><strong>Discriminação e assédio</strong></p>
                            <p>Na Mentto, estamos empenhados em manter um local de trabalho livre de discriminação e assédio com base em raça, cor, religião, crença, sexo (incluindo gravidez, parto e condição médica correlata), informação genética, gênero, identidade de gênero, expressão de gênero, orientação sexual, nacionalidade, cidadania, idade, ascendência, estado civil, condição médica, deficiência física ou mental, status de militar ou veterano de guerra e qualquer outro fator proibido pelas leis aplicáveis (“Comportamento proibido”).</p>
                            <ol start={25} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>A Mentto considera a discriminação e o assédio inaceitáveis e contrários aos valores essenciais da empresa, pois abala a meta de proporcionar um ambiente inclusivo.</p>
                                </li>
                            </ol>
                            <p>A Mentto não tolera discriminação ou assédio ilegal de qualquer tipo. O assédio ou discriminação pode assumir muitas formas, incluindo, entre outros, conduta verbal, física, visual, sexual e abusiva (intimidação). A intimidação é definida como um comportamento ofensivo, intimidador, malicioso ou insultuoso, um abuso ou desvio de poder por meios destinados a minar, humilhar, denegrir ou ferir o destinatário. Incidentes relatados de comportamento proibido e/ou retaliação serão investigados. As investigações são conduzidas de maneira discreta, conforme for compatível com uma investigação completa da reclamação. Se a empresa descobrir violações desta Política ou de outra conduta imprópria de natureza sexual, discriminatória ou de retaliação ocorreram, que pode ser aplicada sanção disciplinar, que pode incluir a rescisão imediata do contrato de trabalho. A política da Mentto proíbe especificamente o assédio sexual e todos os outros comportamentos inapropriados sexualmente, conforme definido pela Política e várias outras leis e regulamentos aplicáveis.</p>
                            <p>O assédio sexual acontece quando qualquer uma das seguintes situações relacionadas ao comportamento inapropriado sexualmente ocorre:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>A submissão à conduta inadequada listada acima, seja explicitamente ou implicitamente, é feita como um termo ou condição de um emprego de um indivíduo.</li>
                                <li>A submissão ou rejeição à conduta inadequada listada acima por um indivíduo é usada como base para decisões de trabalho que afetam tal indivíduo.</li>
                                <li>Tal conduta tem o objetivo ou efeito de interferir de forma não razoável no desempenho do trabalho de uma pessoa ou criar um ambiente de trabalho intimidador e hostil.</li>
                            </ul>
                            <ol start={26} className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p>Os mesmos padrões de comportamentos aceitáveis no ambiente de trabalho também se aplicam a todas as atividades de negócios patrocinadas pela empresa, que acontecem fora do ambiente de trabalho. Atividades de negócios fora do ambiente de trabalho, incluindo entretenimento, não devem ser conduzidas em estabelecimentos onde entretenimentos com sexo explícito ou outros inadequados são oferecidos. Os funcionários devem ser cautelosos para não se envolverem em qualquer atividade relacionada ao trabalho (dentro ou fora do ambiente de trabalho) que viole esta Política de Prevenção contra Assédio e Discriminação.</p>
                                </li>
                            </ol>
                            <p>Os exemplos de assédio sexual e comportamento proibido acima listados, não visam ser uma lista compreensiva de comportamentos proibidos e nem sempre constituem assédio ou discriminação ilegal. No entanto, a empresa proíbe condutas que violem a lei, assim como condutas que, apesar de não serem ilegais, continuam sendo determinadas pela empresa como inapropriadas no ambiente de trabalho. Isso inclui eventos patrocinados pela empresa ou quando os funcionários estão envolvidos em negócios em nome da empresa ou em outras atividades externas relacionadas ao emprego ou ao trabalho (por exemplo, atividades sociais de equipe), seja durante ou após o horário comercial normal.</p>
                            <p className="text-sm text-gray-400 mt-4">Data de Vigência: 14/09/2021.</p>
                            <p className="font-semibold mt-2 text-white">TIAGO JOSÉ GOULART</p>
                        </div>
                    </section>

                    {/* Política de Compliance */}
                    <section id="compliance" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700 font-serif">
                            Política de Compliance
                        </h2>
                        <div className="space-y-4 text-gray-200">
                            <p>
                                Esta Política tem o objetivo de disseminar a prática de Compliance por todos os níveis de hierarquia da Companhia, demonstrando a importância de agir em conformidade com as regras do Código de Conduta e Integridade, Políticas Corporativas, normativos internos e legislação aplicável ao próprio negócio.
                            </p>
                            <p>
                                A Política visa orientar a função de Compliance com a definição de diretrizes, papéis e responsabilidades, bem como abrange todas as Unidades da Mentto e seus colaboradores de todos os níveis hierárquicos. O cumprimento desta Política fortalece a ética, governança e eficiência na Companhia, além de preservar sua reputação e perenidade.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Definição</h3>
                            <p>
                                <i>Compliance:</i> a expressão Compliance deriva do verbo inglês “to comply”, que significa dever de cumprir, de estar em conformidade e fazer cumprir as regras internas e externas à Mentto. Na hipótese de não conformidade a empresa fica sujeita a sanções, perda financeira, danos à reputação e a imagem.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Programa de Integridade Mentto</h3>
                            <p>
                                O Programa de Integridade tem o objetivo de garantir que a condução dos negócios da Mentto ocorra conforme os mais elevados padrões de ética e transparência em todas suas atividades. Os pilares que sustentam o Programa de Integridade são:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Conhecimento e gerenciamento dos riscos de Compliance;</li>
                                <li>Comprometimento com a Cultura de Integridade;</li>
                                <li>Gestão efetiva de Compliance;</li>
                                <li>Regras claras: Código de Conduta e Integridade e Políticas Corporativas;</li>
                                <li>Sugerir controles internos e monitoramentos;</li>
                                <li>Comunicação e Treinamento;</li>
                                <li>É responsabilidade de todos os empregados da Mentto a execução e cumprimento do Programa de Integridade.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Estrutura da Área de Compliance</h3>
                            <p>
                                A estrutura da área de Compliance é ligada a Diretoria Executiva com acesso irrestrito à Alta Administração e independência na condução de ações com todas as áreas da Mentto, de modo a garantir a imparcialidade em todas as suas operações e controles.
                            </p>
                            <p>
                                A área de Compliance tem sua principal função realizar a implementação e desenvolvimento do Programa de Integridade, além de exercer atuação em outras funções, a saber: preventiva, normativa, educativa, monitoramento e consultiva.
                            </p>
                            <p>
                                A função preventiva tem o objetivo de identificar, avaliar e responder os riscos de integridade e combater situações de indícios de condutas irregulares e de corrupção que possam causar prejuízos materiais e reputacionais à Companhia. A avaliação de integridade a fornecedores, terceiros e parceiros também faz parte da função preventiva, sendo responsável por prevenir os riscos de corrupção e reputação no relacionamento com o público externo.
                            </p>
                            <p>
                                A função normativa busca orientar na criação e revisão de Políticas Corporativas, assessorar na criação e/ou melhorias de processos e normativos que assegurem a observância das diretrizes de ética e integridade na atividade das áreas.
                            </p>
                            <p>
                                A função educativa visa promover a comunicação e capacitar por meio de treinamentos periódicos sobre o Programa de Integridade, Políticas de Compliance e o Código de Conduta e Integridade da Mentto, todas as partes interessadas ao negócio.
                            </p>
                            <p>
                                A função de monitoramento objetiva garantir e aprimorar a estrutura de controles internos dos principais riscos de integridade para assegurar sua gestão eficaz.
                            </p>
                            <p>
                                A função consultiva é responsável por esclarecer dúvidas e auxílio em relação à aplicação Código de Conduta e Integridade, políticas, processos e demais normativos relativos à ética e Compliance, além de sinalizar as áreas a necessidade de desenvolvimento ou revisão de processos/procedimentos.
                            </p>
                            <p>
                                Para o desempenho de suas funções a área de Compliance pode solicitar a diversas áreas o compartilhamento de relatórios, documentos, emails e demais informações necessárias ao exercício de sua atividade.
                            </p>
                            <p>
                                A área de Compliance, na execução e efetividade do Programa de Integridade, por fim, poderá ainda, avaliar parecer sobre riscos de integridade, desvios de conduta e descumprimentos dos normativos internos que venham a ser identificados, esclarecer as eventuais dúvidas de interpretação dos documentos internos, resolver conflitos de interesses.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Interfaces Da Área De Compliance Com As Demais Áreas</h3>
                            <p>
                                A área de Compliance possui interfaces com diversas áreas para promover a efetividade do Programa de Integridade e demais funções de Compliance. Todas as Áreas são responsáveis pela efetividade do Programa de Integridade e deverão comunicar qualquer suspeita de irregularidade no cumprimento das normas internas e dispositivos legais aplicáveis aos negócios que gerem riscos ao Compliance, tais como, erros, indícios de fraudes, corrupção, desvios éticos e conflitos de interesses.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Canal de Comunicação</h3>
                            <p>
                                A empresa possui um canal de consulta ética, com o objetivo de facilitar e esclarecer o atendimento de dúvidas de todos os empregados da Mentto relacionadas à aplicação do Código de Conduta e Integridade, das Políticas de Compliance no dia a dia e sobre dilemas éticos. O Canal de Comunicação está disponibilizado na página da Intranet.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Comunicação Treinamento de Dúvidas</h3>
                            <p>
                                A Mentto manterá um plano de comunicação e treinamento periódico e constante para seus empregados, com intuito de divulgar e conscientizar da importância do cumprimento das regras do Código de Conduta e Integridade, das Políticas Corporativas e dos valores da Companhia.
                            </p>
                            <p className="font-semibold mt-4 text-white">TIAGO JOSÉ GOULART</p>
                        </div>
                    </section>

                    {/* Política de Privacidade */}
                    <section id="privacidade" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700 font-serif">
                            Política de Privacidade
                        </h2>
                        <div className="space-y-4 text-gray-200">
                            <p>
                                A empresa Mentto, está comprometida com a proteção de dados e informações pessoais que são compartilhados pelos usuários conforme definido abaixo. Essa política define como os dados são protegidos nos processos de coleta, registro, armazenamento, uso, compartilhamento, enriquecimento e eliminação, para além da <strong>Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).</strong>
                            </p>
                            <p><strong>Recomendamos a leitura cuidadosa deste documento.</strong></p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Definições</h3>
                            <p><strong>DADOS PESSOAIS:</strong> A lei brasileira define “dado pessoal” como todo aquele que se refira a uma pessoa física identificada ou identificável. Na prática, a expressão compreende todo dado que permite identificar uma pessoa, como por exemplo: nome, CPF, n° de identidade, fotografia etc. Além disso, os dados pessoais podem ser sensíveis ou não.</p>
                            <p><strong>DADOS PESSOAIS SENSIVÉIS:</strong> Um dado pessoal sensível é aquele que se refere à origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</p>
                            <p><strong>USUÁRIO:</strong> Pessoa física que interaja com a Mentto em situações onde tenha a possibilidade de disponibilizar seus dados pessoais. Exemplos: pessoas que naveguem em seu website, portais, redes sociais, funcionários, terceiros ou prestadores de serviços, dentre outros.</p>
                            <p><strong>TERMO DE CONSENTIMENTO:</strong> Documento que coleta manifestação favorável ao tratamento dos dados pessoais para finalidades determinadas.</p>
                            <p><strong>SUB-CONTRATADA:</strong> Empresas de planos de saúde e outros seguros; empresa de cartão corporativo; licença de softwares contratados para o gerenciamento da gestão de processos da empresa; servidores ‘cloud’ devidamente certificados em relação à Lei Geral de proteção de dados.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">COLETA DE DADOS PESSOAIS</h3>
                            <p>
                                A coleta de dados pessoais é necessária para que a Mentto ofereça serviços e funcionalidades adequados às necessidades de seus colaboradores e usuários, fazendo com que a experiência pessoal seja sempre a mais cômoda e satisfatória possível além de atingirem os fins a que se propuserem.
                            </p>
                            <p>Ao solicitar dados pessoais e dados pessoais sensíveis, a Mentto solicitará o consentimento do usuário por meio do Termo de Consentimento, seguindo e cumprindo as obrigações legais e regulatórias.</p>
                            <p>A utilização de todo e qualquer website e/ou aplicativos desenvolvidos pela Mentto, não implica necessariamente a disponibilização de dados pessoais. No entanto, se o usuário pretender contactar a empresa para qualquer tipo de solicitação, seus dados serão solicitados, através de formulário eletrônico acompanhados dos consentimentos necessários à uma navegação segura.</p>
                            <p>Quando o dado coletado for de menores de idade será requisitada a obtenção do consentimento inequívoco e informado de um dos pais e referidos dados serão protegidos e atendendo a necessidade de privacidade da criança.</p>
                            <p>Em atendimentos presenciais, tais como entrevistas, é necessário, igualmente, o fornecimento de dados pessoais, que serão coletados por um atendente responsável, que realizará o registro das informações igualmente solicitando o consentimento necessário.</p>
                            <p>Os dados pessoais solicitados devem ser informados pelo colaborador para que seja possível a formalização do vínculo e oferecimento de benefícios.</p>
                            <p>A coleta de dados pessoais em razão da prestação de serviços de tecnologia será autorizada e filtrada de acordo com a finalidade e adequação do contrato de prestação de serviços devendo ainda se orientar pelas limitações e diretrizes DO CONTRATANTE.</p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Utilização de Dados Pessoais</h3>
                            <p>A Mentto é responsável pelo tratamento dos dados pessoais dos seus COLABORADORES, USUÁRIOS e por seu encaminhamento às subcontratadas designadas e devidamente informadas aos titulares.</p>
                            <p>Os dados pessoais dos seus colaboradores, incluindo aqueles obtidos de maneira direta ou indireta, serão tratados para efeitos de manutenção do vínculo de trabalho, de modo compatível inclusive com os benefícios que forem oferecidos e aderidos.</p>
                            <p>Os dados pessoais dos usuários que acessarem o site da empresa para os fins ali designados terão a opção de envio de informações, orientada pelos consentimentos necessários informando o nível de compartilhamento, armazenamento e ainda sobre a exclusão dos dados enviados.</p>
                            <p>Os dados pessoais que porventura a empresa acessar em razão da sua prestação de serviços serão regidos pelas exigências do fornecedor amparados pela forma da Lei de Proteção de Dados Pessoais e as medidas técnicas de segurança implementadas em sua infraestrutura.</p>
                            <p>Todos os dados serão utilizados considerando:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Finalidade:</strong> presume que os propósitos devem ser específicos e legítimos.</li>
                                <li><strong>Adequação:</strong> exige que a coleta seja compatível com a atividade fim do CONTROLADOR.</li>
                                <li><strong>Necessidade:</strong> pressupõe que a coleta deve ser mínima para atingir a finalidade. Qualquer excesso pode ser interpretado como abuso, assim como qualquer intenção de mascarar o manipular informações indiretamente pode comprometer a legalidade dos atos dos Agentes de Tratamento.</li>
                                <li><strong>Transparência:</strong> exige que os agentes de tratamento de dados ofereçam aos titulares informações sobre como os dados serão armazenados, garantindo a oportunidade de revisão e revogação do consentimento.</li>
                                <li><strong>Métodos de Segurança e Prevenção (Anonimização e Criptografia):</strong> devem ser informados e comprovados.</li>
                                <li><strong>Prestação de Contas:</strong> implica na disponibilização de relatório para comprovar o cumprimento dos critérios de tratamento de dados.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Compartilhamento de Dados Pessoais</h3>
                            <p>
                                Poderá haver transmissão e comunicação de dados pessoais entre os departamentos financeiro e pessoal da Mentto, com acesso de colaboradores designados, sempre que necessário, para VIABILIZAR o melhor relacionamento junto ao colaborador, pagamentos de salários, e gestão de benefícios ou ainda para o cumprimento de obrigações fiscais e previdenciárias junto à Receita Federal do Brasil e demais órgão de regulamentação.
                            </p>
                            <p>
                                O departamento comercial terá acesso restrito aos dados pessoais de qualquer colaborador devendo sempre recorrer à ciência do mesmo para utilização de seus dados em propostas e termos de responsabilidade técnica.
                            </p>
                            <p>
                                A Mentto poderá, ainda, transmitir os seus dados a entidades contratadas que de alguma forma precisem atuar colaborando na entrega do serviço ou formalização dos vínculos.
                            </p>
                            <p>
                                A empresa poderá ainda, transmitir dados pessoais dos Usuários a terceiros quando tais comunicações de dados se tornem necessárias ou adequadas (i) à luz da lei aplicável, (ii) no cumprimento de obrigações legais/ordens judiciais, (iii) por determinação da Autoridade Nacional de Proteção de Dados ou de outra autoridade de controle competente, ou (iv) para responder a solicitações de autoridades públicas ou governamentais.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Transferência Internacional de Dados</h3>
                            <p>
                                A Mentto não aluga, vende e tampouco libera dados a terceiros com a finalidade de permitir qualquer comercialização de seus serviços, mas informa que seus dados poderão ser transferidos e mantidos em ambiente fora do seu município, estado ou país onde as leis de proteção de dados podem ser diferentes das vigentes no Brasil, mas asseguram grau de proteção de dados pessoais adequado ao previsto na Lei Geral de Proteção de Dados.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conservação de Dados Pessoais</h3>
                            <p>
                                Os dados são conservados pelo período estritamente necessário para cada uma das finalidades descritas acima e/ou de acordo com prazos legais vigentes. Em caso de litígio pendente, os dados podem ser conservados até trânsito em julgado da decisão.
                            </p>
                            <p>
                                Adicionalmente, a Mentto se compromete a manter em funcionamento todos os meios técnicos ao seu alcance para evitar a perda, má utilização, alteração, acesso não autorizado e apropriação indevida dos dados pessoais de seus colaboradores, usuários e clientes. Em qualquer caso, note-se que, circulando os dados em rede internet aberta, não é possível eliminar totalmente o risco de acesso e utilização não autorizados, pelo que o usuário deverá programar medidas de segurança adequadas para a navegação no website.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Direitos dos Titulares de Dados</h3>
                            <p>
                                Nos termos da legislação aplicável, o titular do dado poderá a qualquer tempo solicitar o acesso aos dados que lhe digam respeito, bem como a sua retificação, eliminação ou a limitação de uso do dado pessoal, a portabilidade dos seus dados, ou ainda opor-se ao seu tratamento, exceto nos casos previstos em lei. Poderá exercer estes direitos mediante pedido escrito.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Páginas de Terceiros</h3>
                            <p>
                                Através de seu website, a Mentto disponibiliza conexão para websites de terceiros, os quais estão sujeitos a Políticas de Privacidade independentes. Esta Política de Privacidade de dados não se aplica a tais websites e não nos responsabilizamos pela forma como os dados dos usuários são tratados por parte dos referidos terceiros.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conteúdo do Site e sua Atualização</h3>
                            <p>
                                Todo o conteúdo existente no site é de propriedade da empresa e sua reprodução – total ou parcial – para uso comercial ou editorial ou republicação na internet deve ser feita de forma autorizada e obrigatoriamente citando a fonte e incluindo o link do site para o conteúdo original (lei 9.610/98). Fica permitida a utilização do conteúdo para trabalhos escolares, desde que não sejam republicados em qualquer mídia.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Reclamações e Dúvidas</h3>
                            <p>
                                Caso tenha qualquer dúvida relacionada com o tratamento dos seus dados pessoais e com os direitos que lhe são conferidos pela legislação aplicável e, em especial, referidos nessa Política, poderá acionar o contato desejado através do e-mail: <a href="mailto:lgpd@mentto.com.br" className="text-primary hover:underline">lgpd@mentto.com.br</a>.
                            </p>
                            <p>
                                O titular de dados tem ainda o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados conforme previsto em lei.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Política de Cookies</h3>
                            <p>
                                Coletamos cookies do navegador – pequenos pedaços de dados que são enviados para o seu navegador de um servidor da Web e colocados no disco rígido do navegador para fins de manutenção de registros e, às vezes, para rastrear informações analíticas. Os usuários podem escolher configurar seu navegador para recusar cookies ou para alertá-lo quando os cookies estiverem sendo enviados. Se o fizerem, observe que algumas partes do Site podem não funcionar adequadamente e alguns recursos podem não funcionar conforme o esperado.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Uso das Informações Coletadas</h3>
                            <p>A Mentto pode coletar e usar informações pessoais dos usuários para os seguintes fins:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Para fornecer serviços:</strong> Quaisquer informações de identificação pessoal enviadas pelos usuários serão usadas para responder às suas perguntas e / ou outras solicitações ou perguntas.</li>
                                <li><strong>Para melhorar a experiência do usuário:</strong> Podemos usar as informações agregadas para entender como nossos Usuários, como grupo, usam os serviços e recursos fornecidos em nosso Site.</li>
                                <li><strong>Para melhorar o atendimento ao cliente:</strong> Suas informações nos ajudam a responder com mais eficácia às suas solicitações de atendimento ao cliente e necessidades de suporte.</li>
                                <li><strong>Para enviar e-mails periódicos:</strong> Em alguns casos, você pode receber e-mails de marketing que incluem atualizações da empresa, informações de produtos ou serviços relacionados, etc. Se a qualquer momento o usuário quiser cancelar o recebimento de e-mails futuros, incluímos uma opção de cancelamento na parte inferior de cada e-mail.</li>
                            </ul>
                            <p>
                                Caso o titular de dados deseje acessar, corrigir, excluir, migrar suas informações pessoais que armazenamos ou restringir o processamento de suas informações pessoais, envie sua solicitação para e-mail: <a href="mailto:lgpd@mentto.com.br" className="text-primary hover:underline">lgpd@mentto.com.br</a>.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Alterações a Política de Privacidade</h3>
                            <p>
                                Poderemos alterar esta Política de Privacidade de dados a qualquer momento. Estas alterações serão devidamente disponibilizadas e, caso represente uma alteração substancial relativamente à forma como os seus dados serão tratados, A Mentto manterá contato conforme dados disponibilizados.
                            </p>
                            <p className="text-sm text-gray-400 mt-4">Data de Vigência: 14/09/2021.</p>
                            <p className="font-semibold mt-2 text-white">TIAGO JOSÉ GOULART</p>
                        </div>
                    </section>

                    {/* Política de Marketing */}
                    <section id="marketing" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700 font-serif">
                            Política de Marketing
                        </h2>
                        <div className="space-y-4 text-gray-200">
                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Sobre essa Política</h3>
                            <p>
                                O objetivo desta política é alinhar ações de marketing da Mentto conjuntamente de suas políticas e códigos. A nossas ações de marketing visam proporcionar uma relação transparente entre a nossa empresa e o titular de dados.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Definições Essenciais</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Ações de marketing:</strong> Ações ou projetos para a venda e aceitação de produtos ou serviços da Mentto ou de seus parceiros comerciais.</li>
                                <li><strong>Partes interessadas:</strong> São eles os públicos interessados na empresa, ou aqueles que assumam algum risco, em face da mesma.</li>
                                <li><strong>Merchandising:</strong> é um conjunto de atividades e técnicas mercadológicas que dizem respeito à colocação de um produto no mercado em condições competitivas, adequadas e atraentes para o consumidor.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Objetivo</h3>
                            <p>
                                Esta política visa estabelecer as formas e modelos de marketing que a Mentto utiliza. A presente política visa nortear as fases do processo de marketing. A Mentto tem vinculado suas ações ao compromisso com a sociedade; sustentabilidade; diversidade; cultura e integridade.
                                A Mentto segue preceitos e valores que traçam todas as suas relações com as partes interessadas, não seria diferente em todas as ações de marketing.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conteúdo das Propagandas</h3>
                            <p>
                                O conteúdo das propagandas comerciais da Mentto é sempre claro, para que o cliente possa entender tudo aquilo que está sendo proporcionado de forma transparente, além de estar sempre de acordo com os compromissos éticos da empresa. Em nenhum momento trazemos propagandas falsas ou enganosas.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conteúdo do merchandising</h3>
                            <p>
                                A Mentto disponibiliza informações sobre seus produtos e serviços de forma clara e o mais completa possível, independente do meio em que foi transmitido.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Conteúdo do marketing direto</h3>
                            <p>
                                Importante ponto a frisar é que a Mentto, em todo seu marketing direto, usa apenas a lista de dados de destinatários autorizados. Não enviamos e-mail marketing sem opção de opt-out para o cliente da listagem de marketing, ademais realizamos telefonemas apenas em horários permitidos por lei, respeitando assim, a privacidade do cliente.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Disposições gerais</h3>
                            <p>
                                A Mentto promove um ambiente de trabalho sadio, organizado e harmonioso, visando a valorização dos ser humano, a saúde e a segurança. A diversidade também é fonte da nossa cultura e, por isso, é inaceitável qualquer manifestação de discriminação e preconceito de qualquer natureza, tampouco atitudes que envolvam violência física ou verbal, e qualquer tipo de assédio. Todas as atitudes em prol dos direitos humanos, condições de trabalho, proteção ao meio ambiente e combate à corrupção, discriminação e assédio estão reforçados no Código de Ética.
                            </p>
                            <p>
                                Além disso, a Mentto, sempre segue as leis vigentes e respeita a livre concorrência. Repudia a exploração de mão de obra infantil, o trabalho escravo ou degradante e a corrupção em todas as suas formas, inclusive na sua relação com fornecedores e parceiros.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 font-serif">Proteção de Dados</h3>
                            <p>
                                A Mentto possui uma Política de Privacidade para tratar especificamente sobre os dados coletados e tratados. Acesse a nossa Política de Privacidade em <a href="https://mentto.com.br/" className="text-primary hover:underline">https://mentto.com.br</a>.
                            </p>
                            <p className="text-sm text-gray-400 mt-4">Data da última atualização desta Política: 14/10/2021.</p>
                        </div>
                    </section>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-gray-700">
                    <Link href="/termos-de-uso-e-politicas-de-privacidade/titular-de-dados" className="group flex flex-col items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-xl text-white bg-secondary hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <span className="text-lg font-bold font-serif">Acesso à informação</span>
                        <span className="text-sm opacity-90">Titular de Dados</span>
                    </Link>
                    <Link href="/termos-de-uso-e-politicas-de-privacidade/comunicacao-de-incidente" className="group flex flex-col items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-xl text-white bg-tertiary hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                        <span className="text-lg font-bold font-serif">Comunicação de Incidente</span>
                        <span className="text-sm opacity-80">Segurança de Dados</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
