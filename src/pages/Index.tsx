import { Button } from "@/components/ui/button";
import {
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  CheckCircle2,
  Milk,
  ArrowRight,
} from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import galleryBuffalo from "@/assets/gallery-buffalo.jpg";
import galleryMilk from "@/assets/gallery-milk.jpg";
import galleryFarm from "@/assets/gallery-farm.jpg";
import galleryCow from "@/assets/gallery-cow.jpg";

const WHATSAPP_NUMBER = "50766785280";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, vi su página web de Finca La Cresta y me gustaría recibir más información sobre sus productos."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-110 transition-smooth animate-float"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
              <Leaf className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold">Finca La Cresta</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/80">Bejuco · Panamá Oeste</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/90">
            <a href="#nosotros" className="hover:text-accent transition-smooth">Nosotros</a>
            <a href="#productos" className="hover:text-accent transition-smooth">Productos</a>
            <a href="#diferenciadores" className="hover:text-accent transition-smooth">Por qué</a>
            <a href="#servicios" className="hover:text-accent transition-smooth">Servicios</a>
            <a href="#contacto" className="hover:text-accent transition-smooth">Contacto</a>
          </div>
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex rounded-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroFarm}
          alt="Búfalos y vacas pastando en Finca La Cresta, La Cresta, Bejuco, Panamá Oeste"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              La Cresta · Bejuco · Panamá Oeste
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold text-primary-foreground leading-[1.05] text-balance">
              Leche fresca y natural <em className="not-italic text-accent">directamente</em> de nuestra finca
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Producción responsable, calidad garantizada y distribución directa desde La Cresta, Bejuco, Panamá Oeste.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="whatsapp" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </Button>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-smooth font-medium"
              >
                Ver productos <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "20+", l: "Años de finca" },
                { n: "100+", l: "Animales" },
                { n: "10+", l: "Años produciendo leche" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-accent pl-4">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 md:py-32 bg-gradient-cream">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={galleryBuffalo} alt="Búfalo en pastizal" loading="lazy" width={1024} height={1024} className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card rounded-2xl shadow-elegant p-6 max-w-[220px] border border-border">
              <Award className="h-8 w-8 text-accent" />
              <p className="mt-3 font-display text-lg font-semibold text-foreground leading-tight">Rumbo a leche grado A</p>
              <p className="text-xs text-muted-foreground mt-1">Estándares en crecimiento continuo</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Sobre Nosotros</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
              Una historia de campo, familia y constancia.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Ubicados en <strong className="text-foreground font-semibold">La Cresta, Bejuco, en Panamá Oeste</strong>, <strong className="text-foreground font-semibold">Finca La Cresta</strong> fue adquirida hace aproximadamente 20 años. Hace 10 años iniciamos con la producción de leche de vaca, abasteciendo a lecherías en Panamá Oeste.
              </p>
              <p>
                Hace 5 años incorporamos la cría de búfalos, expandiendo nuestra producción a leche de búfalo, que actualmente distribuimos a pequeños negocios y queserías locales.
              </p>
              <p>
                Hoy contamos con <strong className="text-foreground font-semibold">más de 100 animales</strong> y seguimos creciendo con el objetivo de alcanzar estándares de producción de leche grado A.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Productos</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
              Leche fresca, directa del pastizal.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Ofrecemos leche fresca de alta calidad, producida de forma natural y distribuida directamente desde nuestra finca.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Leche de Búfalo",
                desc: "Cremosa, rica en proteínas y nutrientes. Ideal para queserías y derivados artesanales.",
                tag: "Disponible",
                tagClass: "bg-primary text-primary-foreground",
                accent: "from-primary to-primary-glow",
              },
              {
                title: "Leche de Vaca",
                desc: "Producción constante, fresca y de confianza para lecherías y pequeños negocios.",
                tag: "Disponible",
                tagClass: "bg-primary text-primary-foreground",
                accent: "from-sky to-primary-glow",
              },
              {
                title: "Leche de Cabra",
                desc: "Estamos preparando esta nueva línea para ampliar la oferta de nuestros clientes.",
                tag: "Próximamente",
                tagClass: "bg-accent text-accent-foreground",
                accent: "from-accent to-accent",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Milk className="h-7 w-7" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold ${p.tagClass}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section id="diferenciadores" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">¿Por qué elegirnos?</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-balance">
              Calidad que se nota desde el pasto hasta tu negocio.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Sin químicos ni pesticidas. Producción limpia y responsable." },
              { icon: Sprout, title: "Alimentación a base de pasto", desc: "Animales criados libremente con pasto fresco panameño." },
              { icon: Award, title: "+10 años de experiencia", desc: "Una década perfeccionando la producción láctea local." },
              { icon: ShieldCheck, title: "Supervisión del MIDA", desc: "Controles oficiales de salud y calidad de los animales." },
              { icon: CheckCircle2, title: "Producto fresco y confiable", desc: "Distribución directa, sin intermediarios ni demoras." },
              { icon: MapPin, title: "Origen Panamá Oeste", desc: "Desde La Cresta, Bejuco, corazón agrícola de Panamá Oeste." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm p-8 hover:bg-primary-foreground/10 hover:border-accent/40 transition-smooth"
              >
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 md:py-32 bg-gradient-cream">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Servicios</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
              Distribución directa, flexible y puntual.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nos adaptamos a las necesidades de cada cliente para garantizar un suministro confiable.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Truck, title: "Entrega directa", desc: "A queserías y negocios en Panamá Oeste." },
                { icon: Clock, title: "Distribución desde 7:00 a.m.", desc: "Recibe tu producto fresco al inicio del día." },
                { icon: MapPin, title: "Retiro en finca disponible", desc: "Visítanos en La Cresta, Bejuco." },
                { icon: CheckCircle2, title: "Flexibilidad según cliente", desc: "Volúmenes y horarios adaptados a tu operación." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={galleryFarm} alt="Pastizales de la finca" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-elegant aspect-[3/4] object-cover w-full" />
              <img src={galleryMilk} alt="Leche fresca embotellada" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-elegant aspect-[3/4] object-cover w-full mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Galería</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
                Un día en Finca La Cresta.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Animales sanos, pastos verdes y un proceso cuidado de principio a fin.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: galleryBuffalo, alt: "Búfalo de la finca", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full" },
              { src: galleryFarm, alt: "Vista de la finca", span: "aspect-square" },
              { src: galleryCow, alt: "Vaca lechera", span: "aspect-square" },
              { src: galleryMilk, alt: "Leche fresca", span: "aspect-square" },
              { src: heroFarm, alt: "Animales pastando al amanecer", span: "aspect-square" },
            ].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl group ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
        <img src={heroFarm} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Trabajemos juntos</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              ¿Buscas un proveedor confiable de leche fresca?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Contáctanos directamente y forma parte de nuestra red de clientes en Panamá Oeste.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="whatsapp" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <a
                href="tel:+50766785280"
                className="inline-flex items-center gap-3 text-primary-foreground hover:text-accent transition-smooth font-medium"
              >
                <Phone className="h-5 w-5" />
                +507 6678-5280
              </a>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
              <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-6">
                <MessageCircle className="h-6 w-6 text-accent" />
                <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/70">WhatsApp</p>
                <p className="font-semibold mt-1">+507 6678-5280</p>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-6">
                <MapPin className="h-6 w-6 text-accent" />
                <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/70">Ubicación</p>
                <p className="font-semibold mt-1">La Cresta, Bejuco</p>
                <p className="text-sm text-primary-foreground/70">Panamá Oeste</p>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-6">
                <Clock className="h-6 w-6 text-accent" />
                <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/70">Distribución</p>
                <p className="font-semibold mt-1">Desde 7:00 a.m.</p>
                <p className="text-sm text-primary-foreground/70">Lunes a sábado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80 py-10 border-t border-primary-foreground/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
              <Leaf className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="font-display text-base text-primary-foreground font-semibold">Finca La Cresta</span>
          </div>
          <p>© {new Date().getFullYear()} Finca La Cresta · La Cresta, Bejuco, Panamá Oeste</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
