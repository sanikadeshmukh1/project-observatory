import BackLink from "@/components/content/BackLink";
import { Metadata } from "next";
import Section from "@/components/layout/Section";
import { research } from "@/content/research";

type ResearchPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;

  const item = research.find(
    (researchItem) => researchItem.slug === slug
  );

  return {
    title: item?.metaTitle ?? "Research | Project Observatory",
    description:
      item?.metaDescription ??
      "Research investigations from Project Observatory.",
  };
}

export default async function ResearchDetailPage({
  params,
}: ResearchPageProps) {
  const { slug } = await params;

  const item = research.find((researchItem) => researchItem.slug === slug);

  if (!item) {
    return (
      <Section className="py-24">
        <h1 className="font-heading text-4xl text-text-primary">
          Research not found.
        </h1>
      </Section>
    );
  }

  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <BackLink href="/research">
  Back to Research
</BackLink>

        <p className="mt-8 text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Research</span>
        </p>

        <h1 className="mt-6 font-heading text-5xl leading-tight text-text-primary">
          {item.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          {item.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
          <span>{item.year}</span>
          <span>{item.type}</span>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Abstract
            </h2>

            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {item.abstract}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Topics
            </h2>

            <p className="mt-4 text-lg leading-8 text-text-secondary">
              {item.topics.join(" · ")}
            </p>
          </section>

          <section>
            <p className="text-base leading-7 text-text-secondary">
              The full study can be shared upon request. If you'd like to read
              it, feel free to get in touch.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}