import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {site.author}
        </p>
      </Container>
    </footer>
  );
}