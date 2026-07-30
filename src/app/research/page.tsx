import Link from "next/link";
import Section from "@/components/layout/Section";
import { research } from "@/content/research";

export default function ResearchPage() {
  return (
    <Section className="py-24">
      <div className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Research</span>
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Investigations into questions that matter.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Research exploring questions across psychology, behaviour, work, and
          human systems.
        </p>

        <div className="mt-16 divide-y divide-border">
          {research.map((item, index) => (
            <Link
  key={item.slug}
  href={`/research/${item.slug}`}
  className="group block py-8 transition-transform duration-200 hover:translate-x-1"
>
              <p className="text-sm text-text-secondary">
                {String(index + 1).padStart(2, "0")} · {item.year}
              </p>

              <h2 className="mt-3 font-heading text-3xl text-text-primary">
                {item.title}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                {item.description}
              </p>

              <p className="mt-4 text-sm text-accent">
                {item.type}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}