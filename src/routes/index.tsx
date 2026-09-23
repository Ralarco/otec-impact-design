import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Laptop,
  Menu,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import logoAsset from "@/assets/mcad-capacitacion-logo.jpg.asset.json";
import heroImage from "@/assets/mcad-training-hero.jpg";
import firstAidImage from "@/assets/course-first-aid.jpg";
import heightsImage from "@/assets/course-heights.jpg";
import riskImage from "@/assets/course-risk-prevention.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MCAD Capacitación | Formación laboral para empresas" },
      { name: "description", content: "Cursos de capacitación para fortalecer la seguridad, productividad y competencias de equipos de trabajo en Chile." },
      { property: "og:title", content: "MCAD Capacitación | Formación laboral para empresas" },
      { property: "og:description", content: "Capacitación práctica, flexible y conectada con los desafíos reales de tu equipo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const courses = [
  { category: "Seguridad industrial", title: "Prevención de Riesgos en Faena", description: "Identificación de peligros, evaluación de riesgos y control operacional para equipos de trabajo.", image: riskImage, duration: "8 horas", mode: "Presencial", featured: true },
  { category: "Trabajo seguro", title: "Trabajo en Altura Física", description: "Uso correcto de sistemas de protección, anclajes y procedimientos para labores en altura.", image: heightsImage, duration: "8 horas", mode: "Presencial", featured: true },
  { category: "Emergencias", title: "Primeros Auxilios y RCP", description: "Respuesta inicial, maniobras de reanimación y actuación efectiva ante una emergencia.", image: firstAidImage, duration: "8 horas", mode: "Mixta", featured: true },
  { category: "Gestión preventiva", title: "Liderazgo en Seguridad", description: "Herramientas para fortalecer una cultura preventiva desde la supervisión y el liderazgo.", image: heroImage, duration: "6 horas", mode: "E-learning", featured: false },
  { category: "Seguridad industrial", title: "Uso y Mantención de EPP", description: "Selección, inspección y cuidado de elementos de protección personal en el trabajo.", image: riskImage, duration: "4 horas", mode: "Presencial", featured: false },
  { category: "Cumplimiento laboral", title: "Ley 16.744 y Mutualidades", description: "Marco esencial del seguro de accidentes del trabajo y enfermedades profesionales.", image: firstAidImage, duration: "4 horas", mode: "E-learning", featured: false },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="mb-9 max-w-2xl"><p className="mb-2 flex items-center gap-3 text-xs font-bold uppercase text-secondary"><span className="h-px w-8 bg-accent" />{eyebrow}</p><h2 className="text-4xl font-extrabold uppercase leading-none text-primary md:text-5xl">{title}</h2>{intro && <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">{intro}</p>}</div>;
}

function CourseCard({ course, priority = false }: { course: (typeof courses)[number]; priority?: boolean }) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_12px_35px_color-mix(in_oklab,var(--primary)_8%,transparent)] transition-transform duration-300 hover:-translate-y-1">
    <div className="relative aspect-[4/3] overflow-hidden"><img src={course.image} alt={`Capacitación de ${course.title}`} width={1200} height={912} loading={priority ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-[10px] font-bold uppercase text-primary-foreground">{course.category}</span></div>
    <div className="p-5"><h3 className="text-2xl font-bold leading-tight text-primary">{course.title}</h3><p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">{course.description}</p><div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs font-semibold text-foreground"><span className="flex items-center gap-1.5"><Clock3 className="size-3.5 text-secondary" />{course.duration}</span><span className="flex items-center gap-1.5"><Users className="size-3.5 text-secondary" />{course.mode}</span></div><a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-primary">Ver programa <ChevronRight className="size-4" /></a></div>
  </article>;
}

