import Section from "@/components/layout/Section";

const principles = [
  {
    title: "Observe",
    description:
      "Every meaningful solution begins with careful observation. I believe in asking questions, noticing patterns, and understanding situations before rushing to conclusions.",
  },
  {
    title: "Understand",
    description:
      "Observation becomes useful only when it is followed by analysis. I enjoy breaking down complexity, connecting ideas across disciplines, and building frameworks that make difficult concepts easier to understand.",
  },
  {
    title: "Build",
    description:
      "Understanding should lead to something tangible. Whether it is a research project, a framework, a course, or a practical solution, I believe ideas become valuable when they can be applied.",
  },
];

export default function Philosophy() {
  return (
    <Section className="bg-surface py-24">
      <div className="max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">Philosophy</span>
        </p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-text-primary">
          Observe. Understand. Build.
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="font-heading text-2xl text-text-primary">
                {principle.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-text-secondary">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}