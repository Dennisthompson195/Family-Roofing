import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="panel max-w-xl rounded-[2rem] p-10 text-center">
        <p className="section-kicker mx-auto">Not Found</p>
        <h1 className="font-display mt-6 text-4xl text-[var(--color-ink)] sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
          Try the English or Spanish homepage to keep exploring the rebuilt
          Family Roofing site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="button-primary" href="/en">
            English
          </Link>
          <Link className="button-secondary" href="/es">
            Español
          </Link>
        </div>
      </div>
    </main>
  );
}
