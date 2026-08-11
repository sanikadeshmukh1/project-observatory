import Link from "next/link";

import Section from "@/components/layout/Section";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Section className="py-24">
      <div className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Projects</span>
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Work shaped by questions, systems, and ideas.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Projects that explore how ideas can be translated into thoughtful,
          practical work.
        </p>

        <div className="mt-16 divide-y divide-border">
          {projects.map((item, index) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="group block py-8"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>·</span>
                <span>{item.year}</span>

                {item.status && (
                  <>
                    <span>·</span>
                    <span>{item.status}</span>
                  </>
                )}
              </div>

              <h2 className="mt-3 font-heading text-3xl text-text-primary transition-colors duration-200 group-hover:text-accent">
                {item.title}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                {item.description}
              </p>

              {item.themes && item.themes.length > 0 && (
                <p className="mt-4 text-sm text-accent">
                  {item.themes.join(" · ")}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}