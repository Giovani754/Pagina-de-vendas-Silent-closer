import { useState, useEffect } from 'react'
import {
  ChevronDown,
  ArrowRight,
  Check,
  X,
  Crosshair,
  BookOpen,
  Bot,
  Terminal,
} from 'lucide-react'

/* ═══════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════ */

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
        }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ═══════════════════════════════════════════
   CORES
   Principal:   #FFFFFF
   Secundário:  #C9CED8
   Muted:       #9AA3B2
   ═══════════════════════════════════════════ */

const Hr = () => (
  <div className="max-w-[960px] mx-auto px-6 md:px-8">
    <div className="h-px bg-white/[0.06]" />
  </div>
)

const Rotulo = ({ children }) => (
  <p className="text-[9px] uppercase tracking-[0.3em] text-[#9AA3B2] font-medium mb-6">
    {children}
  </p>
)

const BotaoCTA = ({ soTexto = false }) => (
  <a href="https://pay.cakto.com.br/qusyvox_784416"
    className="inline-flex items-center gap-2 bg-[#F2F2F2] text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-[0.08em] px-12 py-[17px] hover:bg-white transition-colors">
    {soTexto ? 'ATIVAR PROTOCOLO' : 'ATIVAR PROTOCOLO — R$97,90'}
    <ArrowRight size={13} strokeWidth={2} />
  </a>
)

