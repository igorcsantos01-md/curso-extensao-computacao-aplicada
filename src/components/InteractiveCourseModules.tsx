import React, { useState } from 'react';
import {
  BookOpen,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileText,
  GraduationCap,
  Layers,
  Scale,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import {
  CERTIFICATE_01_DATA,
  CITATION_COMPARISONS,
  EXAM_QUESTIONS,
  IMRD_EXPLORER_DATA,
  SUBMISSION_CHECKLIST_ITEMS,
} from '../data/courseAndCertificateData';

export const InteractiveCourseModules: React.FC = () => {
  // Estado 1: Explorador IMRD
  const [selectedImrdId, setSelectedImrdId] = useState<'I' | 'M' | 'R' | 'D'>('I');
  const activeImrd =
    IMRD_EXPLORER_DATA.find((item) => item.id === selectedImrdId) || IMRD_EXPLORER_DATA[0];

  // Estado 2: Comparador Vancouver vs ABNT
  const [selectedCitationId, setSelectedCitationId] = useState<string>(CITATION_COMPARISONS[0].id);
  const [copiedCitationKey, setCopiedCitationKey] = useState<string | null>(null);
  const activeCitation =
    CITATION_COMPARISONS.find((item) => item.id === selectedCitationId) || CITATION_COMPARISONS[0];

  // Estado 3: Checklist de Submissão Peer Review & Acervo
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'chk-1': true,
    'chk-2': true,
    'chk-3': true,
    'chk-4': true,
    'chk-5': true,
    'chk-6': true,
  });
  const [selectedManualChapter, setSelectedManualChapter] = useState<number>(0);

  // Estado 4: Simulador do Exame Final de Proficiência Metodológica
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;
  const checklistPercentage = Math.round(
    (completedChecklistCount / SUBMISSION_CHECKLIST_ITEMS.length) * 100
  );

  const handleCopyCitation = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitationKey(key);
    setTimeout(() => setCopiedCitationKey(null), 2000);
  };

  const correctExamCount = EXAM_QUESTIONS.reduce((acc, q) => {
    return examAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const manualChapters = [
    {
      number: 'Caderno Didático 01',
      title: 'Delineamento PICO e Arquitetura Lógica IMRD em Manuscritos Biomédicos',
      pages: '48 páginas · Editora Mente e Saúde (2023)',
      summary:
        'Aborda a transição entre a dúvida clínica assistencial e a pergunta de pesquisa estruturada (População, Intervenção/Exposição, Comparador e Desfecho), detalhando a anatomia paragráfica da Introdução, Métodos, Resultados e Discussão segundo os guias CONSORT, STROBE e PRISMA.',
      keyTakeaway:
        'Regra de Ouro Editorial: Nunca inicie a redação pela Introdução. Construa primeiro as Tabelas e Figuras de Resultados, redija Materiais e Métodos, estruture a Introdução apontando para o objetivo e finalize com a Discussão.',
    },
    {
      number: 'Caderno Didático 02',
      title: 'Guia Prático de Normalização Documental: Estilo Vancouver (ICMJE) e ABNT Vigente',
      pages: '42 páginas · Editora Mente e Saúde (2023)',
      summary:
        'Manual comparativo com mais de 60 exemplos reais de referências médicas (artigos indexados no MEDLINE, revisões Cochrane, dissertações, diretrizes de sociedades médicas e bases governamentais DATASUS/IBGE) e indexação com vocabulário controlado DeCS/MeSH.',
      keyTakeaway:
        'Regra de Ouro Editorial: Em periódicos biomédicos internacionais, utiliza-se o sistema numérico sequencial de Vancouver com títulos de revistas abreviados segundo a National Library of Medicine (NLM) sem pontos.',
    },
    {
      number: 'Caderno Didático 03',
      title: 'Ética em Pesquisa, Diretrizes COPE, Cover Letter e Resposta aos Revisores (Peer Review)',
      pages: '38 páginas · Centro Profissionalizante Maria Dalva de Araújo & Editora Mente e Saúde',
      summary:
        'Estudo das resoluções CNS nº 466/2012 e 510/2016 (Plataforma Brasil / CAAE), critérios de autoria CRediT/ICMJE, auditoria contra periódicos predatórios e modelos comentados de Carta ao Editor-Chefe e resposta ponto a ponto aos pareceristas.',
      keyTakeaway:
        'Regra de Ouro Editorial: Cerca de 65% dos artigos aceitos em revistas Qualis A/PubMed recebem parecer inicial de "Major Revision". A aprovação final depende da clareza e diplomacia técnica da carta resposta aos revisores.',
    },
  ];

  return (
    <div className="no-print">
      {/* =====================================================================
          SEÇÃO 1: MATRIZ CURRICULAR DOS 4 EIXOS & EXPLORADOR INTERATIVO IMRD
         ===================================================================== */}
      <section id="curso-imrd" className="py-16 border-t border-[#E7E2DA] bg-[#FBF9F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Cabeçalho Editorial da Seção */}
          <div className="max-w-3xl">
            <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#064E3B] font-semibold">
              01. Arquitetura Pedagógica & Metodologia Científica (36 Horas)
            </p>
            <h2 className="font-editorial text-3xl lg:text-4xl font-bold text-[#1C1917] mt-1.5 text-balance">
              Estrutura Programática do Curso Nº 01 e Laboratório Interativo IMRD
            </h2>
            <p className="text-base text-stone-600 mt-3 leading-relaxed">
              O curso foi estruturado pela{' '}
              <strong className="font-semibold text-stone-900">Editora Mente e Saúde</strong> em
              parceria com o{' '}
              <strong className="font-semibold text-stone-900">
                Centro Profissionalizante Maria Dalva de Araújo
              </strong>{' '}
              para capacitar médicos e pesquisadores na redação, normalização e publicação de artigos
              originais e revisões sistemáticas em periódicos indexados.
            </p>
          </div>

          {/* Grade dos 4 Eixos Programáticos (36 Horas Totais) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATE_01_DATA.axes.map((axis, idx) => (
              <div
                key={axis.id}
                className="bg-white border border-[#E7E2DA] rounded-xl p-5 flex flex-col justify-between hover:border-[#064E3B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-stone-500 pb-3 border-b border-stone-100">
                    <span className="font-bold text-[#064E3B]">0{idx + 1} · {axis.code}</span>
                    <span className="font-bold text-[#B45309]">{axis.workload}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-stone-950 mt-3 leading-snug">
                    {axis.title.replace(/^Eixo [I|V]+ — /, '')}
                  </h3>
                  <p className="text-xs font-medium text-[#064E3B] mt-1">{axis.subtitle}</p>
                  <p className="text-xs text-stone-600 mt-3 leading-relaxed">{axis.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <p className="text-[11px] font-mono-tabular uppercase tracking-wider text-stone-400 mb-2">
                    Competências-Chave:
                  </p>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {axis.topics.slice(0, 2).map((topic, i) => (
                      <li key={i} className="leading-snug flex items-start gap-1.5">
                        <span className="text-[#B45309] font-bold">·</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* LABORATÓRIO INTERATIVO 1: EXPLORADOR DA ARQUITETURA IMRD */}
          <div className="mt-12 bg-white border border-[#D6CEBE] rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#064E3B] text-white px-6 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-emerald-200">
                  <Layers className="w-4 h-4 text-[#F59E0B]" />
                  <span>LABORATÓRIO INTERATIVO 01 · PADRÃO INTERNACIONAL ICMJE</span>
                </div>
                <h3 className="font-editorial text-2xl font-bold mt-1">
                  Dissecação Estrutural de Manuscrito Biomédico no Padrão IMRD
                </h3>
              </div>

              {/* Botões Segmentados IMRD */}
              <div className="flex items-center gap-1.5 bg-[#022C22] p-1.5 rounded-lg self-start">
                {IMRD_EXPLORER_DATA.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedImrdId(sec.id)}
                    className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedImrdId === sec.id
                        ? 'bg-[#B45309] text-white shadow-xs'
                        : 'text-emerald-100 hover:bg-[#064E3B]'
                    }`}
                  >
                    <span className="font-mono-tabular font-bold mr-1.5">{sec.letter}</span>
                    {sec.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Painel de Conteúdo do Eixo IMRD Selecionado */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Coluna Esquerda (5 cols): Diretrizes Estruturais e Erros Comuns */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono-tabular text-[#B45309] font-semibold">
                    Seção Selecionada · Proporção Ideal: {activeImrd.proportion}
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-stone-950 mt-1">
                    {activeImrd.title}
                  </h4>
                  <p className="text-sm font-medium text-[#064E3B] mt-0.5">
                    {activeImrd.subtitle}
                  </p>
                </div>

                <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4 space-y-2">
                  <p className="text-xs font-mono-tabular uppercase text-stone-500">
                    Pergunta Norteadora da Seção:
                  </p>
                  <p className="text-sm font-semibold text-stone-900">
                    “{activeImrd.coreQuestion}”
                  </p>
                  <p className="text-xs text-stone-600 pt-1 border-t border-[#E7E2DA]">
                    <strong>Tempo Verbal Recomendado:</strong> {activeImrd.recommendedTense}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono-tabular uppercase tracking-wider text-stone-500 font-semibold mb-3">
                    Elementos Obrigatórios na Redação:
                  </h5>
                  <ul className="space-y-2.5">
                    {activeImrd.keyElements.map((el, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                  <h5 className="text-xs font-mono-tabular uppercase tracking-wider text-amber-900 font-bold flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    Falhas que Geram Rejeição Editorial (Desk Rejection):
                  </h5>
                  <ul className="space-y-1.5 text-xs text-amber-950">
                    {activeImrd.commonPitfalls.map((pitfall, idx) => (
                      <li key={idx} className="leading-snug">
                        • {pitfall}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coluna Direita (7 cols): Comparativo Prático Antes vs. Depois (Auditoria Editorial) */}
              <div className="lg:col-span-7 bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-6 space-y-5">
                <div className="border-b border-[#E7E2DA] pb-3">
                  <p className="text-xs font-mono-tabular text-stone-500">
                    ESTUDO DE CASO EDITORIAL · {activeImrd.modelExcerpt.context}
                  </p>
                  <h5 className="font-editorial text-xl font-bold text-stone-950 mt-0.5">
                    Manuscrito Modelo: “{activeImrd.modelExcerpt.articleTitle}”
                  </h5>
                </div>

                {/* Redação Inadequada */}
                <div className="bg-red-50/60 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs font-mono-tabular font-bold text-red-900 mb-2">
                    <span>[X] REDAÇÃO INADEQUADA (VAGA / SEM RIGOR METODOLÓGICO)</span>
                    <span>Status: Rejeitado na Triagem</span>
                  </div>
                  <p className="text-sm text-stone-800 italic leading-relaxed">
                    “{activeImrd.modelExcerpt.badExample}”
                  </p>
                </div>

                {/* Redação Científica Padronizada */}
                <div className="bg-emerald-50/70 border border-emerald-300 rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs font-mono-tabular font-bold text-[#064E3B] mb-2">
                    <span>[✓] REDAÇÃO CIENTÍFICA PADRONIZADA (PADRÃO ICMJE / PUBMED / SCIELO)</span>
                    <span>Status: Aprovado p/ Peer Review</span>
                  </div>
                  <p className="text-sm text-stone-900 font-medium leading-relaxed">
                    “{activeImrd.modelExcerpt.goodExample}”
                  </p>
                </div>

                {/* Comentário da Editora-Chefe */}
                <div className="bg-white border border-[#E7E2DA] rounded-lg p-4">
                  <p className="text-xs font-mono-tabular uppercase text-[#B45309] font-bold mb-1">
                    Nota Técnica do Conselho Editorial (Editora Mente e Saúde):
                  </p>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {activeImrd.modelExcerpt.editorialNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 2: COMPARADOR VANCOUVER (ICMJE) VS. ABNT + ACERVO & SIMULADOR
         ===================================================================== */}
      <section id="normas-acervo" className="py-16 border-t border-[#E7E2DA] bg-[#F4F1EA]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-14">
          {/* LABORATÓRIO INTERATIVO 2: COMPARADOR VANCOUVER VS. ABNT */}
          <div className="bg-white border border-[#D6CEBE] rounded-2xl overflow-hidden shadow-xs">
            <div className="px-6 py-5 bg-[#1C1917] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-amber-400">
                  <Scale className="w-4 h-4" />
                  <span>LABORATÓRIO INTERATIVO 02 · EIXO II (08 HORAS)</span>
                </div>
                <h3 className="font-editorial text-2xl font-bold mt-1">
                  Comparador Prático de Normalização: Estilo Vancouver (ICMJE) vs. ABNT (NBR 6023/10520)
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {CITATION_COMPARISONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCitationId(item.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedCitationId === item.id
                        ? 'bg-[#064E3B] text-white'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {item.category.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-stone-200">
                <div>
                  <h4 className="font-editorial text-xl font-bold text-stone-950">
                    {activeCitation.category}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {activeCitation.sourceDescription}
                  </p>
                </div>
                <span className="text-xs font-mono-tabular text-[#064E3B] font-semibold">
                  Indexação DeCS / MeSH Integrada
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Coluna Estilo Vancouver (ICMJE) */}
                <div className="border border-emerald-800/25 bg-[#F4FBF7] rounded-xl p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#064E3B]">
                        PADRÃO INTERNACIONAL VANCOUVER (ICMJE / PUBMED)
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyCitation('vancouver', activeCitation.vancouverExample)
                        }
                        className="px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 rounded hover:bg-stone-50 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCitationKey === 'vancouver' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copiar Referência
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>Regra Técnica:</strong> {activeCitation.vancouverRule}
                    </p>

                    <div className="bg-white border border-emerald-200 rounded-lg p-3.5">
                      <p className="text-[11px] font-mono-tabular uppercase text-stone-400 mb-1">
                        Entrada na Lista Final de Referências:
                      </p>
                      <p className="font-mono-tabular text-xs text-stone-900 leading-relaxed">
                        {activeCitation.vancouverExample}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-emerald-200/70">
                    <p className="text-[11px] font-mono-tabular text-stone-500">
                      Chamada Numérica no Corpo do Texto:
                    </p>
                    <p className="text-xs font-medium text-stone-900 mt-0.5">
                      “{activeCitation.vancouverInText}”
                    </p>
                  </div>
                </div>

                {/* Coluna Norma ABNT (NBR 6023 / 10520) */}
                <div className="border border-amber-800/25 bg-[#FFFDF7] rounded-xl p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-[#B45309]">
                        PADRÃO NACIONAL ABNT (NBR 6023:2018 & NBR 10520:2023)
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyCitation('abnt', activeCitation.abntExample)}
                        className="px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 rounded hover:bg-stone-50 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCitationKey === 'abnt' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copiar Referência
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>Regra Técnica:</strong> {activeCitation.abntRule}
                    </p>

                    <div className="bg-white border border-amber-200 rounded-lg p-3.5">
                      <p className="text-[11px] font-mono-tabular uppercase text-stone-400 mb-1">
                        Entrada na Lista Alfabética de Referências:
                      </p>
                      <p className="font-mono-tabular text-xs text-stone-900 leading-relaxed">
                        {activeCitation.abntExample}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200/70">
                    <p className="text-[11px] font-mono-tabular text-stone-500">
                      Chamada Autor-Data no Corpo do Texto:
                    </p>
                    <p className="text-xs font-medium text-stone-900 mt-0.5">
                      “{activeCitation.abntInText}”
                    </p>
                  </div>
                </div>
              </div>

              {/* Dica de Indexação DeCS / MeSH */}
              <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-lg px-4 py-3 flex items-center justify-between text-xs text-stone-700">
                <span>
                  <strong className="text-[#064E3B]">Diretriz de Indexação BIREME/PubMed:</strong>{' '}
                  {activeCitation.indexingTip}
                </span>
              </div>
            </div>
          </div>

          {/* LABORATÓRIOS 3 E 4 LADO A LADO: ACERVO + CHECKLIST DE SUBMISSÃO & SIMULADOR DE EXAME */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Coluna Esquerda (6 cols): Acervo Digital & Checklist de Submissão Peer Review */}
            <div className="lg:col-span-6 bg-white border border-[#D6CEBE] rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#064E3B] font-semibold">
                    Laboratório 03 · Acervo Didático & Submissão Editorial
                  </p>
                  <h3 className="font-editorial text-2xl font-bold text-stone-950 mt-1">
                    Cadernos Metodológicos & Checklist Pré-Submissão
                  </h3>
                </div>

                {/* Seletor dos 3 Cadernos Didáticos da Editora Mente e Saúde */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5">
                    {manualChapters.map((chap, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedManualChapter(idx)}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                          selectedManualChapter === idx
                            ? 'bg-[#064E3B] text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {chap.number}
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono-tabular text-stone-500">
                      <span>{manualChapters[selectedManualChapter].number}</span>
                      <span>{manualChapters[selectedManualChapter].pages}</span>
                    </div>
                    <h4 className="font-editorial text-lg font-bold text-stone-950">
                      {manualChapters[selectedManualChapter].title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {manualChapters[selectedManualChapter].summary}
                    </p>
                    <p className="text-xs font-medium text-[#064E3B] pt-2 border-t border-[#E7E2DA]">
                      {manualChapters[selectedManualChapter].keyTakeaway}
                    </p>
                  </div>
                </div>

                {/* Checklist Interativo de Auditoria Pré-Submissão */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-stone-700 flex items-center gap-1.5">
                      <ClipboardCheck className="w-4 h-4 text-[#064E3B]" />
                      Checklist de Conformidade antes do Envio ao Periódico:
                    </h4>
                    <span className="font-mono-tabular text-xs font-bold text-[#064E3B]">
                      {completedChecklistCount}/{SUBMISSION_CHECKLIST_ITEMS.length} ({checklistPercentage}%)
                    </span>
                  </div>

                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#064E3B] transition-all duration-200"
                      style={{ width: `${checklistPercentage}%` }}
                    />
                  </div>

                  <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                    {SUBMISSION_CHECKLIST_ITEMS.map((item) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-[#F4FBF7] border-emerald-200'
                              : 'bg-white border-stone-200 hover:bg-stone-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleChecklist(item.id)}
                            className="mt-1 h-4 w-4 accent-[#064E3B] rounded cursor-pointer"
                          />
                          <div className="text-xs">
                            <p className="font-semibold text-stone-900">
                              <span className="font-mono-tabular text-[#B45309] mr-1.5">
                                [{item.axis}]
                              </span>
                              {item.title}
                            </p>
                            <p className="text-stone-600 mt-0.5 leading-snug">{item.detail}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita (6 cols): Simulador do Exame Final de Proficiência Metodológica */}
            <div className="lg:col-span-6 bg-white border border-[#D6CEBE] rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#B45309] font-semibold">
                      Laboratório 04 · Eixo IV (Avaliação Somativa)
                    </p>
                    <h3 className="font-editorial text-2xl font-bold text-stone-950 mt-1">
                      Simulador de Proficiência Metodológica
                    </h3>
                  </div>
                  <div className="text-right font-mono-tabular">
                    <span className="text-xs text-stone-500 block">Nota Oficial do Titular</span>
                    <span className="text-sm font-bold text-[#064E3B]">9,6 / 10,0 (Aprovado)</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  Teste abaixo 4 questões representativas da Avaliação Somativa Online aplicada ao
                  final das 36 horas do curso para certificação da proficiência em Escrita
                  Científica e Normas Editoriais:
                </p>

                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                  {EXAM_QUESTIONS.map((q, qIdx) => {
                    const selectedOption = examAnswers[q.id];
                    return (
                      <div
                        key={q.id}
                        className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4 space-y-2.5"
                      >
                        <p className="text-[11px] font-mono-tabular font-semibold text-[#064E3B]">
                          Questão 0{qIdx + 1} · {q.axis}
                        </p>
                        <p className="text-xs font-bold text-stone-950 leading-snug">
                          {q.question}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedOption === optIdx;
                            const isCorrect = q.correctIndex === optIdx;

                            let optionStyle =
                              'bg-white border-stone-200 text-stone-800 hover:border-stone-400';
                            if (examSubmitted) {
                              if (isCorrect) {
                                optionStyle =
                                  'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                              } else if (isSelected && !isCorrect) {
                                optionStyle = 'bg-red-50 border-red-400 text-red-900';
                              }
                            } else if (isSelected) {
                              optionStyle =
                                'bg-[#064E3B] border-[#064E3B] text-white font-semibold';
                            }

                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => {
                                  if (!examSubmitted) {
                                    setExamAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                  }
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg border text-xs transition-colors cursor-pointer ${optionStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {examSubmitted && (
                          <div className="mt-2 pt-2 border-t border-stone-200 text-xs text-stone-700 leading-snug">
                            <strong className="text-[#064E3B]">Gabarito Comentado:</strong>{' '}
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Barra de Ação do Simulador */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
                {examSubmitted ? (
                  <>
                    <div className="text-xs">
                      <span className="font-mono-tabular font-bold text-[#064E3B]">
                        Resultado da Simulação: {correctExamCount} de {EXAM_QUESTIONS.length} acertos
                      </span>
                      <p className="text-stone-500">
                        Gabarito oficial comentado exibido em cada item acima.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setExamAnswers({});
                        setExamSubmitted(false);
                      }}
                      className="px-4 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reiniciar Simulador
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-stone-500 font-mono-tabular">
                      {Object.keys(examAnswers).length} de {EXAM_QUESTIONS.length} questões
                      respondidas
                    </span>
                    <button
                      type="button"
                      onClick={() => setExamSubmitted(true)}
                      className="px-4 py-2 text-xs font-semibold bg-[#064E3B] hover:bg-[#047857] text-white rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Verificar Desempenho & Gabarito
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
