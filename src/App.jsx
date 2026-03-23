import { useState, useEffect, useRef } from 'react'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  X,
  Crosshair,
  BookOpen,
  Bot,
  Terminal,
  Shield,
  TrendingUp,
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

function useStickyBar() {
  const [show, setShow] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      const heroBottom = heroRef.current.getBoundingClientRect().bottom
      setShow(heroBottom < 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { show, heroRef }
}

/* ═══════════════════════════════════════════
   META PIXEL HELPERS
   ═══════════════════════════════════════════ */

const CHECKOUT_URL = 'https://pay.cakto.com.br/qusyvox_784416'

function trackCheckout(e) {
  e.preventDefault()
  if (window.fbq) window.fbq('track', 'InitiateCheckout')
  window.location.href = CHECKOUT_URL
}

/* ═══════════════════════════════════════════
   CORES
   Principal:   #FFFFFF
   Secundário:  #C9CED8
   Muted:       #9AA3B2
   ═══════════════════════════════════════════ */

const Hr = () => (
  <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">
    <div className="h-px bg-white/[0.06]" />
  </div>
)

const Rotulo = ({ children }) => (
  <p className="text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#9AA3B2] font-medium mb-4 sm:mb-6">
    {children}
  </p>
)

const BotaoCTA = ({ soTexto = false, compact = false }) => (
  <a href={CHECKOUT_URL} onClick={trackCheckout}
    className={`inline-flex items-center justify-center gap-2 bg-[#F2F2F2] text-[#0A0A0A] font-semibold uppercase hover:bg-white transition-colors active:scale-[0.98] ${compact
      ? 'text-[10px] tracking-[0.06em] px-6 py-3'
      : 'text-[10px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.08em] px-6 sm:px-12 py-[15px] sm:py-[17px]'
      }`}>
    {soTexto
      ? 'ATIVAR MEU AGENTE DE IA AGORA'
      : <><span className="sm:hidden">ATIVAR MEU AGENTE DE IA AGORA</span><span className="hidden sm:inline">ATIVAR MEU AGENTE DE IA AGORA — R$97,90</span></>
    }
    <ArrowRight size={compact ? 11 : 13} strokeWidth={2} />
  </a>
)

function PerguntaFAQ({ q, a }) {
  const [open, set] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button onClick={() => set(!open)}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left group cursor-pointer min-h-[48px]">
        <span className="text-[#C9CED8] text-[14px] sm:text-[15px] font-medium pr-6 sm:pr-8 group-hover:text-white transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown size={13}
          className={`text-[#9AA3B2] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div>
          <p className="text-[#9AA3B2] text-[13px] sm:text-[14px] leading-[1.8] pb-4 sm:pb-5 pr-4 sm:pr-8">{a}</p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   EXEMPLOS DO AGENTE (dados)
   Para adicionar mais, basta inserir um objeto no array.
   ═══════════════════════════════════════════ */

const EXEMPLOS_AGENTE = [
  {
    src: 'https://i.postimg.cc/bJ1TwRGn/demo-01-consultoria-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção em consultoria',
    legenda: 'Consultoria / Mentoria',
    objecao: '"preciso falar com meu sócio"',
  },
  {
    src: 'https://i.postimg.cc/nznsqKRv/demo-02-estetica-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção em estética',
    legenda: 'Estética / Clínica',
    objecao: '"vou pensar com calma"',
  },
  {
    src: 'https://i.postimg.cc/0jBbgT8W/demo-03-b2b-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção em B2B',
    legenda: 'B2B / Agência / Serviço',
    objecao: '"manda no e-mail"',
  },
  {
    src: 'https://i.postimg.cc/rpNsy0VF/demo-04-tacaro-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção tá caro',
    legenda: 'Objeção: Tá caro',
    objecao: '"achei mais barato em outro lugar"',
  },
  {
    src: 'https://i.postimg.cc/Fz8sC0Z2/demo-05-naoprioridade-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção não é prioridade',
    legenda: 'Objeção: Não é prioridade',
    objecao: '"agora não é prioridade"',
  },
  {
    src: 'https://i.postimg.cc/pdRVSWfR/demo-06-comparar-jpg.jpg',
    alt: 'Exemplo do Arquiteto — objeção preciso comparar',
    legenda: 'Objeção: Preciso comparar',
    objecao: '"preciso comparar"',
  },
]

/* ═══════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════ */

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Visualização ampliada">
      <button
        onClick={onClose}
        className="lightbox-close"
        aria-label="Fechar visualização"
      >
        <X size={20} strokeWidth={1.5} />
      </button>
      <img
        src={src}
        alt={alt}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   CARROSSEL DE PROVAS
   ═══════════════════════════════════════════ */

function ProvaGaleria() {
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef(null)

  const scrollTo = (idx) => {
    if (!trackRef.current) return
    const cards = trackRef.current.children
    if (!cards[idx]) return
    cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const prev = () => { const i = Math.max(0, activeIdx - 1); scrollTo(i) }
  const next = () => { const i = Math.min(EXEMPLOS_AGENTE.length - 1, activeIdx + 1); scrollTo(i) }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const cards = track.children
      let closest = 0
      let minDist = Infinity
      for (let i = 0; i < cards.length; i++) {
        const d = Math.abs(cards[i].getBoundingClientRect().left - track.getBoundingClientRect().left)
        if (d < minDist) { minDist = d; closest = i }
      }
      setActiveIdx(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="rv relative" style={{ transitionDelay: '0.08s' }}>
        {/* TRACK */}
        <div ref={trackRef} className="carousel-track">
          {EXEMPLOS_AGENTE.map((ex, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="carousel-card group"
              aria-label={`Ampliar: ${ex.legenda} — ${ex.objecao}`}
            >
              <div className="relative overflow-hidden rounded-[14px] bg-[#0b0b0b]">
                <img
                  src={ex.src}
                  alt={ex.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[9/16] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none rounded-[14px]" />
              </div>
              <div className="px-1 pt-3 pb-1">
                <p className="text-[#C9CED8] text-[12px] font-medium leading-snug mb-0.5">
                  {ex.legenda}
                </p>
                <p className="text-[#9AA3B2] text-[11px] leading-relaxed">
                  {ex.objecao}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ARROWS (desktop) */}
        <button
          onClick={prev}
          disabled={activeIdx === 0}
          className="carousel-arrow carousel-arrow-left"
          aria-label="Anterior"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          disabled={activeIdx === EXEMPLOS_AGENTE.length - 1}
          className="carousel-arrow carousel-arrow-right"
          aria-label="Próximo"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-1.5 mt-5">
        {EXEMPLOS_AGENTE.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para exemplo ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIdx ? 'bg-white/50 scale-125' : 'bg-white/[0.12] hover:bg-white/20'
              }`}
          />
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          src={EXEMPLOS_AGENTE[lightboxIdx].src}
          alt={EXEMPLOS_AGENTE[lightboxIdx].alt}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  )
}

