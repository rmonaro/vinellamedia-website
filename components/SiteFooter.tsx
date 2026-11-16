import Link from "next/link";

export function SiteFooter({ link }: { link: { label: string; href: string } }) {
  return (
    <footer className="footer">
      <span>
        <span>© 2026 Vinella Media</span>
        <Link href={link.href}>{link.label}</Link>
      </span>
      <span>Creative Development &amp; Marketing</span>
    </footer>
  );
}
