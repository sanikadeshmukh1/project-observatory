import Section from "@/components/layout/Section";

export default function ThinkingPage() {
  return (
    <Section className="py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Thinking
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Ideas worth spending time with.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Essays, reflections, long-form writing, and explorations of ideas I
          find interesting enough to develop properly.
        </p>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-3xl text-lg leading-8 text-text-secondary">
            I tend to overshoot the LinkedIn word limit, lol. These are the longer versions: ideas I wanted to follow further, connections I wanted to explore, and things I couldn't quite fit into a post.
          </p>
        </div>
      </div>
    </Section>
  );
}