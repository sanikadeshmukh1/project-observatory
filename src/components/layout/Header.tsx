import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl text-neutral-900 transition-colors hover:text-neutral-600"
          >
            {site.author}
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}