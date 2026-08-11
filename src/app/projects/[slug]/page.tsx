import { Metadata } from "next";

import BackLink from "@/components/content/BackLink";
import Section from "@/components/layout/Section";

import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const item = projects.find((project) => project.slug === slug);

  return {
    title: item?.metaTitle ?? "Projects | Project Observatory",
    description:
      item?.metaDescription ?? "Projects from Project Observatory.",
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const item = projects.find((project) => project.slug === slug);

  if (!item) {
    return (
      <Section className="py-24">
        <h1 className="font-heading text-4xl text-text-primary">
          Project not found.
        </h1>
      </Section>
    );
  }

  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <BackLink href="/projects">Back to Projects</BackLink>

        <p className="mt-8 text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Project</span>
        </p>

        <h1 className="mt-6 font-heading text-5xl leading-tight text-text-primary">
          {item.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          {item.description}
        </p>

        <div className="mt-8 text-sm leading-7 text-text-secondary">
          <p>
            {item.year}
            {item.status && ` · ${item.status}`}
          </p>

          {item.themes && item.themes.length > 0 && (
            <p className="mt-1">{item.themes.join(" · ")}</p>
          )}
        </div>

        <details className="group mt-8 border-y border-border py-4">
          <summary className="cursor-pointer list-none text-sm text-text-secondary transition-colors hover:text-text-primary">
            <span className="inline-flex items-center gap-2">
              <span className="text-accent transition-transform duration-200 group-open:rotate-45">
                +
              </span>
              <span>Details</span>
            </span>
          </summary>

          <div className="mt-6 space-y-5 text-sm leading-6">
            {item.capabilities && item.capabilities.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                  Capabilities
                </p>
                <p className="mt-1 text-text-primary">
                  {item.capabilities.join(" · ")}
                </p>
              </div>
            )}

            {item.thinkingStyles && item.thinkingStyles.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                  Thinking Styles
                </p>
                <p className="mt-1 text-text-primary">
                  {item.thinkingStyles.join(" · ")}
                </p>
              </div>
            )}

            {item.tools && item.tools.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                  Tools
                </p>
                <p className="mt-1 text-text-primary">
                  {item.tools.join(" · ")}
                </p>
              </div>
            )}
          </div>
        </details>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Why Observatory
            </h2>

            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {item.problem}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Choosing the Difficult Route
            </h2>

            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {item.approach}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              What It Became
            </h2>

            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {item.outcome}
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}