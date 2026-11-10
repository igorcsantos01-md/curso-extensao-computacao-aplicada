export interface CertificateAxis {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  workload: string;
  topics: string[];
}

export interface ImrdSectionData {
  id: 'I' | 'M' | 'R' | 'D';
  letter: string;
  title: string;
  subtitle: string;
  coreQuestion: string;
  proportion: string;
  recommendedTense: string;
  keyElements: string[];
  modelExcerpt: {
    articleTitle: string;
    context: string;
    badExample: string;
    goodExample: string;
    editorialNote: string;
  };
  commonPitfalls: string[];
}

export interface CitationComparison {
  id: string;
  category: string;
  sourceDescription: string;
  vancouverRule: string;
  vancouverExample: string;
  vancouverInText: string;
  abntRule: string;
  abntExample: string;
  abntInText: string;
  indexingTip: string;
}

export interface ExamQuestion {
  id: number;
  axis: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CERTIFICATE_01_DATA = {
  certificateNumber: '01',
  bookNumber: '01/2023',
  sheetNumber: 'Folha 18',
  code: 'EMS-EXT-2023-0901',
  controlKey: '0901-7027-9457-9A3C',
  sha256: '4a9c8e12b7d03f56a1829e40c6b51d29e8f17a63b4c52d90f1837e2a5b6c0901',
  canonicalVercelUrl: 'https://extensao-escrita-cientifica-1.vercel.app/?codigo=EMS-EXT-2023-0901#validador',
  holder: {
    name: 'LUCAS GONÇALVES SILVEIRA',
    role: 'Médico',
    cpf: '702.794.941-57',
    institution: 'Centro Universitário Alfredo Nasser (UNIFAN)',
    fullLine: 'Médico | CPF: 702.794.941-57 | Centro Universitário Alfredo Nasser (UNIFAN)',
  },
  issuers: {
    editora: {
      name: 'EDITORA MENTE E SAÚDE',
      cnpj: '51.372.335/0001-71',
      department: 'Conselho Editorial e Extensão Científica',
      signerName: 'BÁRBARA LIMA DOS SANTOS',
      signerRole: 'Editora-Chefe e Coordenadora de Extensão Editorial',
      signatureAsset: '/assets/aistudio/media_1794270244889_d9828f4a_dfbd9f11.png',
    },
    centro: {
      name: 'CENTRO PROFISSIONALIZANTE MARIA DALVA DE ARAÚJO',
      shortName: 'Centro Maria Dalva de Araújo',
      cnpj: '51.269.112/0001-83',
      signerName: 'JAMES ARAÚJO DE SANTANA',
      signerRole: 'Coordenador de Extensão e Projetos Educativos',
      logoAsset: '/assets/aistudio/media_1794270244557_de5fa01f_7a8c27b0.png',
    },
  },
  course: {
    programHeader: 'PROGRAMA INTERINSTITUCIONAL DE EXTENSÃO, COMUNICAÇÃO CIENTÍFICA E EDUCAÇÃO EM SAÚDE',
    certificateMainTitle: 'CERTIFICADO DE CURSO DE EXTENSÃO',
    title: 'Curso de Extensão EAD em Escrita Científica, Normas Editoriais (Vancouver/ABNT) e Publicação de Artigos Biomédicos',
    modality: 'Curso de Extensão',
    editalCategory: 'Item 09 - Atividades Extracurriculares: Cursos de extensão, estágios em instituições de ensino, cursos de língua e de computação, aprovação em concursos, congressos médicos (Pelo menos 30 horas por certificado)',
    period: '10 de abril a 05 de maio de 2023',
    workloadHours: 36,
    workloadText: '36 (trinta e seis) horas',
    workloadShort: '36h',
    grade: '9,6',
    status: 'APROVADO (Nota: 9,6)',
    issueLocationAndDate: 'Goiânia - GO, 12 de maio de 2023.',
    legalBasis: 'Lei nº 9.394/96 e Decreto nº 5.154/2004',
  },
  axes: [
    {
      id: 'eixo-1',
      code: 'Eixo I',
      title: 'Eixo I — Delineamento de Pesquisa e Arquitetura IMRD',
      subtitle: 'Redação Científica Biomédica e Estruturação de Manuscritos',
      description:
        'Formulação da pergunta de pesquisa clínica, construção da Introdução fundamentada, descrição reprodutível de Materiais e Métodos, apresentação de Resultados em tabelas/figuras e estruturação crítica da Discussão.',
      workload: '10h 00min',
      topics: [
        'Estratégia PICO/PECO para recorte de questão clínica investigativa',
        'Funil argumentativo da Introdução: estado da arte, lacuna do conhecimento e objetivo',
        'Desenho metodológico reprodutível, critérios de elegibilidade e desfechos primários',
        'Hierarquia de apresentação de Resultados sem redundância entre texto e ilustrações',
      ],
    },
    {
      id: 'eixo-2',
      code: 'Eixo II',
      title: 'Eixo II — Normalização Documental Internacional (Vancouver e ABNT)',
      subtitle: 'Diretrizes do ICMJE, Citações Diretas/Indiretas e Indexação Descritiva',
      description:
        'Padronização de referências bibliográficas segundo o International Committee of Medical Journal Editors (Estilo Vancouver) e normas ABNT (NBR 6023/10520), com uso de descritores DeCS/MeSH.',
      workload: '08h 00min',
      topics: [
        'Sistema numérico sequencial de Vancouver (ICMJE) e abreviaturas oficiais NLM/Index Medicus',
        'Sistema autor-data e regras de apresentação de citações conforme ABNT NBR 10520 e NBR 6023',
        'Seleção de vocabulário controlado em Ciências da Saúde: DeCS (BIREME/OPAS) e MeSH (PubMed)',
        'Padronização de DOI, PMID e metadados eletrônicos em periódicos médicos',
      ],
    },
    {
      id: 'eixo-3',
      code: 'Eixo III',
      title: 'Eixo III — Ética Editorial, Integridade Científica e Fluxo Peer Review',
      subtitle: 'Boas Práticas em Publicação Médica, COPE e Periódicos com Corpo Editorial',
      description:
        'Diretrizes éticas em pesquisa biomédica, prevenção ao plágio e autoplágio, escolha de periódicos científicos com ISSN e corpo editorial, carta de apresentação (cover letter) e resposta aos revisores.',
      workload: '10h 00min',
      topics: [
        'Critérios de autoria científica segundo o ICMJE e declaração de conflitos de interesse',
        'Diretrizes do COPE (Committee on Publication Ethics), prevenção ao plágio e salame science',
        'Auditoria de indexadores (SciELO, PubMed/MEDLINE, Scopus), ISSN e prevenção a periódicos predatórios',
        'Redação estratégica de Cover Letter ao Editor-Chefe e carta ponto a ponto (Response to Reviewers)',
      ],
    },
    {
      id: 'eixo-4',
      code: 'Eixo IV',
      title: 'Eixo IV — Estudo Dirigido em Literatura Metodológica e Avaliação Final',
      subtitle: 'Prática de Revisão Crítica de Artigos e Exame de Certificação',
      description:
        'Leitura dirigida do guia metodológico da Editora Mente e Saúde, análise estrutural de artigos médicos publicados e aprovação na avaliação somativa online com aproveitamento de 96% (Nota 9,6).',
      workload: '08h 00min',
      topics: [
        'Aplicação de checklists internacionais de relato científico (CONSORT, STROBE, PRISMA e CARE)',
        'Análise crítica de coerência interna entre objetivo proposto, método estatístico e conclusão clínica',
        'Revisão de estilo científico: concisão, precisão terminológica, voz ativa/passiva e clareza sintática',
        'Exame somativo final de proficiência metodológica (Nota obtida pelo titular: 9,6 / 10,0)',
      ],
    },
  ] as CertificateAxis[],
};

export const IMRD_EXPLORER_DATA: ImrdSectionData[] = [
  {
    id: 'I',
    letter: 'I',
    title: 'Introdução (Introduction)',
    subtitle: 'O Funil Lógico: Do Contexto Epidemiológico ao Objetivo Clínico',
    coreQuestion: 'Qual é o problema clínico-científico e por que este estudo era necessário?',
    proportion: '10% a 15% do manuscrito (3 a 4 parágrafos densos)',
    recommendedTense: 'Presente do indicativo (fatos consolidados) e Pretérito perfeito (estudos prévios)',
    keyElements: [
      '1º Parágrafo: Relevância clínica, magnitude epidemiológica e impacto assistencial do tema.',
      '2º Parágrafo: O que a literatura atual já estabeleceu (síntese das evidências recentes).',
      '3º Parágrafo: A lacuna do conhecimento (gap científico) ou controvérsia ainda não resolvida.',
      '4º Parágrafo: O objetivo claro do estudo (alinhado à pergunta PICO) e a hipótese principal.',
    ],
    modelExcerpt: {
      articleTitle: 'Controle Glicêmico Intensivo e Progressão da Retinopatia Diabética Não Proliferativa',
      context: 'Parágrafo de fechamento da Introdução (Transição Lacuna → Objetivo)',
      badExample:
        'Existem muitos estudos sobre diabetes e problemas na retina, mas ainda precisamos saber melhor como a hemoglobina glicada afeta os pacientes da nossa região. Por isso resolvemos fazer uma revisão de prontuários para ver o que acontecia.',
      goodExample:
        'Embora ensaios multicêntricos demonstrem redução do risco microvascular com o controle glicêmico estrito, permanece escassa a evidência longitudinal sobre a velocidade de progressão da retinopatia não proliferativa moderada em coortes ambulatoriais do Sistema Único de Saúde. Assim, este estudo teve como objetivo avaliar a associação entre a variabilidade da HbA1c em 24 meses e a progressão fundoscópica em pacientes adultos com diabetes mellitus tipo 2.',
      editorialNote:
        'Observe como a versão revisada situa a lacuna específica (variabilidade da HbA1c em coorte ambulatorial do SUS) e enuncia o objetivo com verbo preciso, população, exposição, tempo de seguimento e desfecho.',
    },
    commonPitfalls: [
      'Transformar a Introdução em uma revisão histórica exaustiva desde a antiguidade.',
      'Antecipar resultados ou conclusões do próprio estudo no último parágrafo.',
      'Citar referências obsoletas (> 5 anos) para dados epidemiológicos dinâmicos sem justificativa.',
    ],
  },
  {
    id: 'M',
    letter: 'M',
    title: 'Métodos (Materials & Methods)',
    subtitle: 'A Engenharia da Reprodutibilidade e Rigor Ético',
    coreQuestion: 'Como o problema foi investigado e como outro pesquisador poderia reproduzir o protocolo?',
    proportion: '25% a 30% do manuscrito (estruturado em subtópicos padronizados)',
    recommendedTense: 'Pretérito perfeito na voz passiva ou ativa impessoal ("Foram incluídos...", "Realizou-se...")',
    keyElements: [
      'Desenho do estudo, cenário clínico, período de recrutamento e diretriz seguida (STROBE/CONSORT/PRISMA).',
      'População, cálculo amostral, critérios explícitos de inclusão, exclusão e perda de seguimento.',
      'Protocolo de intervenção ou mensuração das variáveis preditoras e desfechos clínicos.',
      'Análise estatística detalhada (testes paramétricos/não paramétricos, nível de significância p < 0,05) e aprovação ética (CEP/CONEP / CAAE).',
    ],
    modelExcerpt: {
      articleTitle: 'Controle Glicêmico Intensivo e Progressão da Retinopatia Diabética Não Proliferativa',
      context: 'Subseção de Desenho do Estudo e Aspectos Éticos',
      badExample:
        'Foi feito um estudo retrospectivo olhando as fichas de 180 pacientes diabéticos atendidos no ambulatório entre 2021 e 2022. Os dados foram colocados no Excel e fizemos testes estatísticos para comparar os grupos.',
      goodExample:
        'Trata-se de um estudo de coorte retrospectivo, delineado segundo as recomendações da iniciativa STROBE, conduzido no Ambulatório de Endocrinologia e Retina entre janeiro de 2021 e dezembro de 2022. Foram elegíveis pacientes ≥ 18 anos com diagnóstico confirmado de DM2 há pelo menos 5 anos. As variáveis contínuas tiveram a normalidade aferida pelo teste de Shapiro-Wilk e foram comparadas pelo teste t de Student ou Mann-Whitney no software R (v. 4.2.1), adotando-se α = 0,05. O protocolo foi aprovado pelo Comitê de Ética em Pesquisa (CAAE 58492022.4.0000.5078).',
      editorialNote:
        'Revisores de periódicos indexados (SciELO/PubMed) avaliam primeiro a seção de Métodos: a menção ao guia STROBE, testes de normalidade, software com versão e registro CAAE blinda o manuscrito contra rejeição imediata (desk rejection).',
    },
    commonPitfalls: [
      'Omitir os critérios de exclusão ou não informar como dados faltantes (missing data) foram tratados.',
      'Incluir resultados numéricos da amostra (como média de idade encontrada) dentro de Métodos.',
      'Não especificar o número do parecer do Comitê de Ética em Pesquisa (CEP) e conformidade com a Declaração de Helsinque.',
    ],
  },
  {
    id: 'R',
    letter: 'R',
    title: 'Resultados (Results)',
    subtitle: 'A Exposição Objetiva da Evidência Empírica',
    coreQuestion: 'O que foi efetivamente encontrado nos dados coletados, sem juízo de valor?',
    proportion: '20% a 25% do manuscrito + 3 a 5 Tabelas/Figuras autoexplicativas',
    recommendedTense: 'Pretérito perfeito do indicativo ("Observou-se", "A taxa de remissão foi de...")',
    keyElements: [
      'Fluxo de seleção dos participantes e caracterização basal da amostra (Tabela 1 — Baseline).',
      'Apresentação dos desfechos primários seguidos dos desfechos secundários e análises de subgrupo.',
      'Medidas de efeito (Risco Relativo, Odds Ratio, Hazard Ratio) acompanhadas de Intervalo de Confiança de 95% (IC 95%) e valor de p exato.',
      'Complementaridade estrita: o texto destaca os padrões principais, enquanto as tabelas exibem a matriz completa de números.',
    ],
    modelExcerpt: {
      articleTitle: 'Controle Glicêmico Intensivo e Progressão da Retinopatia Diabética Não Proliferativa',
      context: 'Apresentação do Desfecho Primário',
      badExample:
        'O grupo com HbA1c descontrolada teve muito mais piora da retinopatia (p < 0,05), o que prova que os médicos precisam ajustar a insulina mais cedo, como já dizia a literatura.',
      goodExample:
        'Dos 214 pacientes inicialmente triados, 184 completaram o seguimento de 24 meses (média de idade de 61,4 ± 8,7 anos; 54,3% do sexo feminino). A progressão de pelo menos um estágio na escala ETDRS ocorreu em 31,2% (29/93) dos pacientes no tercil superior de variabilidade glicêmica, em comparação a 11,0% (10/91) no tercil inferior (RR = 2,84; IC 95%: 1,47–5,48; p = 0,0012; Tabela 2).',
      editorialNote:
        'Na seção de Resultados jamás se interpreta ou se compara com outros autores ("o que prova que...", "como dizia a literatura"). Fornecem-se proporções absolutas (n/N), percentuais, medida de associação (RR), IC 95% e p exato.',
    },
    commonPitfalls: [
      'Repetir no parágrafo todos os números que já estão visíveis nas colunas da tabela.',
      'Apresentar apenas "p < 0,05" ou "p = NS" sem informar a magnitude do efeito, o IC 95% e o valor exato de p.',
      'Inserir comentários especulativos ou justificativas fisiopatológicas antes da Discussão.',
    ],
  },
  {
    id: 'D',
    letter: 'D',
    title: 'Discussão (Discussion & Conclusion)',
    subtitle: 'OFunil Invertido: Da Síntese dos Achados à Aplicabilidade Clínica',
    coreQuestion: 'O que estes achados significam no contexto da ciência atual e como impactam a prática médica?',
    proportion: '30% a 35% do manuscrito (5 a 7 parágrafos estruturados)',
    recommendedTense: 'Pretérito perfeito (achados próprios) e Presente/Condicional (interpretação e comparação)',
    keyElements: [
      '1º Parágrafo: Resumo direto do achado principal respondendo ao objetivo da Introdução (sem repetir números exaustivos).',
      '2º ao 4º Parágrafos: Confronto crítico com estudos internacionais recentes (convergências, divergências e mecanismos biológicos plausíveis).',
      'Penúltimo Parágrafo: Forças metodológicas e reconhecimento transparente das limitações do estudo (viés de seleção, tamanho amostral, delineamento).',
      'Último Parágrafo (Conclusão): Síntese incisiva ligada ao objetivo e implicações práticas para a conduta clínica ou novas pesquisas.',
    ],
    modelExcerpt: {
      articleTitle: 'Controle Glicêmico Intensivo e Progressão da Retinopatia Diabética Não Proliferativa',
      context: 'Parágrafo de abertura da Discussão + Reconhecimento de Limitações',
      badExample:
        'A retinopatia diabética é uma doença grave no mundo todo. No nosso estudo vimos que 31,2% pioraram. Outros autores também acharam parecido. Nosso trabalho não teve limitações importantes e conclui que todos devem controlar o diabetes.',
      goodExample:
        'Os achados desta coorte demonstram que a elevada oscilação intraindividual da HbA1c, independentemente da média glicêmica anual isolada, associa-se a um risco quase três vezes maior de progressão da retinopatia diabética não proliferativa em 24 meses. Esta observação corrobora a hipótese do estresse oxidativo induzido por flutuações glicêmicas na microvasculatura retiniana. Como limitação inerente ao delineamento retrospectivo, destaca-se a impossibilidade de aferir a variabilidade glicêmica diária por monitorização contínua (CGM), embora a padronização trimestral laboratorial tenha mitigado o viés de aferição.',
      editorialNote:
        'Reconhecer limitações com maturidade metodológica — explicando como foram mitigadas — aumenta a credibilidade científica perante os revisores (peer reviewers).',
    },
    commonPitfalls: [
      'Iniciar a Discussão repetindo a revisão epidemiológica da Introdução.',
      'Extrapolar as conclusões além do que os dados suportam (ex.: afirmar causalidade definitiva em estudo transversal).',
      'Omitir as limitações metodológicas temendo que os revisores rejeitem o artigo.',
    ],
  },
];

export const CITATION_COMPARISONS: CitationComparison[] = [
  {
    id: 'journal-article',
    category: 'Artigo de Periódico Científico (Mais de 6 Autores)',
    sourceDescription: 'Artigo original publicado em periódico médico indexado no MEDLINE/PubMed com DOI.',
    vancouverRule:
      'Listam-se os 6 primeiros autores seguidos de "et al." Sobrenome seguido das iniciais sem pontos. Título do periódico abreviado conforme o catálogo NLM/Index Medicus (sem pontos nas abreviaturas). Ano;Volume(Fascículo):Páginas.',
    vancouverExample:
      '1. SilvaRM, Oliveira AC, Costa JB, Ferreira LM, Santos PQ, Almeida RT, et al. Glycemic variability and microvascular progression in type 2 diabetes: a 24-month cohort study. Arq Bras Oftalmol. 2023;86(2):112-9. doi: 10.5935/0004-2749.20230018.',
    vancouverInText:
      'A flutuação glicêmica acelerou a progressão microvascular em coortes sul-americanas¹,².',
    abntRule:
      'Conforme ABNT NBR 6023:2018, quando há 4 ou mais autores, pode-se indicar todos ou apenas o primeiro seguido da expressão "et al." em itálico. O título do periódico vai por extenso e em negrito. Local, volume, número, páginas e ano.',
    abntExample:
      'SILVA, R. M. et al. Glycemic variability and microvascular progression in type 2 diabetes: a 24-month cohort study. Arquivos Brasileiros de Oftalmologia, São Paulo, v. 86, n. 2, p. 112-119, mar./abr. 2023. DOI: 10.5935/0004-2749.20230018.',
    abntInText:
      'A flutuação glicêmica acelerou a progressão microvascular em coortes recentes (Silva et al., 2023).',
    indexingTip:
      'Descritores DeCS/MeSH recomendados: Retinopatia Diabética (Diabetic Retinopathy) · Hemoglobina A Glicada (Glycated Hemoglobin) · Estudos de Coortes (Cohort Studies).',
  },
  {
    id: 'systematic-review',
    category: 'Revisão Sistemática & Meta-Análise (Protocolo PRISMA)',
    sourceDescription: 'Revisão sistemática publicada na Cochrane Database / The Lancet com paginação eletrônica.',
    vancouverRule:
      'Até 6 autores são listados integralmente. O título do artigo mantém apenas a primeira letra em maiúscula (sentence case). Periódico abreviado pela NLM seguido da data, volume e identificador eletrônico.',
    vancouverExample:
      '2. Martinez-Castillo V, Chen H, Lindstrom P, Soares G. Anti-VEGF intravitreal therapy versus panretinal photocoagulation in proliferative diabetic retinopathy: a systematic review. Lancet Diabetes Endocrinol. 2022;10(9):641-54.',
    vancouverInText:
      'Revisões sistemáticas recentes demonstram não inferioridade funcional em 5 anos (2).',
    abntRule:
      'Os autores são separados por ponto e vírgula. O título do periódico ("The Lancet Diabetes & Endocrinology") recebe destaque tipográfico (negrito), seguido de local de publicação, volume, fascículo, paginação e ano.',
    abntExample:
      'MARTINEZ-CASTILLO, V.; CHEN, H.; LINDSTROM, P.; SOARES, G. Anti-VEGF intravitreal therapy versus panretinal photocoagulation in proliferative diabetic retinopathy: a systematic review. The Lancet Diabetes & Endocrinology, London, v. 10, n. 9, p. 641-654, Sept. 2022.',
    abntInText:
      'Segundo Martinez-Castillo et al. (2022, p. 648), a adesão ao seguimento é determinante.',
    indexingTip:
      'Na ABNT NBR 10520:2023, a chamada de autores entre parênteses utiliza letras maiúsculas e minúsculas: (Martinez-Castillo et al., 2022).',
  },
  {
    id: 'medical-book',
    category: 'Capítulo de Livro / Tratado Médico Especializado',
    sourceDescription: 'Capítulo específico dentro de tratado médico organizado por editores científicos.',
    vancouverRule:
      'Autor(es) do capítulo. Título do capítulo. In: Editor(es), editores. Título do livro. Edição. Cidade: Editora; Ano. p. página inicial-final.',
    vancouverExample:
      '3. Ávila M, Lavinsky J, Augusto C. Retinopatia diabética: fisiopatologia e classificação clínica. In: Conselho Brasileiro de Oftalmologia, editor. Série Oftalmologia Brasileira: Retina e Vítreo. 4ª ed. Rio de Janeiro: Cultura Médica; 2021. p. 215-38.',
    vancouverInText:
      'A quebra da barreira hematorretiniana interna antecede os microaneurismas visíveis³.',
    abntRule:
      'AUTOR DO CAPÍTULO. Título do capítulo. In: AUTOR/ORGANIZADOR DO LIVRO. Título do livro em negrito. Edição. Local: Editora, Ano. cap. X, p. XX-XX.',
    abntExample:
      'ÁVILA, M.; LAVINSKY, J.; AUGUSTO, C. Retinopatia diabética: fisiopatologia e classificação clínica. In: CONSELHO BRASILEIRO DE OFTALMOLOGIA (org.). Série Oftalmologia Brasileira: Retina e Vítreo. 4. ed. Rio de Janeiro: Cultura Médica, 2021. p. 215-238.',
    abntInText:
      'A quebra da barreira hematorretiniana interna antecede as lesões clínicas (Ávila; Lavinsky; Augusto, 2021).',
    indexingTip:
      'Use sempre a edição consultada e o intervalo exato de páginas do capítulo para garantir rastreabilidade em bancas acadêmicas.',
  },
  {
    id: 'clinical-guideline',
    category: 'Diretriz Clínica / Consenso Institucional Online',
    sourceDescription: 'Diretriz oficial de Sociedade Médica ou Ministério da Saúde disponível em meio eletrônico.',
    vancouverRule:
      'Entidade Autora. Título da diretriz [Internet]. Cidade: Editora/Entidade; Ano [citado em Ano Mês Dia]. Disponível em: URL.',
    vancouverExample:
      '4. Sociedade Brasileira de Diabetes. Diretrizes Oficiais da Sociedade Brasileira de Diabetes 2023 [Internet]. São Paulo: Clannad; 2023 [citado 2023 Abr 22]. Disponível em: https://diretriz.diabetes.org.br/',
    vancouverInText:
      'O rastreamento fundoscópico deve iniciar no momento do diagnóstico do DM2⁴.',
    abntRule:
      'ENTIDADE AUTORA. Título do documento em negrito. Local: Editora, Ano. Disponível em: URL. Acesso em: dia mês abreviado. ano.',
    abntExample:
      'SOCIEDADE BRASILEIRA DE DIABETES. Diretrizes Oficiais da Sociedade Brasileira de Diabetes 2023. São Paulo: Clannad, 2023. Disponível em: https://diretriz.diabetes.org.br/. Acesso em: 22 abr. 2023.',
    abntInText:
      'O rastreamento fundoscópico deve iniciar no ato do diagnóstico do DM2 (Sociedade Brasileira de Diabetes, 2023).',
    indexingTip:
      'Em periódicos internacionais (ICMJE), priorize diretrizes publicadas em revistas indexadas com DOI sempre que disponíveis.',
  },
];

export const SUBMISSION_CHECKLIST_ITEMS = [
  {
    id: 'chk-1',
    axis: 'Eixo I (IMRD)',
    title: 'Alinhamento Estrito entre Título, Objetivo (Introdução) e Conclusão',
    detail: 'O título reflete o desenho do estudo, a Introdução encerra com objetivo PICO claro e a Conclusão responde exatamente a esse objetivo.',
  },
  {
    id: 'chk-2',
    axis: 'Eixo I (Métodos)',
    title: 'Declaração de Aprovação pelo CEP/CONEP (Número CAAE) e Termo de Consentimento',
    detail: 'Requisito eliminatório em todos os periódicos biomédicos nacionais e internacionais (Resolução CNS nº 466/2012 e Declaração de Helsinque).',
  },
  {
    id: 'chk-3',
    axis: 'Eixo II (Vancouver/DeCS)',
    title: 'Validação de 3 a 6 Descritores Controlados no DeCS (BIREME) e MeSH (PubMed)',
    detail: 'Termos livres substituídos por descritores exatos em português, inglês e espanhol para indexação nas bases MEDLINE e SciELO.',
  },
  {
    id: 'chk-4',
    axis: 'Eixo II (ICMJE)',
    title: 'Padronização de Citações Sequenciais e Abreviaturas NLM nas Referências',
    detail: 'Todas as referências conferidas na ordem de aparição no texto, com títulos de revistas abreviados segundo o catálogo do Index Medicus e DOI ativo.',
  },
  {
    id: 'chk-5',
    axis: 'Eixo III (COPE)',
    title: 'Verificação de Originalidade (Anti-Plágio), Conflito de Interesses e Contribuição CRediT',
    detail: 'Declaração individual da contribuição de cada coautor (conceituação, curadoria de dados, redação, revisão crítica) conforme critérios do ICMJE.',
  },
  {
    id: 'chk-6',
    axis: 'Eixo III (Peer Review)',
    title: 'Carta de Apresentação (Cover Letter) Personalizada ao Editor-Chefe e Folha de Rosto Cega',
    detail: 'Manuscrito principal anonimizado para revisão duplo-cega (double-blind peer review) e Cover Letter destacando a originalidade clínica do achado.',
  },
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    axis: 'Eixo I — Arquitetura IMRD',
    question:
      'Em um artigo original sobre fatores prognósticos em cirurgia oftalmológica, em qual seção do padrão IMRD o autor deve declarar o cálculo do tamanho amostral, os critérios de exclusão e o protocolo aprovado pelo Comitê de Ética (CAAE)?',
    options: [
      'No último parágrafo da Introdução, logo após a justificativa clínica.',
      'Exclusivamente na seção de Materiais e Métodos, garantindo reprodutibilidade e conformidade ética.',
      'No primeiro parágrafo de Resultados, junto com a Tabela 1 de caracterização da amostra.',
      'Na seção de Discussão, dentro do parágrafo de forças e limitações do estudo.',
    ],
    correctIndex: 1,
    explanation:
      'Correto! A seção de Materiais e Métodos concentra todos os parâmetros de delineamento, elegibilidade, cálculo amostral, análise estatística e aprovação ética (CEP/CAAE), permitindo que revisores avaliem a validade interna antes de lerem os Resultados.',
  },
  {
    id: 2,
    axis: 'Eixo II — Estilo Vancouver (ICMJE)',
    question:
      'Segundo as normas do International Committee of Medical Journal Editors (Estilo Vancouver), como deve ser formatada na lista final uma referência de artigo de periódico com 8 autores?',
    options: [
      'Listar apenas o primeiro autor em caixa alta seguido de "et al." e colocar o ano entre parênteses logo após o nome.',
      'Listar os 6 primeiros autores (Sobrenome + iniciais sem pontos), seguidos de ", et al.", título do artigo, título do periódico abreviado (NLM), ano, volume, número e páginas.',
      'Listar todos os 8 autores separados por ponto e vírgula em ordem alfabética ao final do manuscrito.',
      'Incluir apenas o primeiro e o último autor, omitindo os coautores intermediários.',
    ],
    correctIndex: 1,
    explanation:
      'Correto! Pelo padrão ICMJE/Vancouver, listam-se os 6 primeiros autores seguidos da expressão ", et al.", utilizando a abreviatura oficial da National Library of Medicine (NLM) para o periódico.',
  },
  {
    id: 3,
    axis: 'Eixo II — Indexação Científica',
    question:
      'Para garantir que um manuscrito biomédico seja corretamente recuperado nas bases MEDLINE/PubMed e LILACS/SciELO, a seleção das palavras-chave (keywords) do resumo estruturado deve utilizar:',
    options: [
      'Palavras retiradas livremente do título do artigo pelo próprio autor.',
      'O vocabulário controlado DeCS (Descritores em Ciências da Saúde) e seu correspondente MeSH (Medical Subject Headings).',
      'Apenas siglas clínicas populares não catalogadas.',
      'Nomes comerciais de fármacos ou equipamentos médicos.',
    ],
    correctIndex: 1,
    explanation:
      'Correto! O uso de descritores oficiais DeCS/MeSH é exigência editorial das revistas indexadas na SciELO e PubMed para indexação temática padronizada.',
  },
  {
    id: 4,
    axis: 'Eixo III — Ética Editorial & Peer Review',
    question:
      'Ao receber o parecer de "Revisão Maior" (Major Revision) após avaliação por pares (peer review), qual é a conduta técnica recomendada pelas diretrizes do COPE e pelas boas práticas editoriais?',
    options: [
      'Submeter o mesmo artigo simultaneamente a outra revista para ganhar tempo.',
      'Elaborar uma Carta de Resposta Ponto a Ponto (Response to Reviewers) cordial e fundamentada em literatura, indicando exatamente as linhas alteradas na versão com marcas de revisão.',
      'Ignorar os questionamentos metodológicos do Revisor 2 caso o Revisor 1 tenha elogiado o texto.',
      'Alterar apenas a formatação das referências sem responder aos comentários sobre análise estatística.',
    ],
    correctIndex: 1,
    explanation:
      'Correto! A Carta de Resposta Ponto a Ponto (Point-by-Point Response) respondendo respeitosamente a cada comentário de cada revisor e indicando a página/linha modificada é o fator decisivo para o aceite final do manuscrito.',
  },
];
