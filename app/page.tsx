import Link from "next/link";

const pathways = [
  {
    title: "Data Science & Statistics",
    href: "/data-science",
    description:
      "Applied modeling, statistical reasoning, experiment design, and data products for rigorous decision-making.",
    links: [
      { label: "Projects", href: "/data-science/projects" },
      { label: "Skills", href: "/data-science/skills" },
      { label: "Resume", href: "/data-science/resume" },
    ],
    metric: "Models, methods, and measurable impact",
  },
  {
    title: "Music & Visual Arts",
    href: "/music-visual-arts",
    description:
      "Performance, composition, visual studies, and creative work shaped by close listening and observation.",
    links: [
      { label: "Performances", href: "/music-visual-arts/music" },
      { label: "Artwork", href: "/music-visual-arts/artwork" },
      { label: "Biography", href: "/music-visual-arts/bio" },
    ],
    metric: "Sound, image, and creative practice",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-neutral-200 pb-5 text-sm">
          <Link href="/" className="font-semibold tracking-wide">
            Personal Portfolio
          </Link>
          <div className="flex items-center gap-4 text-neutral-600">
            <Link href="/contact" className="transition hover:text-neutral-950">
              Contact
            </Link>
            <Link href="/data-science/resume" className="transition hover:text-neutral-950">
              Resume
            </Link>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
              Portfolio in progress
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
              Analytical work and creative practice in one place.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-650 sm:text-lg">
              This site is organized around two connected bodies of work:
              data science and statistics, and music and visual arts. Choose a
              pathway to explore focused project pages, skills, background, and
              ways to get in touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/data-science"
                className="inline-flex min-h-11 items-center justify-center border border-neutral-950 bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Data Science
              </Link>
              <Link
                href="/music-visual-arts"
                className="inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
              >
                Music & Arts
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {pathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className="group flex min-h-[28rem] flex-col justify-between border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
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
                  <p className="mt-4 leading-7 text-neutral-650">
                    {pathway.description}
                  </p>
                </div>

                <div className="relative mt-8">
                  <p className="mb-4 border-t border-neutral-200 pt-4 text-sm font-medium text-neutral-700">
                    {pathway.metric}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pathway.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative z-10 border border-neutral-200 px-3 py-2 text-sm text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
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