/* ═══════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════ */

export default function App() {
  useReveal()
  const { show, heroRef } = useStickyBar()

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">

      {/* NAV */}
      <nav className="border-b border-white/[0.06] sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 h-11 flex items-center justify-between">
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
      <section ref={heroRef} className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-12 items-start">

          <div className="lg:col-span-3 rv">
            <Rotulo>Arquitetura de decisão para vendas high ticket</Rotulo>

            <h1 className="text-white font-extrabold tracking-[-0.03em] leading-[1.06] text-[1.5rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem] mb-5 sm:mb-6">
              PARE DE PERDER COMISSÕES DE R$&nbsp;10.000 POR NÃO SABER O QUE RESPONDER NO WHATSAPP.
            </h1>

            <p className="text-[#C9CED8] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[1.85] max-w-[480px] mb-6 sm:mb-8">
              O Silent Closer™ é o seu Arquiteto de Decisão pessoal. Uma Inteligência Artificial que analisa as objeções do seu cliente em segundos e te entrega a saída estratégica para fechar a venda. Sem desconto, sem improviso e sem correr atrás.
            </p>

            <ul className="space-y-2 mb-4">
              {[
                'Diagnóstico da objeção em 4 camadas',
                'Resposta pronta com lógica (não justificativa)',
                'Estrutura que mantém margem e devolve decisão',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#C9CED8] text-[12px] sm:text-[13px]">
                  <Check size={12} strokeWidth={1.5} className="text-[#9AA3B2] mt-[2px] flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* PAINEL LATERAL — OFERTA */}
          <div className="lg:col-span-2 rv" style={{ transitionDelay: '0.12s' }}>
            <div className="border border-white/[0.08] p-5 sm:p-7 md:p-8 lg:mt-4">
              <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-5">Acesso completo</p>

              {/* Preço antigo riscado */}
              <p className="text-[13px] line-through mb-1" style={{ color: 'rgba(154, 163, 178, 0.45)' }}>R$ 194,90</p>

              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-[#9AA3B2] text-sm font-medium">R$</span>
                <span className="text-white text-[2.6rem] sm:text-[3.2rem] font-extrabold tracking-[-0.04em] leading-none">97</span>
                <span className="text-white text-base sm:text-lg font-bold">,90</span>
              </div>

              {/* Linha de ancoragem */}
              <p className="text-[#9AA3B2] text-[11px] leading-relaxed mt-2 mb-4">
                Hoje: 50% OFF. Você decide agora — ou continua perdendo venda na intuição.
              </p>

              <div className="h-px bg-white/[0.06] my-5" />

              <p className="text-[#9AA3B2] text-[10px] tracking-[0.15em] uppercase mb-5">
                Pagamento único&ensp;·&ensp;Acesso vitalício
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  'Protocolo completo de decisão',
                  'Agente IA com respostas copie e cole',
                  'Atualizações futuras incluídas',
                  'Acesso vitalício',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={12} strokeWidth={1.5} className="text-[#9AA3B2] mt-[2px] flex-shrink-0" />
                    <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>

              <a href={CHECKOUT_URL} onClick={trackCheckout}
                className="block w-full text-center text-[10px] font-semibold tracking-[0.1em] uppercase py-3.5 sm:py-4 bg-[#F2F2F2] text-[#0A0A0A] hover:bg-white transition-colors active:scale-[0.98]">
                ATIVAR MEU AGENTE DE IA AGORA →
              </a>
              <p className="text-[#9AA3B2] text-[9px] text-center mt-3 tracking-wide leading-relaxed">
                Acesso imediato após confirmação • Pagamento único • Acesso vitalício
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          PROVA OPERACIONAL — GALERIA (logo após Hero)
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-10">
          <Rotulo>Prova operacional</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-3">
            O Arquiteto em ação
          </h2>
          <p className="text-[#9AA3B2] text-[13px] max-w-md leading-relaxed">
            Seis situações reais. Um padrão: critério, postura e controle.
          </p>
        </div>

        <ProvaGaleria />

        {/* CTA após prova */}
        <div className="rv text-center mt-10 sm:mt-14" style={{ transitionDelay: '0.15s' }}>
          <BotaoCTA soTexto />
        </div>
      </section>

      <Hr />


      {/* ══════════════════════════════════════
          2 · O PROBLEMA REAL
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="max-w-xl rv">
          <Rotulo>O problema real</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-6 sm:mb-8">
            Você não perde no "não".
            <br />
            <span className="text-white/20">
              Você perde quando o lead diz:
            </span>
          </h2>

          <div className="space-y-1.5 text-[#C9CED8] text-[15px] leading-[1.8] mb-8">
            <p>"Vou pensar."</p>
            <p>"Vou ver com meu sócio."</p>
            <p>"Está caro."</p>
          </div>

          <p className="text-[#C9CED8] text-[15px] leading-[1.8] mb-6">
            E você:
          </p>

          <div className="space-y-2 mb-8">
            {[
              'Manda mensagem dois dias depois pedindo retorno',
              'Envia material que ninguém pediu',
              'Oferece desconto antes de entender a objeção',
              'Se justifica demais',
              'Perde postura',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
                <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
              </div>
            ))}
          </div>

          <div className="text-[#C9CED8] text-[15px] leading-[1.8] space-y-2 mb-6">
            <p>A comissão evapora.<br />A margem diminui.<br />O respeito também.</p>
          </div>

          <p className="text-[#9AA3B2] text-[14px] leading-relaxed">
            E o pior?<br />
            Você entra no próximo lead carregando a ansiedade do último.
          </p>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          3 · A VERDADE QUE NINGUÉM FALA
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="max-w-xl rv">
          <Rotulo>A verdade que ninguém fala</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-6 sm:mb-8">
            Não é o lead.
            <br />
            <span className="text-white/20">
              É a ausência de arquitetura de decisão.
            </span>
          </h2>

          <div className="space-y-2 text-[#C9CED8] text-[15px] leading-[1.8]">
            <p>Não é o mercado.</p>
            <p>Não é o preço.</p>
          </div>

          <div className="mt-8 text-[#9AA3B2] text-[14px] leading-relaxed space-y-2">
            <p>Quem não tem sistema depende de sorte.<br />E sorte não paga boleto.</p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          4 · MICRO HISTÓRIA REAL
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="max-w-xl rv">
          <Rotulo>Micro história real</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-6 sm:mb-8">
            "Se fizer 20% eu fecho."
          </h2>

          <div className="space-y-5 text-[#C9CED8] text-[15px] leading-[1.8]">
            <p>Um vendedor recebeu essa frase.</p>
            <p>Ele poderia defender preço.<br />Ou dar desconto.</p>
            <p className="text-white font-medium">Ele isolou a regra.</p>
            <p>Descobriu que não era preço.<br />Era medo de revenda.</p>
            <p className="text-white font-medium">Ele devolveu critério.</p>
            <p>O cliente fechou sem desconto.</p>
          </div>

          <div className="mt-6 sm:mt-8 border-l-2 border-white/[0.08] pl-4 sm:pl-5">
            <p className="text-[#9AA3B2] text-[14px] leading-relaxed italic">
              Uma venda recuperada paga 10 anos desse produto.
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          5 · ANTES VS. DEPOIS
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-8 sm:mb-12">
          <Rotulo>Contraste</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Antes vs. depois do Silent Closer™.
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-5 sm:p-7 md:p-9 space-y-3 sm:space-y-4">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-2">❌ Antes</p>
            {[
              'Improvisa e torce pra dar certo',
              'Entra na objeção e perde postura',
              'Justifica preço como se pedisse permissão',
              'Dá desconto pra aliviar tensão',
              'Fecha mês ansioso',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
                <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] p-5 sm:p-7 md:p-9 space-y-3 sm:space-y-4">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-2">✔ Depois</p>
            {[
              'Diagnostica antes de reagir',
              'Separa máscara do medo real',
              'Nomeia o jogo sem brigar',
              'Devolve critério e puxa decisão',
              'Mantém margem',
              'Opera com controle',
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
          6 · 4 MOVIMENTOS
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-8 sm:mb-12">
          <Rotulo>O protocolo — 4 movimentos</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Nenhum depende de talento.
          </h2>
        </div>

        <div className="rv grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-0" style={{ transitionDelay: '0.1s' }}>
          {[
            { n: '01', titulo: 'Diagnóstico', desc: 'Identifique o tipo de objeção antes de responder.' },
            { n: '02', titulo: 'Máscara vs medo real', desc: 'Separe a frase educada do problema verdadeiro.' },
            { n: '03', titulo: 'Nomeie o jogo', desc: 'Coloque o padrão na mesa com neutralidade.' },
            { n: '04', titulo: 'Parâmetro', desc: 'Devolva critério simples para decisão agora — sem empurrar.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-4 sm:gap-5 py-5 sm:py-6 border-b border-white/[0.04]">
              <span className="text-white/[0.04] text-[1.8rem] sm:text-[2.2rem] font-extrabold tracking-tight leading-none flex-shrink-0 w-8 sm:w-10 text-right">
                {s.n}
              </span>
              <div className="pt-1">
                <h3 className="text-white text-[14px] sm:text-[15px] font-semibold tracking-tight mb-1">
                  {s.titulo}
                </h3>
                <p className="text-[#9AA3B2] text-[12px] sm:text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          7 · DOIS COMPONENTES
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-10 sm:mb-14">
          <Rotulo>O que você recebe</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Dois componentes.
            <br /><span className="text-white/20">Um sistema.</span>
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-5 sm:p-7 md:p-9">
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
                'Diagnóstico em 4 camadas',
                'Estrutura para manter controle',
                'Modelos para cenários reais',
                'Conduta que protege margem e respeito',
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
              Você cola a objeção. Ele devolve:
            </p>
            <ul className="space-y-2.5">
              {[
                'Diagnóstico do que está por trás da frase',
                'Nome do jogo',
                'Próximo passo claro',
                'Resposta pronta para copiar e colar',
                'Variações de postura (neutro / firme / corte limpo)',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[12px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#9AA3B2] text-[11px] mt-5 leading-relaxed">
              Sempre com saída binária. Sempre com próximo passo.
            </p>
          </div>
        </div>
      </section>

      <Hr />



      {/* ══════════════════════════════════════
          9 · ROI EXPLÍCITO
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="max-w-xl rv">
          <Rotulo>ROI explícito</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-6 sm:mb-8">
            O custo não é R$97.
            <br />
            <span className="text-white/20">
              O custo é continuar improvisando.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
            <div className="bg-[#0A0A0A] p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <TrendingUp size={13} strokeWidth={1.5} className="text-[#9AA3B2]" />
                <span className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em]">Cenário 1</span>
              </div>
              <p className="text-[#C9CED8] text-[13px] sm:text-[14px] leading-[1.8]">
                Se você recuperar <span className="text-white font-semibold">1 venda de R$3.000</span> mantendo margem,
                o Silent Closer se paga <span className="text-white font-semibold">30 vezes</span>.
              </p>
            </div>

            <div className="bg-[#0A0A0A] p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <Shield size={13} strokeWidth={1.5} className="text-[#9AA3B2]" />
                <span className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.2em]">Cenário 2</span>
              </div>
              <p className="text-[#C9CED8] text-[13px] sm:text-[14px] leading-[1.8]">
                Se evitar <span className="text-white font-semibold">1 desconto de 10%</span> em um contrato de 10k,
                ele se paga <span className="text-white font-semibold">100 vezes</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          10 · ISSO NÃO É
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-8 sm:mb-12">
          <Rotulo>Definição</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Isso não é:
          </h2>
        </div>

        <div className="rv space-y-2 mb-10 sm:mb-16" style={{ transitionDelay: '0.08s' }}>
          {[
            'Curso motivacional',
            'Script engessado',
            'PNL',
            'Manipulação',
            'Técnica de "insistir até cansar"',
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <X size={11} strokeWidth={1.5} className="text-red-400/40 mt-[3px] flex-shrink-0" />
              <span className="text-[#C9CED8] text-[14px] leading-relaxed">{t}</span>
            </div>
          ))}
          <p className="text-white text-[15px] font-medium mt-6">É arquitetura de decisão.</p>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          11 · FILTRO — PRA QUEM / NÃO É PRA QUEM
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="rv mb-8 sm:mb-12">
          <Rotulo>Filtro</Rotulo>
          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
            Isso não é pra todo mundo.
          </h2>
        </div>

        <div className="rv grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
          style={{ transitionDelay: '0.08s' }}>
          <div className="bg-[#0A0A0A] p-5 sm:p-7 md:p-9">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-6">Isso é pra quem</p>
            <ul className="space-y-3.5">
              {[
                'Vende proposta high ticket',
                'Perde venda no final por objeção mal conduzida',
                'Já deu desconto por insegurança',
                'Quer manter margem sem parecer agressivo',
                'Quer resposta pronta com critério',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={11} strokeWidth={1.5} className="text-[#9AA3B2] mt-[3px] flex-shrink-0" />
                  <span className="text-[#C9CED8] text-[13px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0A] p-7 md:p-9">
            <p className="text-[#9AA3B2] text-[9px] uppercase tracking-[0.25em] mb-6">Não é pra quem</p>
            <ul className="space-y-3.5">
              {[
                'Quer frase pronta para repetir igual robô',
                'Vive de desconto',
                'Acha que vender é insistir',
                'Prefere culpar o mercado a ajustar postura',
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
          12 · GARANTIA
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center rv">
          <Rotulo>Garantia</Rotulo>

          <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15] mb-5 sm:mb-6">
            Teste por 7 dias.
          </h2>

          <p className="text-[#C9CED8] text-[14px] sm:text-[15px] leading-[1.8] mb-4">
            Se não sentir mais controle nas suas próximas objeções,
            peça reembolso total.
          </p>

          <p className="text-[#9AA3B2] text-[14px] leading-relaxed">
            Sem perguntas.<br />
            Sem burocracia.
          </p>
        </div>
      </section>

      <Hr />

      {/* ══════════════════════════════════════
          13 · FAQ
         ══════════════════════════════════════ */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 mb-16 sm:mb-24 md:mb-32">
          <div className="md:col-span-4 rv">
            <Rotulo>Dúvidas</Rotulo>
            <h2 className="text-white font-bold tracking-[-0.02em] text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] leading-[1.15]">
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
            14 · FECHAMENTO / CTA FINAL
           ══════════════════════════════════════ */}
        <div id="oferta" className="rv text-center">
          <h2 className="text-white font-extrabold tracking-[-0.03em] text-[1.5rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.06] mb-4 sm:mb-5">
            Controle não se negocia.
          </h2>

          <div className="text-[#9AA3B2] text-[14px] sm:text-[15px] leading-[1.8] max-w-lg mx-auto mb-6 sm:mb-8 space-y-2">
            <p>Você pode continuar improvisando.</p>
            <p>Ou pode operar com arquitetura.</p>
          </div>

          <p className="text-[#9AA3B2] text-[12px] sm:text-[13px] mb-6 sm:mb-8">
            R$97,90 — pagamento único. Acesso vitalício.
          </p>

          {/* CTA 3 de 3 */}
          <div className="mb-4">
            <BotaoCTA />
          </div>
          <p className="text-[#9AA3B2] text-[10px] tracking-[0.06em]">
            Acesso imediato após pagamento.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/[0.05] pb-16 sm:pb-0">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[#9AA3B2] text-[10px] tracking-wide">SILENT CLOSER™</span>
          <span className="text-[#9AA3B2]/60 text-[10px]">Todos os direitos reservados.</span>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      <div className={`sticky-bar sm:hidden ${show ? 'on' : ''}`}>
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white text-[11px] font-semibold truncate">Silent Closer™</p>
            <p className="text-[#9AA3B2] text-[9px]">R$97,90 · Acesso vitalício</p>
          </div>
          <BotaoCTA compact soTexto />
        </div>
      </div>
    </div>
  )
}
