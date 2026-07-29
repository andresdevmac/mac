import { PriceEstimator } from "@/components/price-estimator";
import { Icon } from "@/components/icons";
import { business, whatsappLink } from "@/data/business";

const services = [
  ["phone", "Pantallas y baterías", "Recupera la claridad y autonomía de tu equipo."],
  ["wrench", "Diagnóstico especializado", "Revisamos tu equipo con criterio técnico y transparencia."],
  ["laptop", "Computadores y MacBook", "Mantenimiento, hardware, software y recuperación de datos."],
  ["headphones", "Audio premium", "Servicio para equipos Bose y Marshall."],
  ["gamepad", "Consolas", "Mantenimiento y diagnóstico para seguir jugando."],
  ["bolt", "Daño por humedad", "Evaluación técnica para equipos expuestos a líquidos."]
] as const;

const brands = ["Apple", "Samsung", "Xiaomi", "Oppo", "Motorola", "Bose", "Marshall", "Consolas"];

export default function Home() {
  return <main>
    <header className="site-header"><a href="#inicio" className="logo" aria-label="TiendaMac inicio"><span className="logo-mark">T</span><span>Tienda<span>Mac</span></span></a><nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#precios">Precios</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></nav><a className="header-tracking" href={business.trackingUrl} target="_blank" rel="noreferrer">Consultar reparación <Icon name="arrow" /></a></header>

    <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">SERVICIO TÉCNICO ESPECIALIZADO</p><h1>Tu tecnología,<br /><em>en buenas manos.</em></h1><p className="hero-lede">Reparamos dispositivos Apple y tecnología de las marcas que usas todos los días, con atención profesional y seguimiento claro.</p><div className="hero-actions"><a className="button button-primary" href={whatsappLink("Hola, quiero solicitar una reparación.")} target="_blank" rel="noreferrer">Solicitar reparación <Icon name="arrow" /></a><a className="button button-secondary" href={business.trackingUrl} target="_blank" rel="noreferrer">Consultar mi equipo</a></div></div><div className="device-scene" aria-label="Composición visual de dispositivos tecnológicos"><div className="glow glow-one" /><div className="glow glow-two" /><div className="laptop-device"><div className="laptop-screen"><span>TiendaMac</span><i /></div><div className="laptop-base" /></div><div className="phone-device"><div className="phone-screen"><b /></div></div><div className="scene-label"><Icon name="shield" /> Diagnóstico y reparación profesional</div></div></section>

    <section className="trust-band" id="nosotros"><div><Icon name="shield" /><strong>Garantía</strong><span>en cada servicio aplicable</span></div><div><Icon name="wrench" /><strong>Atención técnica</strong><span>para tus dispositivos</span></div><div><Icon name="bolt" /><strong>Proceso claro</strong><span>del diagnóstico a la entrega</span></div></section>

    <section className="section brands-section"><div className="section-heading centered"><p className="eyebrow">TECNOLOGÍA QUE CONOCEMOS</p><h2>Especialistas en Apple.<br />Expertos en mucho más.</h2><p>Apple es nuestro foco; también atendemos las marcas y dispositivos que hacen parte de tu día.</p></div><div className="brand-list">{brands.map((brand, index) => <span className={index === 0 ? "brand-focus" : ""} key={brand}>{brand}</span>)}</div></section>

    <section className="section services-section" id="servicios"><div className="section-heading"><p className="eyebrow">SOLUCIONES</p><h2>Lo que tu equipo necesita.</h2><p>Desde una reparación puntual hasta un diagnóstico técnico completo.</p></div><div className="service-grid">{services.map(([icon, title, text], index) => <article className="service-card" key={title}><span className="service-number">0{index + 1}</span><Icon name={icon} /><h3>{title}</h3><p>{text}</p><a href={whatsappLink(`Hola, necesito información sobre: ${title}.`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${title}`}><Icon name="arrow" /></a></article>)}</div></section>

    <section className="section quote-section" id="precios"><div className="quote-intro"><p className="eyebrow">COTIZADOR</p><h2>Consulta antes de venir.</h2><p>Cuéntanos qué equipo tienes y qué necesitas. Te orientamos sobre la reparación y confirmamos el valor final según la revisión técnica.</p><p className="small-note">Los valores publicados se verifican con el tarifario vigente y la disponibilidad de repuestos.</p></div><PriceEstimator /></section>

    <section className="tracking-section"><div><p className="eyebrow">YA ERES CLIENTE</p><h2>Tu reparación,<br />siempre a la vista.</h2><p>Ingresa a nuestra plataforma para revisar el estado de tu equipo cuando lo necesites.</p></div><a className="button button-light" href={business.trackingUrl} target="_blank" rel="noreferrer">Consultar mi reparación <Icon name="arrow" /></a></section>

    <section className="section reviews-section"><div className="section-heading"><p className="eyebrow">CONFIANZA REAL</p><h2>Conoce la experiencia de nuestros clientes.</h2><p>Las opiniones se consultan directamente en nuestro perfil de Google.</p></div><a className="review-link" href={business.reviewsUrl} target="_blank" rel="noreferrer"><div className="review-stars">{Array.from({ length: 5 }).map((_, i) => <Icon name="star" key={i} />)}</div><strong>Ver reseñas en Google</strong><span>Opiniones verificables de clientes reales <Icon name="arrow" /></span></a></section>

    <section className="contact-section" id="contacto"><div className="contact-map">{business.mapUrl ? <iframe title="Ubicación de TiendaMac en CC El Pueblito" src={business.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <><Icon name="map" /><span>CC El Pueblito</span></>}</div><div className="contact-copy"><p className="eyebrow">VISÍTANOS</p><h2>Hablemos de tu equipo.</h2><address>{business.address}</address><div className="contact-actions"><a className="button button-primary" href={whatsappLink("Hola, quiero hablar con un asesor de TiendaMac.")} target="_blank" rel="noreferrer">Escríbenos por WhatsApp <Icon name="arrow" /></a>{business.mapUrl && <a className="text-link" href={business.mapUrl} target="_blank" rel="noreferrer">Cómo llegar <Icon name="arrow" /></a>}</div></div></section>

    <footer><a href="#inicio" className="logo"><span className="logo-mark">T</span><span>Tienda<span>Mac</span></span></a><p>Reparamos tecnología. Recuperamos tu tranquilidad.</p><div><a href={business.trackingUrl} target="_blank" rel="noreferrer">Seguimiento</a><a href={business.reviewsUrl} target="_blank" rel="noreferrer">Reseñas</a>{business.instagramUrl && <a href={business.instagramUrl}>Instagram</a>}{business.facebookUrl && <a href={business.facebookUrl}>Facebook</a>}</div><small>© {new Date().getFullYear()} TiendaMac. Todos los derechos reservados.</small></footer>
  </main>;
}
