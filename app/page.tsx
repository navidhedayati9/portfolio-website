import Link from "next/link";

const pathways = [
  {
    title: "Data Science & Statistics",
    href: "/data-science",
    description:
      "Applied statistics, machine learning, GIS, and data analysis for healthcare, transportation, and public-sector decision-making.",
    links: [
      { label: "Projects", href: "/data-science/projects" },
      { label: "Skills", href: "/data-science/skills" },
      { label: "Resume", href: "/data-science/resume" },
    ],
    metric: "Evidence, models, maps, and decisions",
  },
  {
    title: "Music & Visual Arts",
    href: "/music-visual-arts",
    description:
      "Persian-inspired musical performance, violin, improvisation, and original visual artwork.",
    links: [
      { label: "Performances", href: "/music-visual-arts/music" },
      { label: "Artwork", href: "/music-visual-arts/artwork" },
      { label: "Biography", href: "/music-visual-arts/bio" },
    ],
    metric: "Performance, image, memory, and expression",
  },
];

const actions = [
  { label: "View Data Science Projects", href: "/data-science/projects", primary: true },
  { label: "Explore Music & Visual Arts", href: "/music-visual-arts" },
  { label: "View Resume", href: "/data-science/resume" },
  { label: "Contact Me", href: "/contact" },
];

const featuredWork = [
  {
    title: "Survival Classification in Patients",
    category: "Data Science & Statistics",
    description:
      "Placeholder for a patient-focused classification project using statistical modeling and survival analysis concepts.",
    href: "/data-science/projects",
  },
  {
    title: "SANDAG Data Science Experience",
    category: "Public-Sector Analytics",
    description:
      "Placeholder for transportation, GIS, and regional planning data science work.",
    href: "/data-science/projects",
  },
  {
    title: "Prostate Cancer Prediction",
    category: "Healthcare Modeling",
    description:
      "Placeholder for predictive modeling work connected to prostate cancer risk, outcomes, or classification.",
    href: "/data-science/projects",
  },
  {
    title: "Music Performances",
    category: "Music & Performance",
    description:
      "Placeholder for Persian-inspired performance, violin repertoire, improvisation, and recordings.",
    href: "/music-visual-arts/music",
  },
  {
    title: "Visual Artwork",
    category: "Visual Arts",
    description:
      "Placeholder for original artwork, studies, process notes, and future gallery entries.",
    href: "/music-visual-arts/artwork",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-neutral-200 pb-5 text-sm">
          <Link href="/" className="font-semibold tracking-wide">
            Navid Hedayati
          </Link>
          <div className="flex items-center gap-4 text-neutral-600">
            <Link href="/contact" className="transition hover:text-neutral-950">
              Contact
            </Link>
            <Link
              href="/data-science/resume"
              className="transition hover:text-neutral-950"
            >
              Resume
            </Link>
          </div>
        </nav>

        <section className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
              Data Scientist • Statistician • Musician • Visual Artist
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
              Navid Hedayati
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-650 sm:text-lg">
              I combine statistical analysis, data science, and creative
              practice to explore complex problems, communicate ideas clearly,
              and build meaningful work.
            </p>
            <div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              aria-label="Primary portfolio links"
            >
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex min-h-12 items-center justify-center border border-neutral-950 bg-neutral-950 px-5 text-center text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
                      : "inline-flex min-h-12 items-center justify-center border border-neutral-300 bg-white px-5 text-center text-sm font-semibold text-neutral-950 transition hover:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {pathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className="group relative flex min-h-[30rem] flex-col justify-between border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
              >
                <div>
                  <div className="mb-8 h-40 overflow-hidden border border-neutral-200 bg-neutral-100">
                    {index === 0 ? <DataVisual /> : <ArtsVisual />}
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Pathway {index + 1}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-normal text-neutral-950">
                    <Link href={pathway.href} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {pathway.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-neutral-650">
                    {pathway.description}
                  </p>
                </div>

                <div className="relative mt-8">
                  <p className="mb-4 border-t border-neutral-200 pt-4 text-sm font-medium text-neutral-800">
                    {pathway.metric}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pathway.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative z-10 border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 py-14 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
                Featured Work
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">
                Selected projects and creative work to expand next.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
            >
              Discuss a project
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featuredWork.map((work) => (
              <Link
                key={work.title}
                href={work.href}
                className="group flex min-h-64 flex-col justify-between border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {work.category}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-neutral-950">
                    {work.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-650">
                    {work.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-teal-700 transition group-hover:text-neutral-950">
                  View placeholder
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function DataVisual() {
  return (
    <div className="flex h-full items-end gap-3 bg-gradient-to-br from-teal-50 via-white to-slate-100 p-5">
      {[44, 72, 58, 88, 64, 96].map((height, index) => (
        <div key={height} className="flex flex-1 flex-col items-center gap-3">
          <div
            className="w-full bg-teal-700"
            style={{ height: `${height}%`, opacity: 0.48 + index * 0.07 }}
          />
          <span className="h-2 w-2 rounded-full bg-neutral-950" />
        </div>
      ))}
    </div>
  );
}

function ArtsVisual() {
  return (
    <div className="grid h-full grid-cols-5 grid-rows-4 gap-2 bg-gradient-to-br from-rose-50 via-white to-amber-100 p-4">
      <div className="col-span-2 row-span-4 bg-rose-700" />
      <div className="col-span-3 row-span-1 bg-neutral-950" />
      <div className="col-span-1 row-span-3 bg-amber-400" />
      <div className="col-span-2 row-span-2 bg-white ring-1 ring-neutral-200" />
      <div className="col-span-2 row-span-1 bg-sky-700" />
    </div>
  );
}
