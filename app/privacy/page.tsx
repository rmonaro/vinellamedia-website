import type { Metadata } from "next";
import { Corners } from "@/components/Corners";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What information Vinella Media collects through our apps, games and website, how we use it, and the choices you have.",
};

const EFFECTIVE_DATE = "November 16, 2026";

const sections = [
  {
    id: "collect",
    title: "Information we collect",
    body: [
      "Our games can be played without creating an account. We do not ask for your name, address or phone number in our apps.",
      "We may collect limited technical information automatically, such as device type, operating system version, app version, crash reports and general usage data like levels played or session length. This information does not identify you personally.",
      "If you contact us by email or through our website, we receive the information you choose to send, such as your name, email address and message.",
    ],
  },
  {
    id: "use",
    title: "How we use it",
    body: [
      "We use this information to run and improve our apps, fix bugs, understand which features are used, respond to support requests and, for client projects, deliver the services we have agreed to provide. We do not sell your personal information.",
    ],
  },
  {
    id: "third",
    title: "Third-party services",
    body: [
      "Our apps are distributed through the Apple App Store and Google Play, and may use third-party services for analytics, crash reporting or advertising. These providers may collect information under their own privacy policies. Purchases are handled by Apple or Google; we never receive your payment details.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "We do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, contact us and we will delete it.",
    ],
  },
  {
    id: "retention",
    title: "Retention & security",
    body: [
      "We keep information only as long as needed for the purposes above and use reasonable measures to protect it. No method of transmission or storage is completely secure.",
    ],
  },
  {
    id: "rights",
    title: "Your choices",
    body: [
      "You can limit ad tracking and analytics in your device settings, and you can delete an app at any time to stop further collection. You may ask us to access, correct or delete information you have sent us.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    body: [
      "We may update this policy from time to time. The effective date at the top of this page shows when it was last revised.",
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function PrivacyPolicy() {
  return (
    <>
      <SiteNav cta={{ label: "Contact us", href: `mailto:${CONTACT_EMAIL}` }} />

      <div className="container">
        <main>
          <section className="pp-hero">
            <span className="eyebrow">Legal · Effective {EFFECTIVE_DATE}</span>
            <div className="rule" />
            <h1>Privacy policy</h1>
            <p>
              This policy explains what information Vinella Media collects through our apps, games
              and website, how we use it, and the choices you have.
            </p>
          </section>

          <div className="pp">
            <aside className="pp-toc">
              <span className="eyebrow">Contents</span>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`}>
                  {pad(i + 1)} · {s.title}
                </a>
              ))}
              <a href="#contact">{pad(sections.length + 1)} · Contact</a>
            </aside>

            <article className="pp-body">
              {sections.map((s, i) => (
                <section id={s.id} key={s.id}>
                  <h2>
                    <span>{pad(i + 1)}</span> {s.title}
                  </h2>
                  {s.body.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </section>
              ))}

              <section id="contact" className="card blueprint">
                <Corners />
                <h2>
                  <span>{pad(sections.length + 1)}</span> Contact
                </h2>
                <p>
                  Questions about this policy or your information:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </section>
            </article>
          </div>
        </main>
        <SiteFooter link={{ label: "Home", href: "/" }} />
      </div>
    </>
  );
}
