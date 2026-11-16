import Image from "next/image";
import Link from "next/link";
import { Corners } from "@/components/Corners";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { apps, CONTACT_EMAIL, services, studioPoints } from "@/lib/site";

/** Toggles the catalog ledger under the hero (a design-time prop in the source design). */
const SHOW_LEDGER = true;

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <SiteNav cta={{ label: "View on the App Store", href: apps[0].appStore }} />

      <div className="container">
        <main>
        <section className="hero">
          <h1 className="display">
            <span>Small games.</span>
            <span className="accent">Built to be picked up.</span>
          </h1>
          <p className="lede">
            Vinella Media is an independent creative studio. We make quick-play games for iOS,
            Android and the web, and build websites, business apps, print material and SEO for our
            clients.
          </p>
          <div className="actions">
            <a className="btn btn-primary blueprint" href="#apps">
              <Corners />
              See our apps
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        {SHOW_LEDGER && (
          <section className="ledger-section" aria-label="Catalog">
            <div className="blueprint">
              <Corners />
              <div className="ledger-head">
                <span>Vinella Media — catalog</span>
                <span>{apps.length} titles · iOS · Android · Web</span>
              </div>
              {apps.map((app, i) => (
                <div className="ledger-row" key={app.slug}>
                  <span className="num">{pad(i + 1)}</span>
                  <span className="ledger-title">{app.name}</span>
                  <span className="ledger-sub ledger-hide">{app.subtitle}</span>
                  <span className="ledger-links ledger-hide">
                    <a href={app.appStore}>App Store →</a>
                    {app.googlePlay && <a href={app.googlePlay}>Google Play →</a>}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="apps" className="section">
          <span className="eyebrow">01 · The apps</span>
          <div className="rule gap-lg" />
          <div className="apps-grid">
            {apps.map((app) => (
              <article className="card blueprint app-card" key={app.slug}>
                <Corners />
                <div className="blueprint app-shot">
                  <Image
                    src={`/assets/${app.slug}-shot.png`}
                    alt={`${app.name} screenshot`}
                    fill
                    sizes="(max-width: 880px) 100vw, 380px"
                  />
                </div>
                <div className="app-meta">
                  <Image
                    className="app-icon"
                    src={`/assets/${app.slug}-icon.png`}
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div>
                    <span className="tag tag-accent">{app.genre}</span>
                    <h2 className="heading-md">{app.name}</h2>
                  </div>
                </div>
                <p className="body-sm">{app.description}</p>
                <div className="app-ctas">
                  <a className="btn btn-secondary btn-block" href={app.appStore}>
                    Download on the App Store
                  </a>
                  {app.googlePlay && (
                    <a className="btn btn-secondary btn-block" href={app.googlePlay}>
                      Get it on Google Play
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <span className="eyebrow">02 · Services</span>
          <div className="rule" />
          <h2 className="heading-lg" style={{ marginBottom: 40 }}>
            Creative development &amp; marketing
          </h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="card blueprint service-card" key={s.title}>
                <Corners />
                <span className="num">{pad(i + 1)}</span>
                <h3 className="heading-sm">{s.title}</h3>
                <p className="body-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="studio">
          <div>
            <span className="eyebrow">03 · The studio</span>
            <div className="rule" />
            <h2 className="heading-lg">One idea per game</h2>
          </div>
          <div className="studio-points">
            {studioPoints.map((p) => (
              <div key={p.title}>
                <h3 className="heading-xs">{p.title}</h3>
                <p className="body-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <span className="eyebrow">04 · Contact</span>
          <div className="rule" />
          <h2 className="heading-lg">Say hello</h2>
          <p>Support questions, press, or partnership ideas. We read every message.</p>
          <div className="actions">
            <a className="btn btn-primary blueprint" href={`mailto:${CONTACT_EMAIL}`}>
              <Corners />
              {CONTACT_EMAIL}
            </a>
            <Link className="btn btn-ghost" href="/privacy">
              Privacy policy
            </Link>
          </div>
        </section>

        </main>
        <SiteFooter link={{ label: "Privacy policy", href: "/privacy" }} />
      </div>
    </>
  );
}
