import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logo from "@/public/family-roofing-logo.png";
import inspectionPhoto from "@/public/crew-detail.jpg";
import truckPhoto from "@/public/roof-work.jpg";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/site-content";
import { LanguageSwitcher } from "./language-switcher";
import { SiteIcon } from "./site-icons";

type RoofingHomeProps = {
  locale: Locale;
  content: SiteContent;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  hideDescriptionOnMobile = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  hideDescriptionOnMobile?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <span className={classNames("section-kicker", light && "border-[var(--color-gold)] bg-[var(--color-gold)]")}>
        {eyebrow}
      </span>
      <h2
        className={classNames(
          "font-display mt-5 text-4xl leading-none sm:text-5xl",
          light ? "text-[var(--color-white)]" : "text-[var(--color-black)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={classNames(
            "mt-4 max-w-2xl text-base leading-7 sm:text-lg",
            light ? "text-white/80" : "text-black/75",
            hideDescriptionOnMobile && "hidden sm:block",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BrandLockup({ priority = false }: { priority?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        alt="Family Roofing logo"
        className="h-14 w-auto object-contain sm:h-16"
        priority={priority}
        src={logo}
      />
      <div>
        <p className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-[var(--color-black)]">
          Family Roofing
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70">
          Lincoln, Nebraska
        </p>
      </div>
    </div>
  );
}

function InfoLink({
  href,
  external,
  className,
  children,
}: {
  href?: string;
  external?: boolean;
  className: string;
  children: ReactNode;
}) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <a
      className={className}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export function RoofingHome({ locale, content }: RoofingHomeProps) {
  const alternateLocale = locale === "en" ? "es" : "en";
  const footerExploreLabel = locale === "en" ? "Explore" : "Explora";
  const footerContactLabel = locale === "en" ? "Contact" : "Contacto";
  const mobileAnnouncement =
    locale === "en"
      ? "Hispanic-owned roofing in Lincoln. Se habla espanol."
      : "Empresa hispana de techos en Lincoln. Se habla espanol.";
  const mobileHeroDescription =
    locale === "en"
      ? "Roof repair, storm damage, gutters, and free estimates for Lincoln and nearby Nebraska communities."
      : "Reparacion de techos, dano por tormenta, canales y estimados gratis para Lincoln y comunidades cercanas.";
  const mobileCoverageLine = content.languageCallout.cities.slice(0, 4).join(" / ");
  const mobileTrustItems = content.trust.items.slice(0, 3);
  const photoCta =
    locale === "en"
      ? {
          eyebrow: "Storm Damage?",
          title: "Get a real inspection, not a guess.",
          description:
            "If shingles are lifted, water is getting in, or the storm left marks, call us and we will take a look.",
          switchLabel: "Free Estimate",
        }
      : {
          eyebrow: "Dano Por Tormenta",
          title: "Consigue una inspeccion real, no una suposicion.",
          description:
            "Si los shingles se levantaron, entro agua o la tormenta dejo marcas, llamanos y lo revisamos.",
          switchLabel: "Inspeccion Gratis",
        };

  return (
    <div className="bg-[var(--color-white)] text-[var(--color-black)]">
      <header className="border-b-2 border-[var(--color-black)]">
        <div className="border-b-4 border-[var(--color-gold)] bg-[var(--color-black)] text-[var(--color-white)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.06em] text-white/85 sm:hidden">
              {mobileAnnouncement}
            </p>
            <p className="hidden text-sm font-semibold uppercase tracking-[0.06em] text-white/85 sm:block">
              {content.announcement}
            </p>
            <a className="button-primary w-full sm:w-auto" href="tel:+18008181354">
              {content.contact.primaryCta} (800) 818-1354
            </a>
          </div>
        </div>

        <nav className="bg-[var(--color-white)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href={`/${locale}`}>
              <BrandLockup priority />
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-black)]"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <LanguageSwitcher locale={locale} />
              <a className="button-dark hidden md:inline-flex" href="#contact">
                {content.hero.primaryCta}
              </a>
            </div>
          </div>
        </nav>

        <section className="bg-[var(--color-black)] text-[var(--color-white)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:px-8 lg:py-14">
            <div>
              <span className="section-kicker border-[var(--color-gold)] bg-[var(--color-gold)]">
                {content.hero.kicker}
              </span>

              <h1 className="font-display mt-5 max-w-4xl text-4xl leading-none text-[var(--color-white)] sm:mt-6 sm:text-6xl lg:text-7xl">
                {content.hero.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:hidden">
                {mobileHeroDescription}
              </p>
              <p className="mt-5 hidden max-w-2xl text-lg leading-8 text-white/80 sm:block sm:text-xl">
                {content.hero.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                {content.hero.badges.map((badge) => (
                  <li key={badge} className="chip">
                    {badge}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <a className="button-primary" href="tel:+18008181354">
                  {content.contact.primaryCta}
                </a>
                <a className="button-light" href="#contact">
                  {content.hero.primaryCta}
                </a>
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white/75 sm:hidden">
                {mobileCoverageLine}
              </p>

              <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
                {content.hero.quickFacts.map((fact) => (
                  <InfoLink
                    key={fact.label}
                    className="border-l-4 border-[var(--color-gold)] bg-white/8 p-4"
                    external={fact.external}
                    href={fact.href}
                  >
                    <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--color-white)]">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {fact.detail}
                    </p>
                  </InfoLink>
                ))}
              </div>
            </div>

            <div className="border-4 border-[var(--color-white)]">
              <div className="relative min-h-[14rem] sm:min-h-[24rem]">
                <Image
                  alt="Family Roofing service truck in Lincoln, Nebraska."
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  priority
                  src={truckPhoto}
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-0 left-0 right-0 border-t-4 border-[var(--color-gold)] bg-black/90 p-4">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    {content.hero.captionLabel}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-7 text-white">
                    {content.hero.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="pb-20 md:pb-0">
        <section className="border-b-2 border-[var(--color-black)] bg-[var(--color-white)] py-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-3 md:gap-4 lg:px-8">
            {content.hero.stats.map((stat, index) => (
              <div
                key={stat.value}
                className={classNames(
                  "panel p-4 md:p-5",
                  index === content.hero.stats.length - 1 && "col-span-2 md:col-span-1",
                )}
              >
                <p className="font-display text-xl font-bold uppercase tracking-[0.08em] text-[var(--color-black)] md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-black/75 md:leading-6">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-12" id="services">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              description={content.services.description}
              eyebrow={content.services.eyebrow}
              hideDescriptionOnMobile
              title={content.services.title}
            />

            <div className="mt-7 grid gap-3 sm:mt-8 md:grid-cols-2 xl:grid-cols-4">
              {content.services.items.map((service) => (
                <article key={service.title} className="panel border-t-[10px] border-t-[var(--color-gold)] p-4 md:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-black)] text-[var(--color-gold)]">
                      <SiteIcon className="h-6 w-6" name={service.icon} />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase leading-none text-[var(--color-black)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 hidden text-sm leading-6 text-black/75 sm:block">{service.description}</p>

                  <ul className="mt-4 space-y-2 sm:mt-5">
                    {service.points.map((point, index) => (
                      <li
                        key={point}
                        className={classNames(
                          "flex items-start gap-2 text-sm font-semibold leading-6 text-[var(--color-black)]",
                          index > 1 && "hidden sm:flex",
                        )}
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-[var(--color-gold)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
            <div className="hidden border-2 border-[var(--color-black)] lg:block lg:border-r-0">
              <div className="relative min-h-[18rem] sm:min-h-[22rem]">
                <Image
                  alt="Family Roofing team inspecting shingle damage on a roof."
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  src={inspectionPhoto}
                />
              </div>
            </div>
            <div className="border-2 border-[var(--color-black)] bg-[var(--color-gold)] p-5 sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-black)]">
                {photoCta.eyebrow}
              </p>
              <h2 className="font-display mt-4 text-4xl leading-none text-[var(--color-black)] sm:text-5xl">
                {photoCta.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-black/85 sm:text-lg">
                {photoCta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="button-dark" href="tel:+18008181354">
                  {content.contact.primaryCta}
                </a>
                <a className="button-secondary" href="#contact">
                  {photoCta.switchLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-[var(--color-black)] bg-[var(--color-black)] py-8 sm:py-12" id="process">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8">
            <div>
              <SectionHeading
                description={content.process.description}
                eyebrow={content.process.eyebrow}
                hideDescriptionOnMobile
                light
                title={content.process.title}
              />

              <div className="mt-6 border-t border-white/20 sm:mt-8">
                {content.process.steps.map((step) => (
                  <div key={step.step} className="grid gap-2 border-b border-white/20 py-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-3 sm:py-5">
                    <p className="font-display text-3xl font-bold text-[var(--color-gold)]">{step.step}</p>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-[var(--color-white)] sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 hidden text-sm leading-6 text-white/75 sm:block sm:text-base sm:leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="panel-dark p-5 sm:p-8">
              <SectionHeading
                description={content.languageCallout.description}
                eyebrow={content.languageCallout.eyebrow}
                hideDescriptionOnMobile
                light
                title={content.languageCallout.title}
              />

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white/75 sm:hidden">
                {mobileCoverageLine}
              </p>

              <div className="mt-8 hidden border-t-4 border-[var(--color-gold)] bg-white/8 p-5 sm:block">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  {content.languageCallout.citiesLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.languageCallout.cities.map((city) => (
                    <span
                      key={city}
                      className="border border-white/20 px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white/85"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:hidden">
                {mobileTrustItems.map((item) => (
                  <div key={item.title} className="border-l-4 border-[var(--color-gold)] bg-white/6 p-3">
                    <p className="font-display text-base font-bold uppercase text-[var(--color-white)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 hidden gap-3 sm:grid">
                {content.trust.items.map((item) => (
                  <div key={item.title} className="border-l-4 border-[var(--color-gold)] bg-white/6 p-4">
                    <div className="flex items-center gap-3">
                      <SiteIcon className="h-5 w-5 text-[var(--color-gold)]" name={item.icon} />
                      <p className="font-display text-lg font-bold uppercase text-[var(--color-white)]">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="button-primary" href={`/${alternateLocale}`}>
                  {content.languageCallout.switchCta}
                </Link>
                <a className="button-light" href="tel:+18008181354">
                  {content.contact.primaryCta}
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="hidden py-12 lg:block" id="who-we-help">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              description={content.audiences.description}
              eyebrow={content.audiences.eyebrow}
              title={content.audiences.title}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.audiences.items.map((item) => (
                <div key={item.title} className="panel p-5">
                  <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-black)] text-[var(--color-gold)]">
                    <SiteIcon className="h-6 w-6" name={item.icon} />
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-bold uppercase leading-none text-[var(--color-black)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-2 border-[var(--color-black)] py-8 sm:py-12" id="faq">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8">
            <div>
              <SectionHeading
                description={content.faq.description}
                eyebrow={content.faq.eyebrow}
                hideDescriptionOnMobile
                title={content.faq.title}
              />

              <div className="mt-8 space-y-3">
                {content.faq.items.map((item, index) => (
                  <details
                    key={item.question}
                    className={classNames("faq-item panel", index > 1 && "hidden sm:block")}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 font-display text-lg font-bold uppercase text-[var(--color-black)] sm:p-5 sm:text-xl">
                      <span>{item.question}</span>
                      <span className="text-2xl text-[var(--color-orange)]">+</span>
                    </summary>
                    <div className="border-t-2 border-[var(--color-black)] px-4 py-4 sm:px-5">
                      <p className="text-sm leading-6 text-black/75 sm:text-base sm:leading-7">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <aside className="panel-dark p-5 sm:p-8" id="contact">
              <SectionHeading
                description={content.contact.description}
                eyebrow={content.contact.eyebrow}
                hideDescriptionOnMobile
                light
                title={content.contact.title}
              />

              <div className="mt-6 grid gap-3 sm:mt-8">
                {content.contact.details.map((detail, index) => (
                  <InfoLink
                    key={detail.label}
                    className={classNames(
                      "border-l-4 border-[var(--color-gold)] bg-white/8 p-4",
                      index > 1 && "hidden sm:block",
                    )}
                    external={detail.external}
                    href={detail.href}
                  >
                    <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--color-white)]">
                      {detail.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{detail.detail}</p>
                  </InfoLink>
                ))}
              </div>

              <div className="mt-5 border-t-4 border-[var(--color-gold)] bg-white/8 p-4 sm:hidden">
                <p className="text-sm font-semibold leading-6 text-white/80">
                  {locale === "en"
                    ? "Send the address, a few photos if you have them, and the best number to reach you."
                    : "Manda la direccion, unas fotos si las tienes y el mejor numero para regresarte la llamada."}
                </p>
              </div>

              <div className="mt-6 hidden border-t-4 border-[var(--color-gold)] bg-white/8 p-5 sm:block">
                <h3 className="font-display text-2xl font-bold uppercase text-[var(--color-white)]">
                  {content.contact.checklistTitle}
                </h3>
                <ul className="mt-4 space-y-2">
                  {content.contact.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold leading-6 text-white/80">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-[var(--color-gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="button-primary" href="tel:+18008181354">
                  {content.contact.primaryCta}
                </a>
                <a className="button-light" href="mailto:info@familyrestorationne.com">
                  {content.contact.secondaryCta}
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-[var(--color-gold)] bg-[var(--color-black)] text-[var(--color-white)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:px-8">
          <div>
            <Image
              alt="Family Roofing logo"
              className="h-16 w-auto object-contain"
              src={logo}
            />
            <p className="mt-4 hidden max-w-xl text-base leading-7 text-white/75 sm:block">
              {content.footer.tagline}
            </p>
          </div>

          <div className="hidden md:block">
            <p className="font-display text-lg font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">
              {footerExploreLabel}
            </p>
            <div className="mt-4 space-y-3">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/80"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">
              {footerContactLabel}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/80">
              <a className="block font-semibold text-[var(--color-white)]" href="tel:+18008181354">
                (800) 818-1354
              </a>
              <a
                className="block font-semibold text-[var(--color-white)]"
                href="mailto:info@familyrestorationne.com"
              >
                info@familyrestorationne.com
              </a>
              <a
                className="block"
                href="https://maps.google.com/?q=3625+Adams+Street+Lincoln+NE+68504"
                rel="noreferrer"
                target="_blank"
              >
                3625 Adams Street
                <br />
                Lincoln, NE 68504
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20" />

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Family Roofing.</p>
          <p className="hidden sm:block">{content.footer.bottomLine}</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-[var(--color-gold)] bg-[var(--color-black)] p-3 md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a className="button-primary flex-1" href="tel:+18008181354">
            {content.contact.primaryCta}
          </a>
          <a className="button-light flex-1" href="#contact">
            {content.hero.primaryCta}
          </a>
        </div>
      </div>
    </div>
  );
}
