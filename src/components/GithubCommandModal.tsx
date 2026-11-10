import React, { useState } from 'react';
import { Check, Copy, Download, Terminal, FileCode2, GitBranch, ExternalLink } from 'lucide-react';
import { CERTIFICATE_01_DATA } from '../data/courseAndCertificateData';

export const GithubCommandSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'github-cli' | 'prompt-mestre' | 'vercel-json'>('github-cli');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const gitAndVercelCommands = `# 1. Inicializar repositório Git local para o Certificado Nº 01 (Item 09 - 36 Horas)
git init
git branch -M main

# 2. Adicionar todos os arquivos da plataforma + Certificado Nº 01 (EMS-EXT-2023-0901)
git add .
git commit -m "feat(cert-01): plataforma curso escrita cientifica + certificado 2 laudas EMS-EXT-2023-0901 e validador oficial"

# 3. Criar repositório no GitHub via GitHub CLI e enviar código
gh repo create extensao-escrita-cientifica-1 --public --source=. --remote=origin --push

# 4. Deploy direto na Vercel com domínio oficial do QR Code
npx vercel --prod --name extensao-escrita-cientifica-1

# URL Oficial de Verificação Pública gerada (sincronizada com o QR Code):
# https://extensao-escrita-cientifica-1.vercel.app/?codigo=EMS-EXT-2023-0901#validador`;

  const masterPromptForGithubRepo = `ATUE COMO UM ENGENHEIRO FULL-STACK SÊNIOR E DESIGNER EDITORIAL ACADÊMICO.
Elabore o repositório completo (sistema/site/plataforma + Certificado Oficial Nº 01 de 2 Laudas em A4 Paisagem + Sistema Autenticador Público via QR Code e Parâmetro URL) para deploy imediato na Vercel em:
https://extensao-escrita-cientifica-1.vercel.app/?codigo=EMS-EXT-2023-0901#validador

1. IDENTIDADE VISUAL E PALETA DE CORES (VERDE ESMERALDA CIENTÍFICO & DOURADO CLÁSSICO):
- Superfície Editorial Dominante (60%): Alabastro Quente (#FBF9F5) na Web e Marfim Diplomático (#FFFEFA) no Certificado.
- Estrutura Institucional (30%): Verde Esmeralda Profundo (#064E3B / #022C22) e Carvão Tipográfico (#1C1917).
- Chancelas e Destaques (10%): Ouro Clássico Acadêmico (#B45309 / #D97706) no Selo Oficial de Fé Pública, filetes duplos e indicadores ativos.
- Tipografia: 'Cormorant Garamond' (Títulos e Diploma), 'Plus Jakarta Sans' (Corpo e Interface) e 'JetBrains Mono' (Códigos, CNPJ, Carga Horária e Hash SHA-256).

2. CONTEÚDO INTERATIVO DA PLATAFORMA (CURSO DE EXTENSÃO Nº 01 — 36 HORAS):
- Explicação detalhada e interativa sobre o "Curso de Extensão EAD em Escrita Científica, Normas Editoriais (Vancouver/ABNT) e Publicação de Artigos Biomédicos".
- Laboratório Interativo da Arquitetura IMRD (Introdução, Métodos, Resultados e Discussão) com comparação entre redação inadequada e redação padrão PubMed/SciELO.
- Comparador Prático de Citações e Referências: Estilo Vancouver (ICMJE / NLM) vs. ABNT (NBR 6023 / NBR 10520) + Descritores DeCS/MeSH.
- Acervo Digital com Guia Metodológico da Editora Mente e Saúde + Checklist Interativo de Submissão e Revisão por Pares (Peer Review & Cover Letter).
- Simulador do Exame Final de Proficiência Metodológica (comprovando o rigor da Nota 9,6).

3. DADOS OFICIAIS DO CERTIFICADO Nº 01 (MATRIZ ITEM 09 — FUBOG >= 30 HORAS):
- Titular: ${CERTIFICATE_01_DATA.holder.name}
- Qualificação e IES: ${CERTIFICATE_01_DATA.holder.fullLine}
- Emissores: Editora Mente e Saúde (CNPJ: ${CERTIFICATE_01_DATA.issuers.editora.cnpj}) em parceria institucional com o Centro Profissionalizante Maria Dalva de Araújo (CNPJ: ${CERTIFICATE_01_DATA.issuers.centro.cnpj})
- Registro: Certificado Nº 01 · Livro de Extensão nº 01/2023 · Folha 18
- Código de Autenticidade: ${CERTIFICATE_01_DATA.code}
- Chave de Controle / Dígito: ${CERTIFICATE_01_DATA.controlKey}
- Hash SHA-256: ${CERTIFICATE_01_DATA.sha256}
- Período: ${CERTIFICATE_01_DATA.course.period} | Carga Horária: 36 (trinta e seis) horas | Nota Final: 9,6 (Aprovado)
- Local e Data: ${CERTIFICATE_01_DATA.course.issueLocationAndDate}
- Assinaturas (Frente e Verso):
  * Esquerda: BÁRBARA LIMA DOS SANTOS — Editora-Chefe e Coordenadora de Extensão Editorial | Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)
  * Direita: JAMES ARAÚJO DE SANTANA — Coordenador de Extensão e Projetos Educativos | Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)

4. ESTRUTURA EXATA DAS 2 LAUDAS (ESTILO PDF VISÍVEL NO SITE + DOWNLOAD A4 PAISAGEM 297mm x 210mm):
- Lauda 1 (Frente): Cabeçalho tripartido com logos sem fundo, título CERTIFICADO DE CURSO DE EXTENSÃO, destaque do titular UNIFAN, corpo descritivo duplo (menção à aprovação, 36 horas, IMRD, Vancouver/ABNT, ética em pesquisa, peer review e nota 9,6), data e rodapé com as 2 rubricas limpas + Selo Oficial Fé Pública Dourado + QR Code funcional + Quadro de Autenticação Manual.
- Lauda 2 (Verso — Memorial Descritivo): Quadro 1 (Dados do Profissional), Quadro 2 (Enquadramento Item 09 - mínimo 30h), Quadro 3 (Matriz Programática de 36h dividida em Eixo I: 10h, Eixo II: 08h, Eixo III: 10h, Eixo IV: 08h), Quadro 4 (Registro Oficial Livro 01/2023 Folha 18, Código, Chave, URL e Hash SHA-256 + QR Code) e rodapé assinado.
- O validador (#validador) deve ler automaticamente ?codigo=EMS-EXT-2023-0901 na URL e exibir o laudo completo de autenticidade pública.`;

  const vercelConfigJson = `{
  "name": "extensao-escrita-cientifica-1",
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`;

  return (
    <section
      id="comando-github"
      className="no-print py-16 border-t border-[#E7E2DA] bg-[#F4F1EA]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D6CEBE]">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#064E3B] font-semibold">
              05. Repositório GitHub & Deploy Automático Vercel
            </p>
            <h2 className="font-editorial text-3xl lg:text-4xl font-bold text-[#1C1917] mt-1">
              Comando Estruturado para GitHub & Publicação do Autenticador
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Utilize os comandos e a especificação técnica abaixo para versionar este sistema no
              GitHub ou implantar no subdomínio oficial{' '}
              <span className="font-mono-tabular font-semibold text-[#064E3B]">
                extensao-escrita-cientifica-1.vercel.app
              </span>{' '}
              vinculado ao QR Code do Certificado Nº 01.
            </p>
          </div>

          {/* Seletor de Abas */}
          <div className="flex items-center gap-1 p-1 bg-[#E7E2DA] rounded-lg self-start">
            <button
              type="button"
              onClick={() => setActiveTab('github-cli')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'github-cli'
                  ? 'bg-[#064E3B] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Comandos Git & Vercel CLI
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('prompt-mestre')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'prompt-mestre'
                  ? 'bg-[#064E3B] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              Comando / Prompt Mestre GitHub
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vercel-json')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'vercel-json'
                  ? 'bg-[#064E3B] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              Configuração vercel.json
            </button>
          </div>
        </div>

        {/* Conteúdo da Aba Selecionada */}
        <div className="mt-8 bg-[#022C22] text-stone-100 rounded-xl border border-[#064E3B] overflow-hidden shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 bg-[#042F2E] border-b border-[#064E3B]">
            <div className="flex items-center gap-3 text-xs font-mono-tabular text-emerald-200">
              <span>
                {activeTab === 'github-cli' && 'bash — deploy-extensao-escrita-cientifica-1.sh'}
                {activeTab === 'prompt-mestre' && 'SPEC-GITHUB-CERTIFICADO-01-EMS-EXT-2023-0901.md'}
                {activeTab === 'vercel-json' && 'vercel.json — Rotas SPA e Parâmetro ?codigo='}
              </span>
              <span aria-hidden="true">·</span>
              <span>Cód. {CERTIFICATE_01_DATA.code}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const contentToCopy =
                    activeTab === 'github-cli'
                      ? gitAndVercelCommands
                      : activeTab === 'prompt-mestre'
                      ? masterPromptForGithubRepo
                      : vercelConfigJson;
                  handleCopy(activeTab, contentToCopy);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold bg-[#B45309] hover:bg-[#D97706] text-white rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedId === activeTab ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copiado para a Área de Transferência
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copiar Comando Completo
                  </>
                )}
              </button>
            </div>
          </div>

          <pre className="p-6 text-xs font-mono-tabular leading-relaxed overflow-x-auto text-emerald-50 max-h-[380px]">
            <code>
              {activeTab === 'github-cli' && gitAndVercelCommands}
              {activeTab === 'prompt-mestre' && masterPromptForGithubRepo}
              {activeTab === 'vercel-json' && vercelConfigJson}
            </code>
          </pre>
        </div>

        {/* Guia Rápido de Parâmetros de Verificação */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FBF9F5] border border-[#E7E2DA] p-5 rounded-lg">
            <p className="text-xs font-mono-tabular uppercase text-stone-500">
              URL Oficial do QR Code (Tema 01)
            </p>
            <p className="font-mono-tabular text-xs font-semibold text-[#064E3B] mt-1.5 break-all">
              {CERTIFICATE_01_DATA.canonicalVercelUrl}
            </p>
          </div>
          <div className="bg-[#FBF9F5] border border-[#E7E2DA] p-5 rounded-lg">
            <p className="text-xs font-mono-tabular uppercase text-stone-500">
              Identificadores Aceitos no Validador
            </p>
            <p className="font-mono-tabular text-xs font-semibold text-stone-900 mt-1.5">
              {CERTIFICATE_01_DATA.code} &nbsp;·&nbsp; {CERTIFICATE_01_DATA.controlKey} &nbsp;·&nbsp;{' '}
              {CERTIFICATE_01_DATA.holder.cpf}
            </p>
          </div>
          <div className="bg-[#FBF9F5] border border-[#E7E2DA] p-5 rounded-lg flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono-tabular uppercase text-stone-500">
                Arquivo PDF de Referência (Anexo 01)
              </p>
              <p className="text-xs font-semibold text-stone-900 mt-1">
                2 Laudas (Frente e Verso · 36 Horas)
              </p>
            </div>
            <a
              href="/assets/aistudio/Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA__3__450799c4.pdf"
              download="Certificado_Extensao_01_EMS-EXT-2023-0901_LUCAS_GONCALVES_SILVEIRA.pdf"
              className="px-3.5 py-2 text-xs font-semibold bg-[#064E3B] hover:bg-[#047857] text-white rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
