import Section from "@/components/layout/Section";

export default function AboutPreview() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ About
        </p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-text-primary">
          The person behind the Observatory
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            I'm a PGDM student specializing in Human Resources, but my curiosity
            rarely stops there. I'm constantly exploring ideas across
            psychology, business, strategy, research, and education. There's
            almost always another side quest I'm pursuing, whether it's a
            research project, a new framework, or an idea I'm trying to
            understand more deeply.
          </p>

          <p>
            My work sits at the intersection of psychology, business, strategy,
            research, and education. While those fields may seem distinct, they
            are connected by a common goal: making complexity easier to
            understand and turning insight into something useful.
          </p>

          <p>
            Project Observatory is where those interests come together. It is a
            place to share what I build, what I learn, and the questions that
            continue to shape my thinking.
          </p>
        </div>
      </div>
    </Section>
  );
}