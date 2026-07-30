import Section from "@/components/layout/Section";

export default function ObservatoryIntro() {
  return (
    <Section className="py-24">
      <div className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Project Observatory</span>
        </p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-text-primary">
          Why "Project Observatory"?
        </h2>

        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            The name comes from a simple idea.
          </p>

          <p>
            Looking at a single project, paper, or resume is like looking at a
            single star. It tells you something, but never the whole story.
          </p>

          <p>
            Project Observatory brings those pieces together. Not to document
            every thought or every step of the process, but to create a clearer
            picture of how I think, what I choose to build, and the questions I
            keep returning to.
          </p>

          <p>
            You don't need to explore everything. Start wherever your curiosity
            takes you.
          </p>
        </div>
      </div>
    </Section>
  );
}