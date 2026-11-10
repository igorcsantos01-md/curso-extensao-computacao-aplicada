import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { CERTIFICATE_01_DATA } from '../data/courseAndCertificateData';

export type CertificateColorTheme = 'emerald' | 'sapphire';

interface CertificateDocumentProps {
  colorTheme?: CertificateColorTheme;
  viewMode?: 'both' | 'front' | 'back';
  verificationBaseUrl?: string;
  isPrintOnlyContainer?: boolean;
}

/**
 * Brasão Vetorial Oficial da Editora Mente e Saúde (Fundo 100% Transparente)
 * Reproduz fielmente o selo circular com cérebro/livro aberto do PDF de referência.
 */
export const EditoraMenteSaudeLogo: React.FC<{
  primaryColor?: string;
  className?: string;
}> = ({ primaryColor = '#064E3B', className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Logotipo Editora Mente e Saúde"
  >
    <rect
      x="6"
      y="6"
      width="108"
      height="108"
      rx="18"
      fill="#FFFFFF"
      stroke={primaryColor}
      strokeWidth="3.5"
    />
    <rect
      x="11"
      y="11"
      width="98"
      height="98"
      rx="14"
      stroke={primaryColor}
      strokeWidth="1"
      strokeDasharray="2 2"
    />
    <defs>
      <path id="editoraTopArc" d="M 20,62 A 40,40 0 1,1 100,62" />
    </defs>
    <text
      fill={primaryColor}
      fontSize="8.3"
      fontWeight="800"
      fontFamily="Plus Jakarta Sans, sans-serif"
      letterSpacing="0.7"
    >
      <textPath href="#editoraTopArc" startOffset="50%" textAnchor="middle">
        EDITORA MENTE E SAÚDE
      </textPath>
    </text>
    {/* Símbolo Central: Cérebro Científico + Livro Aberto */}
    <g stroke={primaryColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Hemisfério esquerdo */}
      <path d="M58 34C50 34 44 39 44 46C41 47 39 51 40 55C40 60 44 63 49 64C50 67 54 69 58 68V34Z" fill="#ECFDF5" />
      <path d="M48 45C51 45 53 47 53 50" />
      <path d="M45 54C49 54 52 56 54 59" />
      {/* Hemisfério direito */}
      <path d="M62 34C70 34 76 39 76 46C79 47 81 51 80 55C80 60 76 63 71 64C70 67 66 69 62 68V34Z" fill="#ECFDF5" />
      <path d="M72 45C69 45 67 47 67 50" />
      <path d="M75 54C71 54 68 56 66 59" />
      {/* Livro Aberto Acadêmico na Base */}
      <path d="M36 78C44 75 53 76 60 80C67 76 76 75 84 78V92C76 89 67 90 60 94C53 90 44 89 36 92V78Z" fill="#FFFFFF" />
      <path d="M60 80V94" />
      <path d="M32 95H88" strokeWidth="2.8" />
    </g>
  </svg>
);

/**
 * Rubrica Caligráfica Vetorial Limpa de James Araújo de Santana (Fiel ao PDF 01 e 03)
 */
export const JamesSignatureSvg: React.FC<{ className?: string }> = ({
  className = 'h-11 w-auto',
}) => (
  <svg
    viewBox="0 0 280 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Assinatura de James Araújo de Santana"
  >
    <path
      d="M28 22C37 15 49 12 52 21C55 30 42 54 32 58C23 61 18 53 24 47C32 39 62 43 85 45C96 46 105 43 111 39C115 44 122 45 129 41C133 44 141 45 148 42L168 18L173 48C174 52 179 44 185 38C191 32 195 43 203 43C212 43 221 37 226 30C228 26 226 42 235 43C246 44 260 39 268 36"
      stroke="#141B2D"
      strokeWidth="3.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M153 36C168 34 188 33 206 31"
      stroke="#141B2D"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M54 57C112 53 185 49 262 44"
      stroke="#141B2D"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CertificateDocument: React.FC<CertificateDocumentProps> = ({
  colorTheme = 'emerald',
  viewMode = 'both',
  verificationBaseUrl,
  isPrintOnlyContainer = false,
}) => {
  const [qrSvgMarkup, setQrSvgMarkup] = useState<string>('');

  // Define a URL oficial de verificação que vai dentro do QR Code e nos links clicáveis
  const activeVerificationUrl =
    verificationBaseUrl ||
    (typeof window !== 'undefined'
      ? `${window.location.origin}/?codigo=${CERTIFICATE_01_DATA.code}#validador`
      : CERTIFICATE_01_DATA.canonicalVercelUrl);

  useEffect(() => {
    let mounted = true;
    QRCode.toString(activeVerificationUrl, {
      type: 'svg',
      margin: 1,
      width: 140,
      color: {
        dark: '#111827',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((svg) => {
        if (mounted) setQrSvgMarkup(svg);
      })
      .catch((err) => {
        console.error('Erro ao gerar QR Code SVG:', err);
      });
    return () => {
      mounted = false;
    };
  }, [activeVerificationUrl]);

  // Paleta de cores dinâmica: Verde Esmeralda Científico & Dourado Clássico (Padrão) ou Azul Safira Editorial
  const palette =
    colorTheme === 'emerald'
      ? {
          outerBorder: '#064E3B',
          innerBorder: '#047857',
          primaryTitle: '#064E3B',
          secondaryAccent: '#047857',
          goldAccent: '#B45309',
          goldBorder: '#D97706',
          goldBgLight: '#FFFBEB',
          holderBoxBg: '#F4FBF7',
          holderBoxBorder: '#B45309',
          tableHeaderBg: '#ECFDF5',
          tableHeaderBorder: '#A7F3D0',
          sectionBoxBg: '#F8FAF9',
        }
      : {
          outerBorder: '#1E3A8A',
          innerBorder: '#1D4ED8',
          primaryTitle: '#172554',
          secondaryAccent: '#1D4ED8',
          goldAccent: '#B45309',
          goldBorder: '#D97706',
          goldBgLight: '#FFFBEB',
          holderBoxBg: '#F8FAFC',
          holderBoxBorder: '#CBD5E1',
          tableHeaderBg: '#EFF6FF',
          tableHeaderBorder: '#BFDBFE',
          sectionBoxBg: '#F8FAFC',
        };

  const showFront = isPrintOnlyContainer || viewMode === 'both' || viewMode === 'front';
  const showBack = isPrintOnlyContainer || viewMode === 'both' || viewMode === 'back';

  return (
    <div
      className={
        isPrintOnlyContainer
          ? 'print-only-container hidden print:block'
          : 'flex flex-col items-center gap-10 w-full'
      }
    >
      {/* =====================================================================
          LAUDA 1 (FRENTE DO CERTIFICADO Nº 01 — 297mm x 210mm)
         ===================================================================== */}
      {showFront && (
        <article
          aria-label="Lauda 1 - Frente do Certificado Oficial Nº 01"
          className={`cert-a4-sheet ${
            showBack ? 'cert-page-break' : ''
          } relative bg-[#FFFEFA] text-[#111827] select-text box-border`}
          style={{
            width: '297mm',
            height: '210mm',
            padding: '7.5mm 9mm',
          }}
        >
          {/* Moldura Diplomática Dupla Externa */}
          <div
            className="w-full h-full flex flex-col justify-between box-border relative"
            style={{
              border: `3px solid ${palette.outerBorder}`,
              padding: '1.2mm',
            }}
          >
            <div
              className="w-full h-full flex flex-col justify-between box-border px-[8mm] py-[5.5mm] bg-[#FFFEFA]"
              style={{
                border: `1px solid ${palette.goldBorder}`,
              }}
            >
              {/* 1. CABEÇALHO INSTITUCIONAL TRIPARTIDO */}
              <header>
                <div className="grid grid-cols-12 items-center gap-2 pb-[3.5mm]">
                  {/* Bloco Esquerdo: Editora Mente e Saúde */}
                  <div className="col-span-4 flex items-center gap-2.5">
                    <EditoraMenteSaudeLogo
                      primaryColor={palette.outerBorder}
                      className="w-[14.5mm] h-[14.5mm] shrink-0"
                    />
                    <div className="leading-tight">
                      <p
                        className="font-bold tracking-tight text-[11.5pt]"
                        style={{ color: palette.primaryTitle }}
                      >
                        {CERTIFICATE_01_DATA.issuers.editora.name}
                      </p>
                      <p className="font-mono-tabular text-[8pt] text-stone-700 mt-0.5">
                        CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj}
                      </p>
                      <p
                        className="text-[8pt] font-semibold mt-0.5"
                        style={{ color: palette.secondaryAccent }}
                      >
                        {CERTIFICATE_01_DATA.issuers.editora.department}
                      </p>
                    </div>
                  </div>

                  {/* Bloco Central: Programa Interinstitucional + Metadados de Registro */}
                  <div className="col-span-4 text-center px-1">
                    <p className="text-[8.2pt] font-bold uppercase tracking-[0.04em] text-stone-800 leading-snug">
                      PROGRAMA INTERINSTITUCIONAL DE EXTENSÃO,
                      <br />
                      COMUNICAÇÃO CIENTÍFICA E EDUCAÇÃO EM SAÚDE
                    </p>
                    <div className="mt-1.5 pt-1 border-t border-stone-200 font-mono-tabular text-[7.5pt] font-semibold text-stone-700 whitespace-nowrap">
                      <span>Certificado Nº {CERTIFICATE_01_DATA.certificateNumber}</span>
                      <span className="mx-1.5 text-amber-700">·</span>
                      <span>Livro de Extensão nº {CERTIFICATE_01_DATA.bookNumber}</span>
                      <span className="mx-1.5 text-amber-700">·</span>
                      <span>Cód. {CERTIFICATE_01_DATA.code}</span>
                    </div>
                  </div>

                  {/* Bloco Direito: Centro Profissionalizante Maria Dalva de Araújo */}
                  <div className="col-span-4 flex items-center justify-end gap-2.5 text-right">
                    <div className="leading-tight">
                      <p
                        className="font-bold tracking-tight text-[10.5pt]"
                        style={{ color: palette.primaryTitle }}
                      >
                        CENTRO PROFISSIONALIZANTE
                        <br />
                        MARIA DALVA DE ARAÚJO
                      </p>
                      <p className="font-mono-tabular text-[8pt] text-stone-700 mt-0.5">
                        CNPJ: {CERTIFICATE_01_DATA.issuers.centro.cnpj}
                      </p>
                    </div>
                    <img
                      src={CERTIFICATE_01_DATA.issuers.centro.logoAsset}
                      alt="Logotipo Centro Profissionalizante Maria Dalva de Araújo"
                      referrerPolicy="no-referrer"
                      className="w-[14.5mm] h-[14.5mm] object-contain shrink-0"
                    />
                  </div>
                </div>

                {/* Linha Dupla Divisória do Cabeçalho */}
                <div
                  className="w-full h-[2px]"
                  style={{ backgroundColor: palette.outerBorder }}
                />
                <div
                  className="w-full h-[1px] mt-[1.5px]"
                  style={{ backgroundColor: palette.goldBorder }}
                />
              </header>

              {/* 2. TÍTULO PRINCIPAL E CHAMADA INSTITUCIONAL */}
              <div className="text-center mt-[1.5mm]">
                <h1
                  className="font-editorial font-bold uppercase tracking-[0.06em] text-[24pt] leading-none"
                  style={{ color: palette.primaryTitle }}
                >
                  {CERTIFICATE_01_DATA.course.certificateMainTitle}
                </h1>
                <div
                  className="w-[75mm] h-[1.8px] mx-auto mt-[2mm] mb-[2.5mm]"
                  style={{ backgroundColor: palette.goldBorder }}
                />
                <p className="text-[10.2pt] text-stone-800 leading-[1.42] max-w-[242mm] mx-auto">
                  A <strong className="font-bold text-stone-950">Editora Mente e Saúde</strong> (CNPJ:{' '}
                  {CERTIFICATE_01_DATA.issuers.editora.cnpj}), em parceria institucional com o{' '}
                  <strong className="font-bold text-stone-950">
                    Centro Profissionalizante Maria Dalva de Araújo
                  </strong>{' '}
                  (CNPJ: {CERTIFICATE_01_DATA.issuers.centro.cnpj}), certifica para os devidos fins de
                  comprovação curricular, acadêmica e de títulos (em conformidade com a{' '}
                  {CERTIFICATE_01_DATA.course.legalBasis}) que
                </p>
              </div>

              {/* 3. BLOCO DE IDENTIFICAÇÃO DO TITULAR (PADRÃO UNIFAN) */}
              <div
                className="my-[2mm] py-[3mm] px-[6mm] text-center"
                style={{
                  backgroundColor: palette.holderBoxBg,
                  borderTop: `1.5px solid ${palette.holderBoxBorder}`,
                  borderBottom: `1.5px solid ${palette.holderBoxBorder}`,
                  borderLeft: `1px solid #D6D3D1`,
                  borderRight: `1px solid #D6D3D1`,
                }}
              >
                <h2
                  className="font-editorial font-bold uppercase tracking-[0.04em] text-[22pt] leading-tight"
                  style={{ color: palette.primaryTitle }}
                >
                  {CERTIFICATE_01_DATA.holder.name}
                </h2>
                <p className="text-[10.6pt] font-bold text-stone-900 mt-0.5 tracking-tight">
                  {CERTIFICATE_01_DATA.holder.fullLine}
                </p>
              </div>

              {/* 4. CORPO DESCRITIVO DUPLO (REGRA DO ITEM 09 >= 30 HORAS) */}
              <div className="space-y-[2.8mm] text-justify text-[10.2pt] text-stone-800 leading-[1.46] px-[1mm]">
                <p>
                  concluiu com <strong className="font-bold text-stone-950">APROVAÇÃO</strong> e
                  aproveitamento integral a Atividade Extracurricular intitulada{' '}
                  <strong className="font-bold text-stone-950">
                    “{CERTIFICATE_01_DATA.course.title}”
                  </strong>
                  , desenvolvida na modalidade de{' '}
                  <strong className="font-bold text-stone-950">
                    {CERTIFICATE_01_DATA.course.modality}
                  </strong>
                  , realizada no período de{' '}
                  <strong className="font-bold text-stone-950">
                    {CERTIFICATE_01_DATA.course.period}
                  </strong>
                  , contabilizando carga horária total de{' '}
                  <strong className="font-bold text-stone-950">
                    {CERTIFICATE_01_DATA.course.workloadText}
                  </strong>
                  .
                </p>

                <p>
                  No âmbito desta formação complementar em ambiente virtual de aprendizagem, o
                  profissional cumpriu integralmente os módulos teóricos e práticos de{' '}
                  <strong className="font-bold text-stone-950">
                    estruturação lógica de manuscritos biomédicos no padrão IMRD (Introdução, Métodos,
                    Resultados e Discussão)
                  </strong>
                  ,{' '}
                  <strong className="font-bold text-stone-950">
                    normalização internacional de referências pelo Estilo Vancouver (ICMJE) e ABNT
                  </strong>
                  , ética em pesquisa científica, prevenção ao plágio,{' '}
                  <strong className="font-bold text-stone-950">
                    estratégias de submissão em periódicos indexados com revisão por pares (peer
                    review)
                  </strong>{' '}
                  e avaliação final de proficiência metodológica, obtendo{' '}
                  <strong className="font-bold text-stone-950">
                    nota final {CERTIFICATE_01_DATA.course.grade} (Aprovado)
                  </strong>
                  .
                </p>
              </div>

              {/* LOCAL E DATA */}
              <div className="text-center my-[1.5mm]">
                <p className="font-editorial italic font-bold text-[13.5pt] text-stone-900">
                  {CERTIFICATE_01_DATA.course.issueLocationAndDate}
                </p>
              </div>

              {/* 5. RODAPÉ DE ASSINATURAS E BLOCO CENTRAL DE FÉ PÚBLICA */}
              <footer className="pt-[1mm]">
                <div className="grid grid-cols-12 items-end gap-3">
                  {/* Assinatura Esquerda: Bárbara Lima dos Santos */}
                  <div className="col-span-4 text-center flex flex-col items-center">
                    <div className="h-[13mm] flex items-end justify-center mb-0.5">
                      <img
                        src={CERTIFICATE_01_DATA.issuers.editora.signatureAsset}
                        alt="Assinatura de Bárbara Lima dos Santos"
                        referrerPolicy="no-referrer"
                        className="h-[12.5mm] w-auto object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="w-[72mm] border-t border-stone-800 pt-1">
                      <p className="font-bold text-[9.2pt] text-stone-950 tracking-tight">
                        {CERTIFICATE_01_DATA.issuers.editora.signerName}
                      </p>
                      <p className="text-[7.6pt] text-stone-700 leading-tight">
                        {CERTIFICATE_01_DATA.issuers.editora.signerRole}
                      </p>
                      <p className="font-mono-tabular text-[7pt] font-semibold text-stone-800 mt-0.5">
                        Editora Mente e Saúde (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj})
                      </p>
                    </div>
                  </div>

                  {/* Centro: Trava de Autenticidade Tripla (Selo Oficial + QR Code + Quadro Manual) */}
                  <div className="col-span-4 flex items-center justify-center gap-2">
                    {/* Selo Oficial Fé Pública */}
                    <div
                      className="w-[22mm] h-[22mm] rounded-full flex flex-col items-center justify-center text-center p-1 shrink-0"
                      style={{
                        backgroundColor: palette.goldBgLight,
                        border: `2px solid ${palette.goldBorder}`,
                        boxShadow: `inset 0 0 0 2px #FEF3C7, inset 0 0 0 3px ${palette.goldBorder}`,
                      }}
                    >
                      <span className="text-[6pt] tracking-widest text-amber-800 font-bold">
                        ★ ★ ★
                      </span>
                      <span className="text-[6.2pt] font-extrabold uppercase text-amber-950 leading-tight mt-0.5">
                        SELO OFICIAL
                        <br />
                        FÉ PÚBLICA
                      </span>
                      <span className="font-mono-tabular text-[4.8pt] font-bold text-amber-900 mt-0.5">
                        {CERTIFICATE_01_DATA.code}
                      </span>
                      <span className="text-[6pt] tracking-widest text-amber-800 font-bold">
                        ★ ★ ★
                      </span>
                    </div>

                    {/* QR Code Vetorial */}
                    <div className="w-[22mm] h-[22mm] border border-stone-400 bg-white p-[1mm] flex items-center justify-center shrink-0">
                      {qrSvgMarkup ? (
                        <div
                          className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
                          dangerouslySetInnerHTML={{ __html: qrSvgMarkup }}
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-100 flex items-center justify-center text-[6pt] font-mono">
                          QR CODE
                        </div>
                      )}
                    </div>

                    {/* Quadro de Autenticação Pública Manual */}
                    <div className="border border-stone-300 bg-[#FAFAF9] px-2 py-1 text-left leading-[1.28] min-w-[44mm]">
                      <p
                        className="text-[6.3pt] font-extrabold uppercase tracking-tight"
                        style={{ color: palette.primaryTitle }}
                      >
                        AUTENTICAÇÃO PÚBLICA MANUAL
                      </p>
                      <p className="font-mono-tabular text-[6.1pt] font-bold text-stone-900 mt-0.5">
                        Cód.: {CERTIFICATE_01_DATA.code}
                      </p>
                      <p className="font-mono-tabular text-[6.1pt] font-bold text-stone-900">
                        Chave: {CERTIFICATE_01_DATA.controlKey}
                      </p>
                      <p className="text-[5.8pt] text-stone-600 mt-0.5">
                        Endereço p/ Verificação Online (Clique):
                      </p>
                      <a
                        href={activeVerificationUrl}
                        className="font-mono-tabular text-[5.5pt] font-semibold underline break-all block leading-tight"
                        style={{ color: palette.secondaryAccent }}
                      >
                        {CERTIFICATE_01_DATA.canonicalVercelUrl}
                      </a>
                    </div>
                  </div>

                  {/* Assinatura Direita: James Araújo de Santana */}
                  <div className="col-span-4 text-center flex flex-col items-center">
                    <div className="h-[13mm] flex items-end justify-center mb-0.5">
                      <JamesSignatureSvg className="h-[12mm] w-auto" />
                    </div>
                    <div className="w-[72mm] border-t border-stone-800 pt-1">
                      <p className="font-bold text-[9.2pt] text-stone-950 tracking-tight">
                        {CERTIFICATE_01_DATA.issuers.centro.signerName}
                      </p>
                      <p className="text-[7.6pt] text-stone-700 leading-tight">
                        {CERTIFICATE_01_DATA.issuers.centro.signerRole}
                      </p>
                      <p className="font-mono-tabular text-[6.6pt] font-semibold text-stone-800 mt-0.5 whitespace-nowrap">
                        Centro Profissionalizante Maria Dalva de Araújo (CNPJ:{' '}
                        {CERTIFICATE_01_DATA.issuers.centro.cnpj})
                      </p>
                    </div>
                  </div>
                </div>

                {/* Barra Inferior de Segurança */}
                <div className="mt-[2.5mm] pt-[1.5mm] border-t border-stone-300 text-center">
                  <p className="font-mono-tabular text-[6.8pt] font-semibold text-stone-700">
                    Verifique via QR Code ou clique aqui:{' '}
                    <a
                      href={activeVerificationUrl}
                      className="underline font-bold"
                      style={{ color: palette.primaryTitle }}
                    >
                      {CERTIFICATE_01_DATA.canonicalVercelUrl}
                    </a>{' '}
                    (Código {CERTIFICATE_01_DATA.code} | Chave {CERTIFICATE_01_DATA.controlKey})
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </article>
      )}

      {/* =====================================================================
          LAUDA 2 (VERSO OFICIAL — MEMORIAL DESCRITIVO E MATRIZ DE 36 HORAS)
         ===================================================================== */}
      {showBack && (
        <article
          aria-label="Lauda 2 - Verso Oficial do Certificado Nº 01 (Memorial Descritivo)"
          className="cert-a4-sheet relative bg-[#FFFEFA] text-[#111827] select-text box-border"
          style={{
            width: '297mm',
            height: '210mm',
            padding: '7.5mm 9mm',
          }}
        >
          {/* Moldura Diplomática Dupla Externa */}
          <div
            className="w-full h-full flex flex-col justify-between box-border relative"
            style={{
              border: `3px solid ${palette.outerBorder}`,
              padding: '1.2mm',
            }}
          >
            <div
              className="w-full h-full flex flex-col justify-between box-border px-[8mm] py-[5mm] bg-[#FFFEFA]"
              style={{
                border: `1px solid ${palette.goldBorder}`,
              }}
            >
              {/* 1. CABEÇALHO DO VERSO OFICIAL */}
              <header>
                <div className="flex items-center gap-3 pb-[2.5mm]">
                  <div className="flex items-center gap-2 shrink-0">
                    <EditoraMenteSaudeLogo
                      primaryColor={palette.outerBorder}
                      className="w-[12.5mm] h-[12.5mm]"
                    />
                    <img
                      src={CERTIFICATE_01_DATA.issuers.centro.logoAsset}
                      alt="Logo Centro Maria Dalva de Araújo"
                      referrerPolicy="no-referrer"
                      className="w-[12.5mm] h-[12.5mm] object-contain"
                    />
                  </div>
                  <div>
                    <h2
                      className="font-editorial font-bold uppercase tracking-[0.03em] text-[15.5pt] leading-tight"
                      style={{ color: palette.primaryTitle }}
                    >
                      MEMORIAL DESCRITIVO E REGISTRO ACADÊMICO DE ATIVIDADE EXTRACURRICULAR
                    </h2>
                    <p className="text-[8.8pt] text-stone-700 font-medium mt-0.5">
                      Verso Oficial do Certificado Nº {CERTIFICATE_01_DATA.certificateNumber} · Fé
                      Pública Interinstitucional e Validação Curricular
                    </p>
                  </div>
                </div>
                <div
                  className="w-full h-[2px]"
                  style={{ backgroundColor: palette.outerBorder }}
                />
              </header>

              {/* 2. QUADROS 1 E 2 (IDENTIFICAÇÃO DO TITULAR E ENQUADRAMENTO ITEM 09) */}
              <div className="grid grid-cols-12 gap-3 my-[1.8mm]">
                {/* Quadro 1 */}
                <div
                  className="col-span-6 border border-stone-300 px-3.5 py-2"
                  style={{ backgroundColor: palette.sectionBoxBg }}
                >
                  <h3
                    className="text-[8pt] font-extrabold uppercase tracking-wider pb-1 mb-1.5 border-b border-stone-300"
                    style={{ color: palette.primaryTitle }}
                  >
                    1. DADOS DE IDENTIFICAÇÃO DO PROFISSIONAL EXTENSIONISTA
                  </h3>
                  <div className="space-y-0.5 text-[8.8pt] leading-snug">
                    <p>
                      <span className="text-stone-600">Titular Certificado:</span>{' '}
                      <strong className="font-bold text-stone-950">
                        {CERTIFICATE_01_DATA.holder.name}
                      </strong>
                    </p>
                    <p>
                      <span className="text-stone-600">CPF Registrado:</span>{' '}
                      <strong className="font-mono-tabular font-bold text-stone-950">
                        {CERTIFICATE_01_DATA.holder.cpf}
                      </strong>
                    </p>
                    <p>
                      <span className="text-stone-600">Qualificação Profissional:</span>{' '}
                      <strong className="font-bold text-stone-950">
                        {CERTIFICATE_01_DATA.holder.role}
                      </strong>
                    </p>
                    <p>
                      <span className="text-stone-600">Instituição de Origem:</span>{' '}
                      <strong className="font-bold text-stone-950">
                        {CERTIFICATE_01_DATA.holder.institution}
                      </strong>
                    </p>
                  </div>
                </div>

                {/* Quadro 2 */}
                <div
                  className="col-span-6 border border-stone-300 px-3.5 py-2 flex flex-col justify-between"
                  style={{ backgroundColor: palette.sectionBoxBg }}
                >
                  <div>
                    <h3
                      className="text-[8pt] font-extrabold uppercase tracking-wider pb-1 mb-1.5 border-b border-stone-300"
                      style={{ color: palette.primaryTitle }}
                    >
                      2. ENQUADRAMENTO CURRICULAR E PONTUAÇÃO
                    </h3>
                    <p className="text-[8.6pt] font-bold text-stone-900 leading-snug">
                      {CERTIFICATE_01_DATA.course.editalCategory}
                    </p>
                  </div>
                  <div className="pt-1.5 mt-1.5 border-t border-stone-300 font-mono-tabular text-[7.8pt] font-bold text-stone-900">
                    Período: {CERTIFICATE_01_DATA.course.period} &nbsp;|&nbsp; Total:{' '}
                    {CERTIFICATE_01_DATA.course.workloadShort} &nbsp;|&nbsp; Situação:{' '}
                    {CERTIFICATE_01_DATA.course.status}
                  </div>
                </div>
              </div>

              {/* 3. QUADRO 3 — MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA (36 HORAS) */}
              <div className="border border-stone-300 bg-white my-[1mm]">
                <div
                  className="px-3.5 py-1.5 border-b"
                  style={{
                    backgroundColor: palette.tableHeaderBg,
                    borderColor: palette.tableHeaderBorder,
                  }}
                >
                  <h3
                    className="text-[8.2pt] font-extrabold uppercase tracking-wider"
                    style={{ color: palette.primaryTitle }}
                  >
                    3. MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA (36 HORAS)
                  </h3>
                </div>
                <div className="divide-y divide-stone-200">
                  {CERTIFICATE_01_DATA.axes.map((axis) => (
                    <div
                      key={axis.id}
                      className="grid grid-cols-12 items-center px-3.5 py-[2.2mm] gap-3"
                    >
                      <div className="col-span-4">
                        <p className="text-[8.4pt] font-bold text-stone-950 leading-tight">
                          {axis.title}
                        </p>
                        <p className="text-[7.2pt] text-stone-600 mt-0.5 leading-tight">
                          {axis.subtitle}
                        </p>
                      </div>
                      <div className="col-span-7 text-[8pt] text-stone-800 leading-[1.35]">
                        {axis.description}
                      </div>
                      <div className="col-span-1 text-right font-mono-tabular font-bold text-[8.4pt] text-stone-950 whitespace-nowrap">
                        {axis.workload}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. QUADRO 4 — REGISTRO OFICIAL DE FÉ PÚBLICA, ENDEREÇO WEB E CHAVES DE VERIFICAÇÃO */}
              <div
                className="border px-3.5 py-2 my-[1mm] grid grid-cols-12 items-center gap-3"
                style={{
                  backgroundColor: palette.goldBgLight,
                  borderColor: palette.goldBorder,
                }}
              >
                <div className="col-span-10 space-y-1">
                  <h3 className="text-[8pt] font-extrabold uppercase tracking-wider text-amber-950">
                    4. REGISTRO OFICIAL DE FÉ PÚBLICA, ENDEREÇO WEB E CHAVES DE VERIFICAÇÃO DE
                    AUTENTICIDADE
                  </h3>
                  <p className="text-[8.3pt] text-stone-900 leading-snug">
                    Certificado registrado sob o{' '}
                    <strong className="font-bold">
                      nº {CERTIFICATE_01_DATA.certificateNumber} no Livro de Extensão e Cursos nº{' '}
                      {CERTIFICATE_01_DATA.bookNumber}, {CERTIFICATE_01_DATA.sheetNumber}
                    </strong>
                    , expedido pela <strong className="font-bold">Editora Mente e Saúde</strong>{' '}
                    (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj}) e{' '}
                    <strong className="font-bold">
                      Centro Profissionalizante Maria Dalva de Araújo
                    </strong>{' '}
                    (CNPJ: {CERTIFICATE_01_DATA.issuers.centro.cnpj}).
                  </p>
                  <p className="font-mono-tabular text-[7.8pt] font-bold text-stone-950 pt-0.5">
                    CÓDIGO DE AUTENTICIDADE: {CERTIFICATE_01_DATA.code} &nbsp;&nbsp;|&nbsp;&nbsp;
                    CHAVE DE CONTROLE / DÍGITO: {CERTIFICATE_01_DATA.controlKey}
                  </p>
                  <p className="font-mono-tabular text-[7.3pt] font-bold text-stone-900">
                    ENDEREÇO PARA VERIFICAÇÃO MANUAL (CLIQUE AQUI):{' '}
                    <a
                      href={activeVerificationUrl}
                      className="underline"
                      style={{ color: palette.primaryTitle }}
                    >
                      {CERTIFICATE_01_DATA.canonicalVercelUrl}
                    </a>
                  </p>
                  <p className="font-mono-tabular text-[7.1pt] text-stone-700">
                    HASH SHA-256: {CERTIFICATE_01_DATA.sha256}
                  </p>
                </div>

                {/* QR Code no Verso */}
                <div className="col-span-2 flex justify-end">
                  <div className="w-[23mm] h-[23mm] border border-stone-400 bg-white p-[1.2mm] flex items-center justify-center">
                    {qrSvgMarkup ? (
                      <div
                        className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: qrSvgMarkup }}
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-100 flex items-center justify-center text-[6pt] font-mono">
                        QR CODE
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. RODAPÉ DO VERSO OFICIAL */}
              <footer className="grid grid-cols-12 items-end gap-2 pt-[1mm]">
                {/* Assinatura Compacta Esquerda */}
                <div className="col-span-4 text-center flex flex-col items-center">
                  <div className="h-[10.5mm] flex items-end justify-center">
                    <img
                      src={CERTIFICATE_01_DATA.issuers.editora.signatureAsset}
                      alt="Rubrica de Bárbara Lima dos Santos"
                      referrerPolicy="no-referrer"
                      className="h-[10mm] w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[68mm] border-t border-stone-800 pt-0.5">
                    <p className="font-bold text-[8.5pt] text-stone-950">
                      {CERTIFICATE_01_DATA.issuers.editora.signerName}
                    </p>
                    <p className="font-mono-tabular text-[6.8pt] font-semibold text-stone-700">
                      Editora Mente e Saúde (CNPJ: {CERTIFICATE_01_DATA.issuers.editora.cnpj})
                    </p>
                  </div>
                </div>

                {/* Chancela Central do Verso */}
                <div className="col-span-4 text-center pb-0.5">
                  <p className="font-editorial italic font-bold text-[12pt] text-stone-900">
                    {CERTIFICATE_01_DATA.course.issueLocationAndDate}
                  </p>
                  <p className="text-[7.5pt] font-semibold text-stone-700 mt-0.5">
                    Documento Oficial de 2 Laudas (Frente e Verso) · Válido em Todo o Território
                    Nacional
                  </p>
                  <p className="font-mono-tabular text-[6.8pt] text-stone-600 mt-0.5">
                    Registro: {CERTIFICATE_01_DATA.code} · Chave: {CERTIFICATE_01_DATA.controlKey}
                  </p>
                </div>

                {/* Assinatura Compacta Direita */}
                <div className="col-span-4 text-center flex flex-col items-center">
                  <div className="h-[10.5mm] flex items-end justify-center">
                    <JamesSignatureSvg className="h-[9.5mm] w-auto" />
                  </div>
                  <div className="w-[68mm] border-t border-stone-800 pt-0.5">
                    <p className="font-bold text-[8.5pt] text-stone-950">
                      {CERTIFICATE_01_DATA.issuers.centro.signerName}
                    </p>
                    <p className="font-mono-tabular text-[6.8pt] font-semibold text-stone-700">
                      {CERTIFICATE_01_DATA.issuers.centro.shortName} (CNPJ:{' '}
                      {CERTIFICATE_01_DATA.issuers.centro.cnpj})
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};