function PerguntaFAQ({ q, a }) {
  const [open, set] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button onClick={() => set(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer">
        <span className="text-[#C9CED8] text-[15px] font-medium pr-8 group-hover:text-white transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown size={13}
          className={`text-[#9AA3B2] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div>
          <p className="text-[#9AA3B2] text-[14px] leading-[1.8] pb-5 pr-8">{a}</p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════ */

export default function App() {
  useReveal()

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">

      {/* NAV */}
      <nav className="border-b border-white/[0.06]">
        <div className="max-w-[960px] mx-auto px-6 md:px-8 h-11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crosshair size={11} strokeWidth={1.5} className="text-[#9AA3B2]" />
            <span className="text-[#C9CED8] text-[10px] font-semibold tracking-[0.18em] uppercase">
              Silent Closer
            </span>
          </div>
          <a href="#oferta" className="text-[#9AA3B2] text-[10px] uppercase tracking-[0.12em] hover:text-[#C9CED8] transition-colors">
            Ativar
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          1 · HERO
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-12 items-start">

          <div className="lg:col-span-3 rv">
            <Rotulo>Arquitetura de decisão para vendas de alto valor</Rotulo>

            <h1 className="text-white font-extrabold tracking-[-0.03em] leading-[1.04] text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] mb-6">
              Toda venda que escapa
              <br />
              <span className="text-white/15">
                tinha uma resposta certa.
              </span>
            </h1>

            <p className="text-[#C9CED8] text-[15px] md:text-[16px] leading-[1.85] max-w-[440px] mb-4">
              Você perde margem, comissão e respeito toda vez que improvisa na objeção.
              O problema não é o lead.
              É você abrir a boca sem diagnóstico, sem critério e sem uma resposta pronta.
            </p>

            <p className="text-[#9AA3B2] text-[13px] mb-8 max-w-[400px] leading-relaxed">
              Um sistema que separa desculpa de resistência real
              e te entrega o que dizer — pronto pra copiar e colar.
            </p>

            <ul className="space-y-2 mb-4">
              {[
                'Diagnóstico da objeção real em 4 camadas',
                'Resposta pronta com lógica — sem se justificar',
                'Postura que mantém margem e faz o lead decidir',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#C9CED8] text-[13px]">
                  <Check size={12} strokeWidth={1.5} className="text-[#9AA3B2] mt-[2px] flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* PAINEL */}
          <div className="lg:col-span-2 rv" style={{ transitionDelay: '0.12s' }}>
            <div className="border border-white/[0.08] p-7 md:p-8 lg:mt-4">
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-5">Acesso completo</p>

              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-[#9AA3B2] text-sm font-medium">R$</span>
                <span className="text-white text-[3.2rem] font-extrabold tracking-[-0.04em] leading-none">97</span>
                <span className="text-white text-lg font-bold">,90</span>
              </div>

              <div className="h-px bg-white/[0.06] my-5" />

              <p className="text-[#9AA3B2] text-[10px] tracking-[0.15em] uppercase mb-5">
                Pagamento único&ensp;·&ensp;Acesso vitalício
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  'Sistema completo de diagnóstico e postura',
                  'Agente IA com resposta pronta para copiar e colar',
                  'Atualizações de cenários e objeções inclusos',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={12} strokeWidth={1.5} className="text-[#9AA3B2] mt-[2px] flex-shrink-0" />
                    <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>

              <a href="https://pay.cakto.com.br/qusyvox_784416"
                className="block w-full text-center text-[10px] font-semibold tracking-[0.1em] uppercase py-4 bg-[#F2F2F2] text-[#0A0A0A] hover:bg-white transition-colors">
                ATIVAR PROTOCOLO
              </a>
              <p className="text-[#9AA3B2] text-[9px] text-center mt-3 tracking-wide">
                Acesso liberado após confirmação
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          2 · O PROBLEMA REAL
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-xl rv">
          <Rotulo>O problema real</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-8">
            Você não perde no "não".
            <br />
            <span className="text-white/20">
              Você perde no "vou pensar".
            </span>
          </h2>

          <div className="space-y-5 text-[#C9CED8] text-[15px] leading-[1.8]">
            <p>
              "Vou pensar" não é educação. É fuga.
            </p>
            <p>
              Ele diz que gostou, concorda com tudo, te elogia…
              e sai da conversa do mesmo jeito que entrou: sem decidir nada.
            </p>
            <p>
              E quando ele sai, ele compara, pede opinião pra quem não entende, procura "mais barato".
              Enquanto isso você fica olhando tela, esperando retorno — como se retorno pagasse conta.
            </p>
            <p>
              A comissão evapora.
              <br />O mês pesa.
              <br />E você entra no próximo lead carregando a ansiedade do último.
            </p>
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-3">O reflexo automático</p>
            {[
              'Manda mensagem dois dias depois pedindo retorno',
              'Envia material que ninguém pediu',
              'Oferece desconto antes de entender a objeção',
              'Se justifica, explica demais, perde postura',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
                <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-[#9AA3B2] text-[14px] leading-relaxed space-y-2">
            <p>Não é falta de esforço.<br />É falta de estrutura e conduta.</p>
            <p>Quem não tem sistema depende de sorte.<br />E sorte não paga boleto.</p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          3 · ANTES VS. DEPOIS
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="rv mb-12">
          <Rotulo>Contraste</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Antes vs. depois do protocolo.
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-7 md:p-9 space-y-4">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-2">Antes</p>
            {[
              'Improvisa e torce pra dar certo',
              'Entra na objeção e perde postura',
              'Justifica preço como se pedisse permissão',
              'Dá desconto pra aliviar tensão',
              'Fecha o mês ansioso, sem previsibilidade',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
                <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] p-7 md:p-9 space-y-4">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-2">Depois</p>
            {[
              'Diagnostica antes de reagir',
              'Separa máscara do medo real',
              'Nomeia o jogo sem brigar',
              'Devolve critério e puxa decisão',
              'Opera com controle — sem desconto, sem correr atrás',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          4 · 4 MOVIMENTOS
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="rv mb-12">
          <Rotulo>O protocolo</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            4 movimentos.
            <br /><span className="text-white/20">Nenhum depende de talento.</span>
          </h2>
        </div>

        <div className="rv grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0" style={{ transitionDelay: '0.1s' }}>
          {[
            { n: '01', titulo: 'Diagnóstico', desc: 'Identifique o tipo de objeção — antes de tentar "responder".' },
            { n: '02', titulo: 'Máscara vs medo real', desc: 'Separe a frase educada do problema de verdade.' },
            { n: '03', titulo: 'Nomeie o jogo', desc: 'Coloque o padrão na mesa com neutralidade — sem acusar, sem implorar.' },
            { n: '04', titulo: 'Parâmetro', desc: 'Dê um critério simples pra decidir agora — sem empurrar, sem abrir margem.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 py-6 border-b border-white/[0.04]">
              <span className="text-white/[0.04] text-[2.2rem] font-extrabold tracking-tight leading-none flex-shrink-0 w-10 text-right">
                {s.n}
              </span>
              <div className="pt-1">
                <h3 className="text-white text-[15px] font-semibold tracking-tight mb-1">
                  {s.titulo}
                </h3>
                <p className="text-[#9AA3B2] text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          5 · DOIS COMPONENTES
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="rv mb-14">
          <Rotulo>O que você recebe</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Dois componentes.
            <br /><span className="text-white/20">Um sistema.</span>
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-7 md:p-9">
            <div className="flex items-center gap-2.5 mb-5">
              <BookOpen size={13} strokeWidth={1.5} className="text-[#9AA3B2]" />
              <span className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em]">Componente 01</span>
            </div>
            <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mb-2">
              O Protocolo
            </h3>
            <p className="text-[#9AA3B2] text-[13px] leading-[1.75] mb-5">
              Base de postura, linguagem e arquitetura de decisão.
            </p>
            <ul className="space-y-2.5">
              {[
                'Diagnóstico de objeções em 4 camadas',
                'Estrutura pra manter controle sem pressão',
                'Modelos de resposta pra cenários reais de negociação',
                'Conduta que protege sua margem e seu respeito',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[12px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0A] p-7 md:p-9">
            <div className="flex items-center gap-2.5 mb-5">
              <Bot size={13} strokeWidth={1.5} className="text-[#9AA3B2]" />
              <span className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em]">Componente 02</span>
            </div>
            <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mb-2">
              O Arquiteto (Agente IA)
            </h3>
            <p className="text-[#9AA3B2] text-[13px] leading-[1.75] mb-5">
              Você cola a objeção. Ele devolve o próximo passo.
            </p>
            <ul className="space-y-2.5">
              {[
                'Diagnóstico do que está por trás da frase',
                'Plano do que fazer (em que ordem)',
                'Resposta pronta pra copiar e colar',
                'Variações por postura (neutro / firme / corte limpo)',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[12px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          6 · O ARQUITETO EM AÇÃO (3 exemplos)
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="rv mb-10">
          <Rotulo>Prova operacional</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-3">
            O Arquiteto em ação
          </h2>
          <p className="text-[#9AA3B2] text-[13px] max-w-md leading-relaxed">
            Três exemplos reais de saída do Agente IA. Cada resposta termina com uma escolha que obriga movimento.
          </p>
        </div>

        {/* EXEMPLO 01 — "VOU PENSAR" */}
        <div className="rv border border-white/[0.06] mb-6" style={{ transitionDelay: '0.08s' }}>
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Terminal size={10} strokeWidth={1.5} className="text-[#9AA3B2]" />
              <span className="text-[#9AA3B2] text-[9px] tracking-[0.12em] uppercase">
                Exemplo 01 — "Vou pensar"
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
            </div>
          </div>

          <div className="p-5 md:p-8 space-y-6">
            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Entrada do vendedor</p>
              <p className="text-[#C9CED8] text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4">
                "Ele disse que gostou, que faz sentido, mas no final falou que vai pensar e me avisa."
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Máscara vs. Medo</p>
              <p className="text-[#C9CED8] text-[14px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Na superfície, ele está sendo educado.
                Por baixo, ele não tem critério pra se sentir seguro decidindo.
                Se ele sair agora, ele vai tentar "pensar" sozinho — e isso vira adiamento.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Nome do jogo</p>
              <p className="text-white text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4 font-medium">
                Adiamento por falta de critério.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Lógica do Arquiteto</p>
              <p className="text-[#9AA3B2] text-[13px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Não peça retorno. Não mande material.
                Devolva um critério simples e feche a conversa com escolha binária.
              </p>
            </div>

            <div className="h-px bg-white/[0.04]" />

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9AA3B2]" />
                Resposta pronta para copiar e colar
              </p>
              <div className="bg-white/[0.02] border border-white/[0.06] px-5 py-4">
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono">
                  Perfeito. Só antes de você sair: "pensar" sobre o quê exatamente?
                </p>
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono mt-3">
                  Se for sobre encaixe e prioridade, eu te faço uma pergunta e você decide com clareza:
                  isso é pra agora ou você prefere assumir que vai deixar pra depois?
                </p>
              </div>
              <p className="text-[#9AA3B2] text-[11px] mt-3 leading-relaxed italic">
                Essa resposta força definição. Sem grosseria. Sem pressão. Ele tem que escolher.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLO 02 — "TÁ CARO / MAIS BARATO" */}
        <div className="rv border border-white/[0.06] mb-6" style={{ transitionDelay: '0.15s' }}>
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Terminal size={10} strokeWidth={1.5} className="text-[#9AA3B2]" />
              <span className="text-[#9AA3B2] text-[9px] tracking-[0.12em] uppercase">
                Exemplo 02 — "Tá caro / mais barato eu achei"
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
            </div>
          </div>

          <div className="p-5 md:p-8 space-y-6">
            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Entrada do vendedor</p>
              <p className="text-[#C9CED8] text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4">
                "Ele falou que achou mais barato em outro lugar e que vai comparar."
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Máscara vs. Medo</p>
              <p className="text-[#C9CED8] text-[14px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Na superfície é preço.
                Por baixo é insegurança: ele não sabe comparar e quer validação sem parecer indeciso.
                Se você competir em preço, você vira commodity.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Nome do jogo</p>
              <p className="text-white text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4 font-medium">
                Comparação sem critério.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Lógica do Arquiteto</p>
              <p className="text-[#9AA3B2] text-[13px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Valide a decisão e traga o critério que ele não está usando.
                Puxe um próximo passo: enviar os 3 pontos de comparação.
              </p>
            </div>

            <div className="h-px bg-white/[0.04]" />

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9AA3B2]" />
                Resposta pronta para copiar e colar
              </p>
              <div className="bg-white/[0.02] border border-white/[0.06] px-5 py-4">
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono">
                  Faz sentido comparar. Só não compara no escuro.
                </p>
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono mt-3">
                  Me diz três coisas que você quer garantir: resultado, prazo, suporte ou risco?
                  Se você me responder isso agora, eu te devolvo um comparativo limpo — e aí você decide por critério, não por impulso.
                </p>
              </div>
              <p className="text-[#9AA3B2] text-[11px] mt-3 leading-relaxed italic">
                Próximo passo claro: ele precisa te dar os 3 critérios agora.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLO 03 — "PRECISO FALAR COM MEU SÓCIO" */}
        <div className="rv border border-white/[0.06]" style={{ transitionDelay: '0.22s' }}>
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Terminal size={10} strokeWidth={1.5} className="text-[#9AA3B2]" />
              <span className="text-[#9AA3B2] text-[9px] tracking-[0.12em] uppercase">
                Exemplo 03 — "Preciso falar com meu sócio"
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
              <span className="w-[6px] h-[6px] rounded-full bg-white/[0.08]" />
            </div>
          </div>

          <div className="p-5 md:p-8 space-y-6">
            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Entrada do vendedor</p>
              <p className="text-[#C9CED8] text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4">
                "Ele disse que precisa falar com o sócio e depois volta."
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Máscara vs. Medo</p>
              <p className="text-[#C9CED8] text-[14px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Na superfície é alinhamento.
                Por baixo é terceirização da responsabilidade: ele quer alguém pra "carregar" a decisão.
                Se ele sair sem trilho, vira semana de silêncio.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Nome do jogo</p>
              <p className="text-white text-[14px] leading-relaxed border-l-2 border-white/[0.08] pl-4 font-medium">
                Terceirização de responsabilidade.
              </p>
            </div>

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-2">Lógica do Arquiteto</p>
              <p className="text-[#9AA3B2] text-[13px] leading-[1.8] border-l-2 border-white/[0.08] pl-4">
                Não peça pra ele "ver e voltar".
                Crie uma ponte: o que exatamente o outro precisa aprovar e qual critério define sim/não.
              </p>
            </div>

            <div className="h-px bg-white/[0.04]" />

            <div>
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9AA3B2]" />
                Resposta pronta para copiar e colar
              </p>
              <div className="bg-white/[0.02] border border-white/[0.06] px-5 py-4">
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono">
                  Tranquilo. Pra essa conversa não virar "depois eu vejo", me diz uma coisa:
                  o que exatamente seu sócio precisa aprovar — preço, prioridade ou risco?
                </p>
                <p className="text-[#C9CED8] text-[14px] leading-[1.85] font-mono mt-3">
                  Se você me responder isso, eu te mando um resumo com os critérios.
                  Aí vocês decidem hoje e você me fala: sim ou não.
                </p>
              </div>
              <p className="text-[#9AA3B2] text-[11px] mt-3 leading-relaxed italic">
                Próximo passo: ele te diz o item de aprovação e você manda resumo. Fecha o loop.
              </p>
            </div>
          </div>
        </div>

        {/* TAGLINE PÓS-EXEMPLOS */}
        <div className="rv mt-10 border-t border-white/[0.06] pt-8" style={{ transitionDelay: '0.25s' }}>
          <p className="text-[#C9CED8] text-[15px] font-medium leading-relaxed max-w-md">
            Saída sempre tem próximo passo.
            <br />
            <span className="text-[#9AA3B2]">Ou o lead decide. Ou ele assume que está adiando.</span>
          </p>
        </div>

        {/* CTA 2 de 3 */}
        <div className="rv text-center mt-14" style={{ transitionDelay: '0.3s' }}>
          <BotaoCTA soTexto />
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          7 · FILTRO
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="rv mb-12">
          <Rotulo>Filtro</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Isso não é pra todo mundo.
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-7 md:p-9">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-6">Para quem é</p>
            <ul className="space-y-3.5">
              {[
                'Vende serviço / proposta / oferta de valor alto',
                'Perde venda no final por objeção mal conduzida',
                'Já deu desconto por insegurança e se arrependeu',
                'Quer manter margem sem virar agressivo',
                'Quer resposta pronta com critério, não com papo',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0A] p-7 md:p-9">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-6">Para quem não é</p>
            <ul className="space-y-3.5">
              {[
                'Quer frase pronta pra decorar e repetir igual robô',
                'Acha que vender é insistir até cansar o lead',
                'Vive de desconto e chama isso de "negociação"',
                'Não vende por conversa e decisão direta',
                'Prefere reclamar do mercado a corrigir a própria conduta',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          8 · FAQ
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-24 md:mb-32">
          <div className="md:col-span-4 rv">
            <Rotulo>Dúvidas</Rotulo>
            <h2 className="text-white font-bold tracking-[-0.02em] text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
              Perguntas
              <br />frequentes
            </h2>
          </div>
          <div className="md:col-span-8 rv" style={{ transitionDelay: '0.08s' }}>
            <div className="border-t border-white/[0.06]">
              <PerguntaFAQ
                q="É só mais um script de vendas?"
                a="Não. Script tenta empurrar. Isso aqui diagnostica e devolve critério. Script você decora. Critério você usa pra sempre." />
              <PerguntaFAQ
                q="Funciona no meu nicho?"
                a="Se existe conversa, existe objeção. O que muda é a frase. O jogo por trás é o mesmo." />
              <PerguntaFAQ
                q="Como acesso o Agente IA?"
                a="Você recebe acesso à Central de Ativação com o Agente pronto pra uso." />
              <PerguntaFAQ
                q="Quanto tempo pra aplicar?"
                a="Imediato. Você cola a situação, recebe diagnóstico e resposta pronta." />
              <PerguntaFAQ
                q="Sou iniciante, posso comprar?"
                a="Pode. Iniciante sofre mais porque improvisa mais. Aqui você começa com estrutura." />
              <PerguntaFAQ
                q="E se o cliente for agressivo?"
                a="Melhor ainda. Agressividade é só tentativa de controle. Você responde com critério, não com emoção." />
              <PerguntaFAQ
                q="Isso serve pra objeção de preço?"
                a="Serve. Porque a maioria não é preço. É insegurança e comparação sem critério." />
              <PerguntaFAQ
                q="Tem recorrência?"
                a="Não. Pagamento único de R$97,90. Acesso vitalício. Sem assinatura, sem renovação, sem surpresa no cartão." />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            9 · FECHAMENTO
           ══════════════════════════════════════ */}
        <div id="oferta" className="rv text-center">
          <h2 className="text-white font-extrabold tracking-[-0.03em] text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.04] mb-5">
            Controle não se negocia.
          </h2>

          <div className="text-[#9AA3B2] text-[15px] leading-[1.8] max-w-lg mx-auto mb-8 space-y-2">
            <p>Você pode continuar improvisando e torcendo pro lead voltar.</p>
            <p>Ou pode ter o diagnóstico, o critério e a resposta certa
              antes da próxima objeção aparecer.</p>
          </div>

          <p className="text-[#9AA3B2] text-[13px] mb-8">
            R$97,90. Pagamento único. Acesso vitalício.
            <br />
            Protocolo + Agente IA. Sem assinatura.
          </p>

          {/* CTA 3 de 3 */}
          <div className="mb-4">
            <BotaoCTA />
          </div>
          <p className="text-[#9AA3B2] text-[10px] tracking-[0.06em]">
            Acesso imediato&ensp;•&ensp;Central de Ativação do Agente
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/[0.05]">
        <div className="max-w-[960px] mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[#9AA3B2] text-[10px] tracking-wide">SILENT CLOSER™</span>
          <span className="text-[#9AA3B2]/60 text-[10px]">Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  )
}
