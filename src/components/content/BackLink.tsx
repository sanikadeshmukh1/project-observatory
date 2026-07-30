import Link from "next/link";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function BackLink({
  href,
  children,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block text-sm text-text-secondary transition-colors hover:text-accent"
    >
      ← {children}
    </Link>
  );
}