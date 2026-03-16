import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { type Locale, isLocale } from "./i18n";
import { siteConfig } from "./site";

const brandGold = "#FAAC17";
const brandOrange = "#F39F00";
const brandBlack = "#000000";
const brandWhite = "#FFFFFF";

let logoDataUrlPromise: Promise<string> | null = null;

async function getLogoDataUrl() {
  if (!logoDataUrlPromise) {
    logoDataUrlPromise = readFile(
      path.join(process.cwd(), "public", "family-roofing-logo.png"),
    ).then((buffer) => `data:image/png;base64,${buffer.toString("base64")}`);
  }

  return logoDataUrlPromise;
}

function getImageCopy(locale: Locale) {
  if (locale === "es") {
    return {
      headline: "Techos Listos Para Nebraska.",
      badge: "Local. Bilingue. Respuesta Rapida.",
      services: "Techos / Tormentas / Canales",
      callLabel: "Llamanos",
      coverage: "Lincoln y comunidades cercanas",
    };
  }

  return {
    headline: "Roofing Built For Nebraska Weather.",
    badge: "Local. Bilingual. Fast Response.",
    services: "Roofing / Storm Damage / Gutters",
    callLabel: "Call Now",
    coverage: "Lincoln and nearby communities",
  };
}

export async function createSocialImage(localeParam: string) {
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const copy = getImageCopy(locale);
  const logoDataUrl = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brandBlack,
          color: brandWhite,
          padding: "0 68px 64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 30,
            background: brandGold,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 40,
            marginTop: 74,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 680,
              flexDirection: "column",
            }}
          >
            {/* next/image is not supported inside ImageResponse markup. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Family Roofing logo"
              height="116"
              src={logoDataUrl}
              style={{ objectFit: "contain" }}
              width="315"
            />

            <div
              style={{
                fontSize: 70,
                fontWeight: 800,
                lineHeight: 1.02,
                textTransform: "uppercase",
                marginTop: 26,
                maxWidth: 660,
              }}
            >
              {copy.headline}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderLeft: `12px solid ${brandOrange}`,
                background: "rgba(255,255,255,0.08)",
                padding: "16px 22px",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 28,
              }}
            >
              {copy.services}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 330,
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: `3px solid ${brandWhite}`,
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: brandGold,
                }}
              >
                {copy.callLabel}
              </div>
              <div
                style={{
                  fontSize: 46,
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginTop: 8,
                }}
              >
                (800) 818-1354
              </div>
              <div
                style={{
                  fontSize: 22,
                  lineHeight: 1.3,
                  marginTop: 10,
                  color: "rgba(255,255,255,0.84)",
                }}
              >
                {copy.coverage}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                borderLeft: `12px solid ${brandGold}`,
                background: "rgba(255,255,255,0.08)",
                padding: "16px 20px",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.35,
                textTransform: "uppercase",
              }}
            >
              {copy.badge}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `3px solid ${brandGold}`,
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: brandGold,
            }}
          >
            Family Roofing
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
