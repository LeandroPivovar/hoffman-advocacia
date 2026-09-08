import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Clock3, MapPin, Menu, MessageCircle, Phone, Scale, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const whatsapp = 'https://wa.me/5534999157824?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento%20com%20a%20Hoffmann%20Advocacia.';
const areas = [
  ['Direito Civil', 'Orientação segura para decisões que impactam sua vida, contratos e patrimônio.'],
  ['Direito de Família', 'Atuação sensível e estratégica em divórcio, guarda, alimentos e inventário.'],
  ['Direito Previdenciário', 'Apoio para buscar benefícios e aposentadorias com clareza em cada etapa.'],
  ['Direito do Consumidor', 'Defesa dos seus direitos diante de cobranças, contratos e relações de consumo.'],
  ['Direito Imobiliário', 'Segurança jurídica para compras, vendas, locações e regularização de imóveis.'],
  ['Consultoria Preventiva', 'Análise estratégica para prevenir conflitos antes que eles se tornem um problema.'],
];

export default function Home() {
  return <main>
    <section className="hero" id="inicio">
      <div className="hero-photo" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Hoffmann Advocacia, início"><b>H</b><span><strong>HOFFMANN</strong><small>ADVOCACIA</small></span></a>
        <nav aria-label="Navegação principal"><a href="#atuacao">Atuação</a><a href="#escritorio">O escritório</a><a href="#contato">Contato</a></nav>
        <a className="button button-outline top-contact" href={whatsapp} target="_blank" rel="noreferrer">Falar com um advogado <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Abrir menu"><Menu /></button>
      </header>
      <div className="hero-content">
        <div>
          <p className="eyebrow">Uberlândia · Minas Gerais</p>
          <h1>Seus direitos merecem <em>atenção</em> e estratégia.</h1>
          <p className="hero-copy">Atendimento jurídico próximo, ético e personalizado para transformar incertezas em decisões seguras.</p>
          <div className="hero-actions"><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Agendar atendimento</a><a className="text-link" href="#atuacao">Conheça nossa atuação <ArrowDownRight size={17} /></a></div>
        </div>
        <aside className="hero-note"><strong>Rigor técnico.<br />Escuta humana.</strong><p>Um escritório preparado para orientar você com transparência do primeiro contato à solução.</p></aside>
      </div>
    </section>

    <section className="section areas" id="atuacao"><div className="section-grid">
      <div><p className="eyebrow">Áreas de atuação</p><h2>Assessoria jurídica para os momentos que pedem cuidado.</h2></div>
      <div className="area-list">{areas.map(([title, description], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={20} /></article>)}</div>
    </div></section>

    <section className="image-break"><div className="section image-break-grid"><div className="desk-image" /><div><p className="eyebrow">Atendimento personalizado</p><h2>Clareza jurídica para escolher o próximo passo.</h2><p>Não importa se a questão é simples ou complexa: o primeiro atendimento é um espaço seguro para entender o cenário, avaliar possibilidades e construir um caminho com segurança.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Converse com a nossa equipe <ArrowUpRight size={17} /></a></div></div></section>

    <section className="about" id="escritorio"><div className="section about-grid">
      <div className="monogram"><Scale size={38} /><div><b>H.</b><span>HOFFMANN ADVOCACIA</span></div></div>
      <div className="about-copy"><p className="eyebrow">O escritório</p><h2>Segurança para seguir em frente.</h2><p>Na Hoffmann Advocacia, cada caso é conduzido com responsabilidade, comunicação clara e atenção aos detalhes. Nossa atuação combina conhecimento jurídico com uma relação de confiança construída ao longo de todo o processo.</p><div className="features"><span><ShieldCheck size={20} /> Atuação ética e transparente</span><span><BriefcaseBusiness size={20} /> Estratégia personalizada</span></div></div>
    </div></section>

    <section className="testimonials"><div className="section"><p className="eyebrow">Depoimentos</p><h2>Confiança que se constrói no atendimento.</h2><div className="testimonial-grid">
      <figure><blockquote>“Fui atendida com muita atenção e clareza. Cada etapa foi explicada de forma simples e eu me senti segura para decidir.”</blockquote><figcaption><span>AP</span><div><strong>Cliente atendida</strong><small>Direito de Família</small></div></figcaption></figure>
      <figure><blockquote>“Profissionalismo, agilidade e muito cuidado com o meu caso. O atendimento fez toda a diferença em um momento delicado.”</blockquote><figcaption><span>RM</span><div><strong>Cliente atendido</strong><small>Direito Civil</small></div></figcaption></figure>
      <figure><blockquote>“Recebi orientação objetiva e transparente desde a primeira conversa. Recomendo pela segurança e pela seriedade.”</blockquote><figcaption><span>LS</span><div><strong>Cliente atendida</strong><small>Direito Previdenciário</small></div></figcaption></figure>
    </div></div></section>

    <section className="section contact" id="contato"><div><p className="eyebrow">Fale conosco</p><h2>Vamos conversar sobre o seu caso?</h2><ContactForm /></div>
      <address><p><Phone size={18} /><a href="tel:+5534999157824">+55 34 9915-7824</a></p><p><Clock3 size={18} /> Segunda a sexta, 09:00 – 18:00</p><p><MapPin size={18} /><a href="https://maps.google.com/?q=R.+Fioravante+Andrade,+70+-+Vigilato+Pereira,+Uberl%C3%A2ndia+-+MG,+38408-530" target="_blank" rel="noreferrer">R. Fioravante Andrade, 70<br />Vigilato Pereira, Uberlândia – MG<br />38408-530, Brasil</a></p></address>
    </section>
    <footer><span>© {new Date().getFullYear()} Hoffmann Advocacia.</span><span>Uberlândia · MG</span></footer>
  </main>;
}
