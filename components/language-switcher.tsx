import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

const names: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div
      aria-label={locale === "en" ? "Switch language" : "Cambiar idioma"}
      className="inline-flex border-2 border-[var(--color-black)] bg-[var(--color-white)]"
      role="group"
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            aria-current={active ? "page" : undefined}
            className={[
              "font-display px-3 py-2 text-sm font-semibold tracking-[0.16em]",
              active
                ? "bg-[var(--color-gold)] text-[var(--color-black)]"
                : "text-[var(--color-black)]",
            ].join(" ")}
            href={`/${item}`}
            lang={item}
          >
            {labels[item]}
            <span className="sr-only">{names[item]}</span>
          </Link>
        );
      })}
    </div>
  );
}
