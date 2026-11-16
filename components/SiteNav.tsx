import Image from "next/image";
import Link from "next/link";
import { Corners } from "./Corners";

type Props = {
  cta: { label: string; href: string };
};

const links = [
  { label: "Apps", href: "/#apps" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav({ cta }: Props) {
  return (
    <nav className="nav">
      <Link className="nav-brand" href="/">
        <Image src="/assets/vm-logo.png" alt="Vinella Media" width={187} height={36} priority style={{ width: "auto" }} />
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <a className="btn btn-primary blueprint" href={cta.href}>
        <Corners />
        {cta.label}
      </a>
    </nav>
  );
}
