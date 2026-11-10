/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Palette,
  Printer,
  QrCode,
  ShieldCheck,
  Terminal,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react';
import { CERTIFICATE_01_DATA } from './data/courseAndCertificateData';
import {
  CertificateColorTheme,
  CertificateDocument,
  EditoraMenteSaudeLogo,
} from './components/CertificateDocument';
import { InteractiveCourseModules } from './components/InteractiveCourseModules';
import { PublicValidatorSection } from './components/PublicValidatorSection';
import { GithubCommandSection } from './components/GithubCommandModal';

export default function App() {
  // Estados do Leitor PDF Embutido do Certificado Nº 01
  const [certTheme, setCertTheme] = useState<CertificateColorTheme>('emerald');
  const [pdfPageFilter, setPdfPageFilter] = useState<'both' | 'front' | 'back'>('both');
  const [viewerMode, setViewerMode] = useState<'vector-hd' | 'native-pdf'>('vector-hd');
  const [zoomScale, setZoomScale] = useState<number>(0.88);
  const [showPrintGuideBanner, setShowPrintGuideBanner] = useState<boolean>(false);

  const viewerContainerRef = useRef<HTMLDivElement>(null);

  // Ajusta automaticamente a escala inicial do certificado conforme a largura da tela
  useEffect(() => {
    const updateResponsiveScale = () => {
      if (!viewerContainerRef.current) return;
      const containerWidth = viewerContainerRef.current.clientWidth - 48;
      // 297mm em 96dpi equivale a ~1122px
      const targetWidthPx = 1122;
      if (containerWidth < targetWidthPx) {
        const calculated = Math.max(0.32, Math.min(1, Number((containerWidth / targetWidthPx).toFixed(2))));
        setZoomScale(calculated);
      } else {
        setZoomScale(0.95);
      }
    };

    updateResponsiveScale();
    window.addEventListener('resize', updateResponsiveScale);
    return () => window.removeEventListener('resize', updateResponsiveScale);
  }, []);

  // Se a URL contiver #validador ou ?codigo=, rola suavemente até o validador se solicitado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#validador') {
        const el = document.getElementById('validador');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
        }
      }
    }
  }, []);

  const handleTriggerPrintPdf = () => {
    setShowPrintGuideBanner(true);
    setTimeout(() => {
      window.print();
    }, 120);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      {/* =====================================================================
          TOP NAVIGATION BAR (STRICT 3-ZONE CONTRACT)
         ===================================================================== */}
      <header className="no-print sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-xs border-b border-[#E7E2DA]">
        <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
          {/* Zona 1: Wordmark em linha única */}
          <a
            href="#topo"
            className="font-editorial text-xl font-bold tracking-tight text-[#064E3B] whitespace-nowrap shrink-0"
          >
            Editora Mente e Saúde · Extensão Científica
          </a>

          {/* Zona 2: 4 Links de Navegação concisos em linha única */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a
              href="#curso-imrd"
              className="hover:text-[#064E3B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              O Curso & IMRD
            </a>
            <a
              href="#normas-acervo"
              className="hover:text-[#064E3B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Normas & Acervo
            </a>
            <a
              href="#certificado-pdf"
              className="hover:text-[#064E3B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Certificado Nº 01
            </a>
            <a
              href="#validador"
              className="hover:text-[#064E3B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Validador Oficial
            </a>
            <a
              href="#comando-github"
              className="hover:text-[#064E3B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Comando GitHub
            </a>
          </nav>

          {/* Zona 3: 1 Ação Primária */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleTriggerPrintPdf}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#047857] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              Baixar PDF (2 Laudas)
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          HERO INSTITUCIONAL & CREDENCIAMENTO INTERINSTITUCIONAL (TEMA 01)
         ===================================================================== */}
      <main id="topo" className="no-print flex-1">
        <section className="relative bg-[#022C22] text-white border-b border-[#064E3B] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Coluna Esquerda (7 cols): Apresentação do Curso Nº 01 da Matriz */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono-tabular text-amber-300 tracking-wider uppercase font-semibold">
                    Matriz Curricular Item 09 · Certificado Nº 01 · Cód. {CERTIFICATE_01_DATA.code}
                  </div>

                  <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] text-white text-balance">
                    Curso de Extensão EAD em Escrita Científica, Normas Editoriais (Vancouver/ABNT)
                    e Publicação de Artigos Biomédicos
                  </h1>

                  <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                    Formação complementar interinstitucional promovida pela{' '}
                    <strong className="text-white font-semibold">
                      Editora Mente e Saúde (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj})
                    </strong>{' '}
                    em parceria com o{' '}
                    <strong className="text-white font-semibold">
                      Centro Profissionalizante Maria Dalva de Araújo (CNPJ:{' '}
                      {CERTIFICATE_01_DATA.issuers.centro.cnpj})
                    </strong>
                    , focada na arquitetura lógica IMRD, indexação DeCS/MeSH, ética COPE e submissão
                    a periódicos com revisão por pares.
                  </p>
                </div>

                {/* Ações Principais do Hero */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection('certificado-pdf')}
                    className="px-5 py-3 text-xs font-semibold bg-[#B45309] hover:bg-[#D97706] text-white rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-4 h-4" />
                    Visualizar Certificado Nº 01 (Leitor PDF)
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('validador')}
                    className="px-5 py-3 text-xs font-semibold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-50 border border-emerald-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                    Autenticar Registro ({CERTIFICATE_01_DATA.code})
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('comando-github')}
                    className="px-4 py-3 text-xs font-semibold bg-transparent hover:bg-white/5 text-emerald-200 border border-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Terminal className="w-4 h-4" />
                    Comando GitHub
                  </button>
                </div>
              </div>

              {/* Coluna Direita (5 cols): Cartão de Fé Pública do Titular Certificado */}
              <div className="lg:col-span-5 bg-[#042F2E] border border-emerald-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-5">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-emerald-800/70">
                  <div className="flex items-center gap-2.5">
                    <EditoraMenteSaudeLogo
                      primaryColor="#064E3B"
                      className="w-11 h-11 shrink-0 rounded-lg"
                    />
                    <img
                      src={CERTIFICATE_01_DATA.issuers.centro.logoAsset}
                      alt="Logo Centro Maria Dalva de Araújo"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 object-contain shrink-0"
                    />
                  </div>
                  <div className="text-right font-mono-tabular">
                    <span className="text-[11px] uppercase text-amber-300 font-bold block">
                      Fé Pública Confirmada
                    </span>
                    <span className="text-xs text-emerald-100">
                      Livro {CERTIFICATE_01_DATA.bookNumber} · {CERTIFICATE_01_DATA.sheetNumber}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] font-mono-tabular uppercase text-emerald-300">
                      Titular Certificado (Padrão UNIFAN)
                    </p>
                    <h2 className="font-editorial text-2xl font-bold text-white tracking-wide mt-0.5">
                      {CERTIFICATE_01_DATA.holder.name}
                    </h2>
                    <p className="text-xs text-emerald-100 mt-0.5">
                      {CERTIFICATE_01_DATA.holder.fullLine}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-emerald-800/60 text-xs">
                    <div>
                      <span className="text-emerald-300/80 block font-mono-tabular text-[11px]">
                        Período de Realização
                      </span>
                      <strong className="text-white font-semibold">10/04 a 05/05/2023</strong>
                    </div>
                    <div>
                      <span className="text-emerald-300/80 block font-mono-tabular text-[11px]">
                        Carga Horária & Nota
                      </span>
                      <strong className="text-amber-300 font-mono-tabular font-bold">
                        36 Horas · Nota 9,6
                      </strong>
                    </div>
                  </div>

                  <div className="bg-[#022C22] border border-emerald-800/90 rounded-lg p-3 font-mono-tabular text-[11px] space-y-1">
                    <div className="flex justify-between">
                      <span className="text-emerald-300">Código:</span>
                      <span className="text-white font-bold">{CERTIFICATE_01_DATA.code}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-300">Chave de Controle:</span>
                      <span className="text-amber-300 font-bold">
                        {CERTIFICATE_01_DATA.controlKey}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-emerald-200">
                    Documento Oficial de 2 Laudas (Frente e Verso)
                  </span>
                  <a
                    href="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
                    download="Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf"
                    className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4 whitespace-nowrap shrink-0"
                  >
                    Baixar PDF Direto →
                  </a>
                </div>
              </div>
            </div>

            {/* Faixa Inferior de Indicadores Acadêmicos (Full-width Strip abaixo do Split) */}
            <div className="mt-10 pt-6 border-t border-emerald-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <p className="font-mono-tabular text-emerald-300 uppercase">Enquadramento Edital</p>
                <p className="font-semibold text-white mt-0.5">
                  Item 09 — Atividades Extracurriculares (≥ 30h)
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-emerald-300 uppercase">Estrutura Metodológica</p>
                <p className="font-semibold text-white mt-0.5">
                  4 Eixos Programáticos (10h + 08h + 10h + 08h)
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-emerald-300 uppercase">Normas Abordadas</p>
                <p className="font-semibold text-white mt-0.5">
                  Estilo Vancouver (ICMJE), ABNT & COPE
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-emerald-300 uppercase">Chancela Dupla</p>
                <p className="font-semibold text-white mt-0.5">
                  Bárbara Lima dos Santos & James Araújo de Santana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            MÓDULOS INTERATIVOS DO CURSO (IMRD, VANCOUVER/ABNT, ACERVO E EXAME)
           ===================================================================== */}
        <InteractiveCourseModules />

        {/* =====================================================================
            SEÇÃO 3: VISUALIZADOR ESTILO PDF DO CERTIFICADO Nº 01 (2 LAUDAS A4)
           ===================================================================== */}
        <section
          id="certificado-pdf"
          className="py-16 border-t border-[#E7E2DA] bg-[#EBE6DF] scroll-mt-14"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            {/* Cabeçalho do Leitor PDF */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <div>
                <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#064E3B] font-semibold">
                  03. Documento Oficial Averbado · Visualizador Estilo PDF (2 Laudas A4 Paisagem)
                </p>
                <h2 className="font-editorial text-3xl lg:text-4xl font-bold text-[#1C1917] mt-1">
                  Certificado Nº 01 — Frente e Verso com Assinaturas, Selo e QR Code
                </h2>
                <p className="text-sm text-stone-700 mt-1.5 max-w-3xl">
                  Inspecione abaixo as 2 laudas completas na proporção oficial A4 Paisagem (
                  <span className="font-mono-tabular font-semibold">297mm × 210mm</span>). Ao clicar
                  em <strong>Imprimir / Salvar em PDF</strong>, o sistema oculta toda a interface do
                  site e exporta exclusivamente as duas páginas do certificado com máxima nitidez
                  vetorial.
                </p>
              </div>

              {/* Botões de Download / Impressão PDF em Destaque */}
              <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
                <button
                  type="button"
                  onClick={handleTriggerPrintPdf}
                  className="px-4 py-2.5 text-xs font-semibold bg-[#064E3B] hover:bg-[#047857] text-white rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir / Salvar PDF (A4 Paisagem 2 Laudas)
                </button>

                <a
                  href="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
                  download="Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf"
                  className="px-4 py-2.5 text-xs font-semibold bg-[#B45309] hover:bg-[#D97706] text-white rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  Baixar PDF Original Anexo (2 Laudas)
                </a>
              </div>
            </div>

            {/* Aviso de Configuração Rápida de Impressão PDF (Exibido ao acionar impressão) */}
            {showPrintGuideBanner && (
              <div className="mb-5 bg-[#FFFBEB] border border-[#D97706] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
                <div>
                  <strong className="font-bold uppercase tracking-wider text-[#B45309] block mb-0.5">
                    Configuração Recomendada na Janela de Impressão / Salvar como PDF:
                  </strong>
                  <span>
                    Destino: <strong>Salvar como PDF</strong> · Layout:{' '}
                    <strong>Paisagem (Horizontal)</strong> · Papel: <strong>A4</strong> · Margens:{' '}
                    <strong>Nenhuma / Padrão</strong> ·{' '}
                    <strong>Gráficos de segundo plano: Ativado</strong>.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPrintGuideBanner(false)}
                  className="px-3 py-1 bg-amber-200/70 hover:bg-amber-200 rounded font-semibold self-start sm:self-center cursor-pointer"
                >
                  Fechar Aviso
                </button>
              </div>
            )}

            {/* BARRA DE FERRAMENTAS DO LEITOR PDF EMBUTIDO */}
            <div className="bg-[#1C1917] text-stone-100 rounded-t-2xl px-4 py-3 border-b border-stone-700 flex flex-wrap items-center justify-between gap-4">
              {/* Esquerda: Nome do Arquivo e Alternador de Modo (Renderização Vetorial HD vs PDF Nativo Anexo) */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-stone-300">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate max-w-[230px] sm:max-w-none">
                    Certificado_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setViewerMode('vector-hd')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                      viewerMode === 'vector-hd'
                        ? 'bg-[#064E3B] text-white'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Leitor Vetorial HD (Interativo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewerMode('native-pdf')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                      viewerMode === 'native-pdf'
                        ? 'bg-[#064E3B] text-white'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    PDF Anexo Original
                  </button>
                </div>
              </div>

              {/* Centro: Seletor de Laudas e Tema de Cor (quando no modo Vetorial HD) */}
              {viewerMode === 'vector-hd' && (
                <div className="flex flex-wrap items-center gap-3">
                  {/* Filtro de Laudas */}
                  <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg text-xs">
                    <button
                      type="button"
                      onClick={() => setPdfPageFilter('both')}
                      className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                        pdfPageFilter === 'both'
                          ? 'bg-stone-600 text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      2 Laudas (Frente + Verso)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPdfPageFilter('front')}
                      className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                        pdfPageFilter === 'front'
                          ? 'bg-stone-600 text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      Lauda 1 (Frente)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPdfPageFilter('back')}
                      className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                        pdfPageFilter === 'back'
                          ? 'bg-stone-600 text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      Lauda 2 (Verso)
                    </button>
                  </div>

                  {/* Alternador de Paleta Diplomática */}
                  <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg text-xs">
                    <button
                      type="button"
                      onClick={() => setCertTheme('emerald')}
                      className={`px-2.5 py-1 rounded font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                        certTheme === 'emerald'
                          ? 'bg-[#064E3B] text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <Palette className="w-3 h-3 text-amber-300" />
                      Esmeralda & Dourado
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertTheme('sapphire')}
                      className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                        certTheme === 'sapphire'
                          ? 'bg-blue-900 text-white'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      Azul Safira Clássico
                    </button>
                  </div>

                  {/* Controle de Zoom */}
                  <div className="flex items-center gap-1 bg-stone-800 px-2 py-1 rounded-lg text-xs font-mono-tabular">
                    <button
                      type="button"
                      onClick={() => setZoomScale((s) => Math.max(0.4, Number((s - 0.1).toFixed(2))))}
                      className="p-1 hover:bg-stone-700 rounded cursor-pointer"
                      title="Diminuir Zoom"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-1.5">{Math.round(zoomScale * 100)}%</span>
                    <button
                      type="button"
                      onClick={() => setZoomScale((s) => Math.min(1.15, Number((s + 0.1).toFixed(2))))}
                      className="p-1 hover:bg-stone-700 rounded cursor-pointer"
                      title="Aumentar Zoom"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomScale(1)}
                      className="px-1.5 py-0.5 hover:bg-stone-700 rounded text-[11px] cursor-pointer"
                      title="Tamanho 100%"
                    >
                      100%
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* PALCO DO LEITOR PDF */}
            <div
              ref={viewerContainerRef}
              className="bg-[#323639] rounded-b-2xl border-x border-b border-stone-700 p-4 sm:p-8 overflow-x-auto flex flex-col items-center shadow-inner min-h-[540px]"
            >
              {viewerMode === 'vector-hd' ? (
                <div
                  className="origin-top transition-transform duration-150"
                  style={{
                    transform: `scale(${zoomScale})`,
                    marginBottom:
                      zoomScale < 1
                        ? `-${Math.round(
                            (1 - zoomScale) * (pdfPageFilter === 'both' ? 1580 : 790)
                          )}px`
                        : '0px',
                  }}
                >
                  <div className="[&_.cert-a4-sheet]:shadow-2xl [&_.cert-a4-sheet]:rounded-xs">
                    <CertificateDocument
                      colorTheme={certTheme}
                      viewMode={pdfPageFilter}
                      verificationBaseUrl={CERTIFICATE_01_DATA.canonicalVercelUrl}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[1120px] bg-stone-900 rounded-lg overflow-hidden border border-stone-700">
                  <object
                    data="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
                    type="application/pdf"
                    className="w-full h-[780px]"
                  >
                    <div className="p-10 text-center text-stone-200 space-y-4">
                      <p className="text-sm">
                        Seu navegador bloqueou a pré-visualização embutida de objetos PDF em iframe.
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setViewerMode('vector-hd')}
                          className="px-4 py-2 text-xs font-semibold bg-[#064E3B] text-white rounded-lg cursor-pointer"
                        >
                          Voltar para o Leitor Vetorial HD (Idêntico)
                        </button>
                        <a
                          href="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
                          download="Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf"
                          className="px-4 py-2 text-xs font-semibold bg-[#B45309] text-white rounded-lg"
                        >
                          Baixar PDF Diretamente
                        </a>
                      </div>
                    </div>
                  </object>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SEÇÃO 4: VALIDADOR ELETRÔNICO PÚBLICO (#validador)
           ===================================================================== */}
        <PublicValidatorSection
          onPrintCertificate={handleTriggerPrintPdf}
          onScrollToCertificate={() => scrollToSection('certificado-pdf')}
        />

        {/* =====================================================================
            SEÇÃO 5: COMANDO GITHUB & CONFIGURAÇÃO DE DEPLOY VERCEL
           ===================================================================== */}
        <GithubCommandSection />
      </main>

      {/* =====================================================================
          RODAPÉ INSTITUCIONAL (SÓBRIO, SEM ELEMENTOS ORNAMENTAIS FALSOS)
         ===================================================================== */}
      <footer className="no-print bg-[#1C1917] text-stone-300 border-t border-stone-800 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
          <div className="space-y-1">
            <p className="font-editorial text-base font-bold text-white">
              Editora Mente e Saúde & Centro Profissionalizante Maria Dalva de Araújo
            </p>
            <p className="font-mono-tabular text-stone-400">
              CNPJ Editora: {CERTIFICATE_01_DATA.issuers.editora.cnpj} &nbsp;·&nbsp; CNPJ Centro
              Profissionalizante: {CERTIFICATE_01_DATA.issuers.centro.cnpj}
            </p>
            <p className="text-stone-400">
              Programa Interinstitucional de Extensão, Comunicação Científica e Educação em Saúde ·
              Goiânia - GO.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#certificado-pdf"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              Certificado Nº 01 ({CERTIFICATE_01_DATA.code})
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#validador"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              Validador de Fé Pública
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={handleTriggerPrintPdf}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
            >
              Exportar PDF (2 Laudas A4)
            </button>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          CONTAINER EXCLUSIVO DE IMPRESSÃO NATIVA (@media print — 2 LAUDAS A4)
         ===================================================================== */}
      <CertificateDocument
        isPrintOnlyContainer
        colorTheme={certTheme}
        viewMode="both"
        verificationBaseUrl={CERTIFICATE_01_DATA.canonicalVercelUrl}
      />
    </div>
  );
}
