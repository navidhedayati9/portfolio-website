import Link from "next/link";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items?: string[];
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  items = [],
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-neutral-200 pb-5 text-sm">
          <Link href="/" className="font-semibold tracking-wide">
            Personal Portfolio
          </Link>
          <Link href="/contact" className="text-neutral-600 transition hover:text-neutral-950">
            Contact
          </Link>
        </nav>

        <div className="flex flex-1 items-center py-16">
          <div className="w-full">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-650 sm:text-lg">
              {description}
            </p>

            {items.length > 0 ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="border border-neutral-200 bg-white p-5 text-neutral-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
