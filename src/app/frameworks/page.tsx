import Section from "@/components/layout/Section";

export default function FrameworksPage() {
  return (
    <Section className="py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Frameworks
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Ways of making sense of complexity.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Frameworks for thinking about people, behaviour, organisations,
          decisions, and systems.
        </p>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-2xl leading-7 text-text-secondary">
            I take ideas I find worth knowing and turn them into learning experiences people can actually use.
          </p>
        </div>
      </div>
    </Section>
  );
}