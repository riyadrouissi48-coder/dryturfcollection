import { createFileRoute } from "@tanstack/react-router";
import heroTurf from "../assets/hero-turf.jpg";
import playground from "../assets/playground.jpg";
import blade from "../assets/blade.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const reviews = [
  {
    name: "Domingo Wise",
    text: "Nathan came back to us promptly and scheduled a complimentary consult. Prompt, professional, fair price. The crew even flagged gopher holes and suggested mesh wiring to safeguard our eco-prime turf.",
  },
  {
    name: "Matthew Howard",
    text: "We chose Imperial Premier after talking with Luke. The grass was excellent — Ricardo and his team were the best. Amazing appearance, happy customer. I keep recommending them.",
  },
  {
    name: "Dave Preston",
    text: "Ezekiel was our estimator. I asked for a team that would respect my property and bring decorum. Max and his crew were exactly that. Bravo.",
  },
  {
    name: "Benjamin Rodriguez",
    text: "A very pleasant experience. Their staff represented the company well and were extremely knowledgeable of the various artificial grass products.",
  },
  {
    name: "Scott Nelson",
    text: "I'd absolutely recommend these installers to anyone. Picture-perfect look — every friend and family member who visits is in awe of my yard.",
  },
];

const services = [
  { n: "01", title: "Premium Artificial Turf", body: "Hand-selected eco-prime blends engineered for New England seasons, drainage, and decades of foot traffic." },
  { n: "02", title: "Playground Surfacing", body: "ASTM-rated cushioned turf systems that turn any yard, school, or daycare into a safer, softer playground." },
  { n: "03", title: "Site Prep & Protection", body: "Grading, gopher mesh, edging, and infill — the unseen craft that keeps the surface flawless year over year." },
  { n: "04", title: "Care & Stewardship", body: "Seasonal grooming and honest assessments. We tell you what your turf actually needs — never more." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-primary-foreground">
          <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            Dry Turf <span className="opacity-60">/ Lowell</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm">
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#voices" className="hover:text-accent transition-colors">Voices</a>
            <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
          </nav>
          <a
            href="tel:+16679107585"
            className="text-sm border border-primary-foreground/30 rounded-full px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            (667) 910-7585
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground grain">
        <img
          src={heroTurf}
          alt="Close-up of premium emerald artificial turf with morning dew"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/95" />

        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-20">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] uppercase opacity-70 mb-8">
              Est. Lowell · Massachusetts
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95]">
              Where the
              <br />
              <em className="not-italic text-accent">green</em> never
              <br />
              goes dormant.
            </h1>
            <p className="mt-10 max-w-xl text-base md:text-lg opacity-80 leading-relaxed">
              A small Lowell studio installing premium artificial turf and playground surfaces.
              Quietly obsessed with drainage, blade quality, and the kind of craftsmanship that
              outlasts the trend cycle.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="tel:+16679107585"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary-foreground transition-colors"
              >
                Book a free consult
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#work" className="text-sm tracking-wide opacity-80 hover:opacity-100 underline underline-offset-4">
                See recent installs
              </a>
            </div>
          </div>
        </div>

        {/* Hero footer strip */}
        <div className="relative border-t border-primary-foreground/15">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs tracking-[0.2em] uppercase opacity-80">
            <div>
              <div className="opacity-50 mb-1">Hours</div>
              <div>Open · closes 6 PM</div>
            </div>
            <div>
              <div className="opacity-50 mb-1">Studio</div>
              <div>57 Arlene Rd, Lowell</div>
            </div>
            <div>
              <div className="opacity-50 mb-1">Plus Code</div>
              <div>JMQC+QV Lowell, MA</div>
            </div>
            <div>
              <div className="opacity-50 mb-1">Access</div>
              <div>Wheelchair parking ♿</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-background border-y border-border overflow-hidden py-5">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-3xl md:text-4xl text-foreground/80">
              <span>Eco-Prime Turf</span><span className="text-accent">✦</span>
              <span>Imperial Premier</span><span className="text-accent">✦</span>
              <span>Playground Safe</span><span className="text-accent">✦</span>
              <span>Gopher Mesh</span><span className="text-accent">✦</span>
              <span>Decade Warranty</span><span className="text-accent">✦</span>
              <span>Lowell, MA</span><span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO / WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">A small studio · Big standards</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1] mb-8">
            We don't lay
            <br />
            turf. We
            <br />
            <em className="not-italic text-accent">compose</em> it.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            From the first walkthrough to the last edge tuck, every install is shaped by the
            same hands. That's how a Lowell backyard ends up looking like something out of a
            magazine — and stays that way through ten New England winters.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-5">
          <div className="col-span-2 aspect-[16/11] overflow-hidden rounded-sm bg-muted">
            <img src={playground} alt="Modern playground installed on bright artificial turf surface" loading="lazy" width={1400} height={1600} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-sm bg-muted">
            <img src={blade} alt="Macro detail of synthetic turf blade with water droplet" loading="lazy" width={1200} height={1200} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-primary text-primary-foreground p-7 rounded-sm flex flex-col justify-between">
            <span className="text-xs tracking-[0.3em] uppercase opacity-70">By the numbers</span>
            <div>
              <div className="font-display text-6xl leading-none">12<span className="text-accent">yr</span></div>
              <div className="text-sm opacity-70 mt-3">Surfaces still holding their color, drainage, and bounce.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <h2 className="font-display text-5xl md:text-7xl leading-[1] max-w-2xl">
              Four quiet
              <br />
              specialties.
            </h2>
            <p className="max-w-sm opacity-70 text-sm leading-relaxed">
              Everything we offer falls into one of four lanes. Anything outside of that,
              we'll refer you to the right neighbor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10">
            {services.map((s) => (
              <div key={s.n} className="group bg-primary p-10 md:p-12 hover:bg-primary-foreground hover:text-primary transition-colors">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-xs tracking-[0.3em] opacity-60">— {s.n}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-75 max-w-md">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES / REVIEWS */}
      <section id="voices" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Voices · Five stars, every time</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1]">
              Letters from
              <br />
              the <em className="not-italic text-accent">yard.</em>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Every name below is a real Lowell-area household. We keep their words verbatim
              — typos, enthusiasm, and all. It's the most honest thing we can put on a page.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`p-8 rounded-sm border border-border bg-card flex flex-col gap-6 ${
                i === 0 ? "lg:row-span-2 lg:bg-accent lg:text-accent-foreground lg:border-accent" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} className={i === 0 ? "lg:text-accent-foreground" : ""}>★</span>
                  ))}
                </div>
                <span className="text-xs opacity-60">5.0</span>
              </div>
              <p className={`font-display text-xl md:text-2xl leading-snug ${i === 0 ? "lg:text-3xl" : ""}`}>
                "{r.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-border/60 text-sm tracking-wide">
                — {r.name}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Visit · Lowell, MA</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] mb-10">
              Come stand
              <br />
              on the <em className="not-italic text-accent">green.</em>
            </h2>
            <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
              Samples, swatches, and sit-downs with a real installer — not a sales rep.
              Wheelchair-accessible parking right out front.
            </p>

            <dl className="grid grid-cols-2 gap-y-8 gap-x-6 text-sm">
              <div>
                <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Studio</dt>
                <dd>57 Arlene Rd<br />Lowell, MA 01851</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Phone</dt>
                <dd><a href="tel:+16679107585" className="underline underline-offset-4 hover:text-accent">(667) 910-7585</a></dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Hours</dt>
                <dd>Open today · closes 6 PM</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Plus Code</dt>
                <dd>JMQC+QV Lowell</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Accessibility</dt>
                <dd className="flex items-center gap-2">
                  <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">♿</span>
                  Wheelchair-accessible parking on site
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <iframe
                title="Map to Dry Turf Collection of Lowell"
                src="https://www.google.com/maps?q=57+Arlene+Rd,+Lowell,+MA+01851&output=embed"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6">Book a consult</p>
              <h3 className="font-display text-5xl md:text-7xl leading-[0.95]">
                Tell us about
                <br />
                your <em className="not-italic text-accent">yard.</em>
              </h3>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="tel:+16679107585"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary-foreground transition-colors"
              >
                (667) 910-7585 →
              </a>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-primary-foreground/15 flex flex-wrap justify-between gap-4 text-xs tracking-[0.2em] uppercase opacity-60">
            <span>© {new Date().getFullYear()} Dry Turf Collection of Lowell</span>
            <span>57 Arlene Rd · Lowell, MA · (667) 910-7585</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