function HomePage() {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="h-1 bg-primary"><div className="h-full w-1/3 bg-secondary" /></div>
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label="MCAD Capacitación, inicio"><img src={logoAsset.url} alt="MCAD Capacitación" width={655} height={123} className="h-auto w-52 md:w-60" /></a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">{[["Cursos", "#cursos"], ["Nuestra propuesta", "#propuesta"], ["Franquicia SENCE", "#sence"]].map(([label, href]) => <a key={href} href={href} className="text-xs font-bold uppercase text-primary transition-colors hover:text-secondary">{label}</a>)}<a href="#contacto" className="inline-flex h-11 items-center bg-primary px-5 text-xs font-bold uppercase text-primary-foreground transition-colors hover:bg-secondary">Hablemos <ArrowRight className="ml-2 size-4" /></a></nav>
        <details className="relative lg:hidden"><summary aria-label="Abrir menú" className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md bg-primary text-primary-foreground"><Menu className="size-5" /></summary><nav className="absolute right-0 top-14 grid w-64 gap-1 rounded-md border border-border bg-card p-3 shadow-xl"><a href="#cursos" className="p-3 text-sm font-bold text-primary">Cursos</a><a href="#propuesta" className="p-3 text-sm font-bold text-primary">Nuestra propuesta</a><a href="#sence" className="p-3 text-sm font-bold text-primary">Franquicia SENCE</a><a href="#contacto" className="bg-primary p-3 text-sm font-bold text-primary-foreground">Hablemos</a></nav></details>
      </div>
    </header>

    <main>
      <section id="inicio" className="relative min-h-[650px] overflow-hidden bg-primary md:min-h-[720px]">
        <img src={heroImage} alt="Instructora capacitando a trabajadores industriales" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--primary)_0%,color-mix(in_oklab,var(--primary)_92%,transparent)_36%,color-mix(in_oklab,var(--primary)_38%,transparent)_72%,transparent_100%)]" />
        <div className="industrial-grid absolute inset-0 opacity-15" />
        <div className="section-shell relative flex min-h-[650px] items-center py-20 md:min-h-[720px]">
          <div className="max-w-2xl border-l-4 border-accent pl-6 md:pl-10"><p className="mb-5 text-xs font-bold uppercase text-accent">Formación para avanzar con seguridad</p><h1 className="text-5xl font-extrabold uppercase leading-[0.92] text-primary-foreground sm:text-6xl md:text-8xl">Capacitamos personas.<br/><span className="text-secondary">Impulsamos equipos.</span></h1><p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/85 md:text-lg">Programas diseñados para responder a los desafíos reales de tu empresa, con aprendizaje práctico y foco en resultados.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#cursos" className="inline-flex h-13 items-center bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Explorar cursos <ArrowRight className="ml-2 size-4" /></a><a href="#contacto" className="inline-flex h-13 items-center border border-primary-foreground/50 px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary">Solicitar una propuesta</a></div></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/20 bg-primary/90"><div className="section-shell grid grid-cols-3 divide-x divide-primary-foreground/15 py-5 text-primary-foreground"><div className="px-3 md:px-6"><strong className="block font-display text-2xl md:text-3xl">Experiencia</strong><span className="text-[10px] uppercase opacity-70 md:text-xs">en formación laboral</span></div><div className="px-3 md:px-6"><strong className="block font-display text-2xl md:text-3xl">Flexibilidad</strong><span className="text-[10px] uppercase opacity-70 md:text-xs">presencial y online</span></div><div className="px-3 md:px-6"><strong className="block font-display text-2xl md:text-3xl">Impacto</strong><span className="text-[10px] uppercase opacity-70 md:text-xs">en cada equipo</span></div></div></div>
      </section>

      <section id="cursos" className="bg-card py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="Programas destacados" title="Aprendizaje que se aplica" intro="Contenidos orientados a fortalecer competencias críticas y elevar los estándares de seguridad en tu organización." /><div className="grid gap-6 md:grid-cols-3">{courses.filter(c => c.featured).map((course, index) => <CourseCard key={course.title} course={course} priority={index === 0} />)}</div></div></section>

      <section id="propuesta" className="industrial-grid bg-muted py-20 md:py-24"><div className="section-shell"><SectionHeading eyebrow="Nuestra propuesta" title="Formación conectada con tu realidad" /><div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{[
        [ShieldCheck, "Foco en seguridad", "Contenidos aplicables a entornos de trabajo exigentes."], [Laptop, "Modalidad flexible", "Alternativas presenciales, mixtas y e-learning."], [Award, "Relatores expertos", "Experiencia práctica al servicio del aprendizaje."], [Smartphone, "Acceso simple", "Capacitación disponible desde distintos dispositivos."]
      ].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <div key={String(title)} className="bg-card p-7"><div className="mb-6 flex size-11 items-center justify-center bg-primary text-accent"><FeatureIcon className="size-5" /></div><h3 className="text-xl font-bold text-primary">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p></div> })}</div></div></section>

      <section id="sence" className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
        <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-2 flex items-center gap-3 text-xs font-bold uppercase text-secondary"><span className="h-px w-8 bg-accent" />Franquicia tributaria</p>
            <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-none text-primary-foreground md:text-5xl">Haz que tu inversión en personas llegue más lejos</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75">Te orientamos para aprovechar la franquicia tributaria SENCE y organizar un plan de capacitación coherente con las necesidades de tu empresa.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Detección de necesidades", "Diseño del plan formativo", "Coordinación de cursos", "Acompañamiento en el proceso"].map(item => <div key={item} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="size-5 shrink-0 text-accent" />{item}</div>)}
            </div>
            <a href="#contacto" className="mt-9 inline-flex h-12 items-center border border-primary-foreground/40 px-5 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary">Conversemos sobre SENCE <ArrowRight className="ml-2 size-4" /></a>
          </div>
          <div className="border-l border-primary-foreground/20 pl-8">
            <p className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">“Capacitar no es solo cumplir. Es preparar a tu equipo para tomar mejores decisiones.”</p>
            <div className="mt-7 h-1 w-20 bg-accent" />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28"><div className="section-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="Catálogo" title="Cursos disponibles" intro="Selecciona un programa o cuéntanos qué necesita tu equipo." /><a href="#contacto" className="mb-9 inline-flex items-center text-sm font-bold text-secondary">Solicitar catálogo completo <ArrowRight className="ml-2 size-4" /></a></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{courses.map(course => <CourseCard key={`all-${course.title}`} course={course} />)}</div></div></section>

      <section id="contacto" className="bg-secondary py-16"><div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase text-secondary-foreground/70">Da el siguiente paso</p><h2 className="mt-2 text-4xl font-extrabold uppercase text-secondary-foreground md:text-6xl">Capacita a tu equipo</h2><p className="mt-3 max-w-2xl text-secondary-foreground/80">Diseñemos una propuesta alineada con tus desafíos, modalidad y número de participantes.</p></div><a href="#cursos" className="inline-flex h-14 shrink-0 items-center justify-center bg-accent px-7 text-sm font-bold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground">Revisar programas <ArrowRight className="ml-2 size-4" /></a></div></section>
    </main>

    <footer className="bg-primary py-14 text-primary-foreground"><div className="section-shell grid gap-10 md:grid-cols-3"><div><img src={logoAsset.url} alt="MCAD Capacitación" width={655} height={123} loading="lazy" className="w-56 rounded-sm bg-card p-3" /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Capacitación laboral orientada a construir equipos más preparados, seguros y productivos.</p></div><div><h3 className="text-lg font-bold uppercase">Navegación</h3><div className="mt-4 grid gap-3 text-sm text-primary-foreground/70"><a href="#cursos">Cursos</a><a href="#propuesta">Nuestra propuesta</a><a href="#sence">Franquicia SENCE</a></div></div><div><h3 className="text-lg font-bold uppercase">Contacto</h3><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">Cuéntanos qué competencias necesita fortalecer tu organización para preparar una propuesta a medida.</p><a href="#inicio" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent">Volver al inicio <ArrowRight className="size-4" /></a></div></div><div className="section-shell mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><span>© 2026 MCAD Capacitación</span><span>Formación para avanzar</span></div></footer>
  </div>;
}