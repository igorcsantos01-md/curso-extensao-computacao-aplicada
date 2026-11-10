import React, { useEffect, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileCheck2,
  Printer,
  QrCode,
  Search,
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { CERTIFICATE_01_DATA } from '../data/courseAndCertificateData';

interface PublicValidatorSectionProps {
  onPrintCertificate: () => void;
  onScrollToCertificate: () => void;
}

export const PublicValidatorSection: React.FC<PublicValidatorSectionProps> = ({
  onPrintCertificate,
  onScrollToCertificate,
}) => {
  const [searchInput, setSearchInput] = useState<string>(CERTIFICATE_01_DATA.code);
  const [validationState, setValidationState] = useState<'valid' | 'invalid'>('valid');
  const [lastVerifiedAt, setLastVerifiedAt] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [detectedUrlParam, setDetectedUrlParam] = useState<boolean>(false);

  const normalizeQuery = (val: string) =>
    val.trim().toUpperCase().replace(/\s+/g, '');

  const isMatchForCertificate01 = (rawQuery: string) => {
    const q = normalizeQuery(rawQuery);
    const cleanCpf = q.replace(/[.-]/g, '');
    const holderCpfClean = CERTIFICATE_01_DATA.holder.cpf.replace(/[.-]/g, '');

    return (
      q === CERTIFICATE_01_DATA.code.toUpperCase() ||
      q === CERTIFICATE_01_DATA.controlKey.toUpperCase() ||
      q === CERTIFICATE_01_DATA.sha256.toUpperCase() ||
      cleanCpf === holderCpfClean ||
      q.includes('EMS-EXT-2023-0901') ||
      q.includes('0901-7027-9457-9A3C')
    );
  };

  useEffect(() => {
    const nowFormatted = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(new Date());
    setLastVerifiedAt(nowFormatted);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const codeFromUrl = params.get('codigo') || params.get('chave') || params.get('code');
      if (codeFromUrl) {
        setSearchInput(codeFromUrl);
        setDetectedUrlParam(true);
        setValidationState(isMatchForCertificate01(codeFromUrl) ? 'valid' : 'invalid');
      }
    }
  }, []);

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nowFormatted = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(new Date());
    setLastVerifiedAt(nowFormatted);

    if (isMatchForCertificate01(searchInput)) {
      setValidationState('valid');
      if (typeof window !== 'undefined') {
        const newUrl = `${window.location.pathname}?codigo=${encodeURIComponent(
          CERTIFICATE_01_DATA.code
        )}#validador`;
        window.history.replaceState({}, '', newUrl);
      }
    } else {
      setValidationState('invalid');
    }
  };

  const handleQuickFill = (value: string) => {
    setSearchInput(value);
    setValidationState('valid');
    const nowFormatted = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(new Date());
    setLastVerifiedAt(nowFormatted);
  };

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="validador"
      className="no-print py-16 border-t border-[#E7E2DA] bg-[#FBF9F5] scroll-mt-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Cabeçalho da Seção do Validador */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E2DA]">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#064E3B] font-semibold">
              04. Sistema Oficial de Verificação Pública de Autenticidade
            </p>
            <h2 className="font-editorial text-3xl lg:text-4xl font-bold text-[#1C1917] mt-1">
              Validador Eletrônico de Certificados e Fé Pública Interinstitucional
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Consulte a autenticidade de certificados expedidos conjuntamente pela{' '}
              <strong className="font-semibold text-stone-900">
                Editora Mente e Saúde (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj})
              </strong>{' '}
              e pelo{' '}
              <strong className="font-semibold text-stone-900">
                Centro Profissionalizante Maria Dalva de Araújo (CNPJ:{' '}
                {CERTIFICATE_01_DATA.issuers.centro.cnpj})
              </strong>{' '}
              informando o Código de Autenticidade, a Chave de Controle, o CPF ou o Hash SHA-256.
            </p>
          </div>

          <div className="text-xs font-mono-tabular text-stone-500">
            <span>Parâmetro URL Ativo:</span>{' '}
            <span className="font-bold text-[#064E3B]">?codigo={CERTIFICATE_01_DATA.code}#validador</span>
          </div>
        </div>

        {/* Barra de Consulta de Autenticidade */}
        <div className="mt-8 bg-white border border-[#D6CEBE] rounded-2xl p-6 shadow-xs">
          <form onSubmit={handleVerifySubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-9">
              <label
                htmlFor="validator-input"
                className="block text-xs font-mono-tabular uppercase tracking-wider text-stone-600 font-semibold mb-2"
              >
                Código de Autenticidade, Chave de Controle, CPF ou Hash SHA-256:
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="validator-input"
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Ex.: EMS-EXT-2023-0901 ou 0901-7027-9457-9A3C"
                  className="w-full pl-10 pr-4 py-3 bg-[#FBF9F5] border border-stone-300 rounded-lg font-mono-tabular text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#064E3B]"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex items-end">
              <button
                type="submit"
                className="w-full py-3 px-5 bg-[#064E3B] hover:bg-[#047857] text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                Verificar Autenticidade
              </button>
            </div>
          </form>

          {/* Atalhos Rápidos de Preenchimento */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 font-medium">Chaves Oficiais do Certificado Nº 01:</span>
            <button
              type="button"
              onClick={() => handleQuickFill(CERTIFICATE_01_DATA.code)}
              className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono-tabular font-semibold transition-colors cursor-pointer"
            >
              Cód.: {CERTIFICATE_01_DATA.code}
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill(CERTIFICATE_01_DATA.controlKey)}
              className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono-tabular font-semibold transition-colors cursor-pointer"
            >
              Chave: {CERTIFICATE_01_DATA.controlKey}
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill(CERTIFICATE_01_DATA.holder.cpf)}
              className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono-tabular font-semibold transition-colors cursor-pointer"
            >
              CPF: {CERTIFICATE_01_DATA.holder.cpf}
            </button>
          </div>
        </div>

        {/* RESULTADO DA VALIDAÇÃO */}
        {validationState === 'valid' ? (
          <div className="mt-6 bg-white border-2 border-[#064E3B] rounded-2xl overflow-hidden shadow-xs">
            {/* Faixa Superior de Confirmação de Fé Pública */}
            <div className="bg-[#064E3B] text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-800/80 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-tabular text-emerald-200">
                    <span>STATUS: VÁLIDO E ATIVO</span>
                    <span aria-hidden="true">·</span>
                    <span>FÉ PÚBLICA INTERINSTITUCIONAL CONFIRMADA</span>
                    {detectedUrlParam && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-300">LEITURA AUTOMÁTICA VIA QR CODE / URL</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold tracking-wide">
                    CERTIFICADO AUTÊNTICO E VÁLIDO — APROVADO (NOTA 9,6)
                  </h3>
                </div>
              </div>

              <div className="text-left md:text-right font-mono-tabular text-xs text-emerald-100">
                <p>Protocolo de Verificação</p>
                <p className="font-bold text-white">{lastVerifiedAt || 'Verificado Agora'}</p>
              </div>
            </div>

            {/* Corpo do Laudo de Autenticidade */}
            <div className="p-6 lg:p-8 space-y-6">
              {/* Grade Principal de Dados Averbação */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4">
                  <p className="text-[11px] font-mono-tabular uppercase text-stone-500">
                    Profissional Titular Certificado
                  </p>
                  <p className="font-editorial text-xl font-bold text-stone-950 mt-1">
                    {CERTIFICATE_01_DATA.holder.name}
                  </p>
                  <p className="text-xs text-stone-700 mt-1">
                    {CERTIFICATE_01_DATA.holder.role} · CPF: {CERTIFICATE_01_DATA.holder.cpf}
                  </p>
                </div>

                <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4">
                  <p className="text-[11px] font-mono-tabular uppercase text-stone-500">
                    Instituição de Origem (Vínculo)
                  </p>
                  <p className="text-sm font-bold text-stone-950 mt-1.5 leading-snug">
                    {CERTIFICATE_01_DATA.holder.institution}
                  </p>
                  <p className="text-xs text-[#064E3B] font-medium mt-1">
                    Goiânia - GO · Registro Confirmado
                  </p>
                </div>

                <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4">
                  <p className="text-[11px] font-mono-tabular uppercase text-stone-500">
                    Carga Horária & Desempenho
                  </p>
                  <p className="font-mono-tabular text-lg font-bold text-[#064E3B] mt-1">
                    36 (trinta e seis) horas
                  </p>
                  <p className="text-xs font-semibold text-stone-800 mt-1">
                    Situação: APROVADO · Nota Final: 9,6 (96%)
                  </p>
                </div>

                <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-4">
                  <p className="text-[11px] font-mono-tabular uppercase text-stone-500">
                    Averbação e Livro Oficial
                  </p>
                  <p className="font-mono-tabular text-sm font-bold text-stone-950 mt-1.5">
                    Certificado Nº {CERTIFICATE_01_DATA.certificateNumber} · Livro nº{' '}
                    {CERTIFICATE_01_DATA.bookNumber}
                  </p>
                  <p className="text-xs text-stone-700 mt-1">
                    {CERTIFICATE_01_DATA.sheetNumber} · Emissão: 12/05/2023
                  </p>
                </div>
              </div>

              {/* Detalhamento da Atividade e Enquadramento no Edital Item 09 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#F4FBF7] border border-emerald-200 rounded-xl p-5">
                <div className="lg:col-span-7 space-y-2">
                  <p className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#064E3B]">
                    Atividade Extracurricular Certificada (Modalidade Curso de Extensão EAD)
                  </p>
                  <h4 className="font-editorial text-xl font-bold text-stone-950 leading-snug">
                    “{CERTIFICATE_01_DATA.course.title}”
                  </h4>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Realizada no período de <strong>{CERTIFICATE_01_DATA.course.period}</strong>,
                    contemplando os 4 eixos programáticos: Eixo I — Arquitetura IMRD (10h); Eixo II —
                    Normalização Internacional Vancouver/ICMJE e ABNT (08h); Eixo III — Ética
                    Editorial, COPE e Revisão por Pares (10h); e Eixo IV — Estudo Dirigido e Exame
                    de Certificação (08h).
                  </p>
                </div>

                <div className="lg:col-span-5 lg:border-l lg:border-emerald-200 lg:pl-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#B45309]">
                      Enquadramento Normativo e Curricular
                    </p>
                    <p className="text-xs font-semibold text-stone-900 mt-1 leading-relaxed">
                      {CERTIFICATE_01_DATA.course.editalCategory}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-emerald-200/80 text-xs text-stone-700">
                    <strong>Base Legal:</strong> {CERTIFICATE_01_DATA.course.legalBasis} · Documento
                    Oficial de 2 Laudas (Frente e Verso).
                  </div>
                </div>
              </div>

              {/* Chaves Criptográficas & Assinaturas Eletrônicas */}
              <div className="bg-[#FBF9F5] border border-[#E7E2DA] rounded-xl p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-mono-tabular text-stone-500">
                      CÓDIGO DE AUTENTICIDADE & CHAVE DE CONTROLE
                    </p>
                    <p className="font-mono-tabular text-sm font-bold text-stone-950">
                      Cód.: {CERTIFICATE_01_DATA.code} &nbsp;·&nbsp; Chave:{' '}
                      {CERTIFICATE_01_DATA.controlKey}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy('sha256', CERTIFICATE_01_DATA.sha256)}
                    className="px-3 py-1.5 text-xs font-mono-tabular font-semibold bg-white border border-stone-300 rounded-md hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedField === 'sha256' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        Hash SHA-256 Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copiar Hash SHA-256
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-[#E7E2DA]">
                  <p className="text-[11px] font-mono-tabular text-stone-500">
                    ASSINATURA CRIPTOGRÁFICA SHA-256 (INTEGRIDADE DOCUMENTAL):
                  </p>
                  <p className="font-mono-tabular text-xs font-semibold text-[#064E3B] break-all mt-0.5">
                    {CERTIFICATE_01_DATA.sha256}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E7E2DA] grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-500">Signatária Editorial:</span>{' '}
                    <strong className="text-stone-900">
                      {CERTIFICATE_01_DATA.issuers.editora.signerName}
                    </strong>{' '}
                    — Editora Mente e Saúde (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj})
                  </div>
                  <div>
                    <span className="text-stone-500">Signatário Educacional:</span>{' '}
                    <strong className="text-stone-900">
                      {CERTIFICATE_01_DATA.issuers.centro.signerName}
                    </strong>{' '}
                    — Centro Maria Dalva de Araújo (CNPJ: {CERTIFICATE_01_DATA.issuers.centro.cnpj})
                  </div>
                </div>
              </div>

              {/* Ações Diretas a partir do Laudo */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onScrollToCertificate}
                    className="px-4 py-2.5 text-xs font-semibold bg-[#064E3B] hover:bg-[#047857] text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    Inspecionar Certificado no Leitor PDF (2 Laudas)
                  </button>

                  <button
                    type="button"
                    onClick={onPrintCertificate}
                    className="px-4 py-2.5 text-xs font-semibold bg-[#B45309] hover:bg-[#D97706] text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    Imprimir / Salvar em PDF (A4 Paisagem)
                  </button>
                </div>

                <a
                  href="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
                  download="Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf"
                  className="px-4 py-2.5 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Direto PDF Original (2 Laudas)
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Estado de Código Não Encontrado */
          <div className="mt-6 bg-red-50 border-2 border-red-300 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-red-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-editorial text-xl font-bold text-red-950">
                  Nenhum Registro Encontrado para o Identificador Informado
                </h3>
                <p className="text-xs text-red-800 mt-1">
                  O código <span className="font-mono-tabular font-bold">“{searchInput}”</span> não
                  corresponde a um certificado averbado neste livro. Confira se digitou corretamente
                  o Código (<span className="font-mono-tabular">EMS-EXT-2023-0901</span>) ou a Chave
                  (<span className="font-mono-tabular">0901-7027-9457-9A3C</span>).
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleQuickFill(CERTIFICATE_01_DATA.code)}
              className="px-4 py-2 text-xs font-semibold bg-red-800 hover:bg-red-900 text-white rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
            >
              Restaurar Certificado Nº 01 ({CERTIFICATE_01_DATA.code})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
