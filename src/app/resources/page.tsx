import Section from "@/components/layout/Section";

export default function ResourcesPage() {
  return (
    <Section className="py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Resources
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Useful things, thoughtfully collected.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Downloads, templates, checklists, toolkits, guides, worksheets, and other useful materials.
        </p>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-2xl leading-7 text-text-secondary">
            Some are built by me. Others are resources I've found worth collecting and sharing.
          </p>
        </div>
      </div>
    </Section>
  );
}