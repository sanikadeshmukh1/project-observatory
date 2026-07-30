import Section from "@/components/layout/Section";

export default function Conversation() {
  return (
    <Section className="bg-surface py-32">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em]">
          <span className="text-text-secondary">✦</span>{" "}
          <span className="text-accent">
            Let's continue the conversation
          </span>
        </p>

        <h2 className="mt-6 font-heading text-4xl leading-tight text-text-primary">
          I'd love to hear from you.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            If something here sparked a thought, inspired a question, or you'd
            simply like to say hello, I'd be glad to hear from you.
          </p>

          <p>
            Whether it's an idea worth exploring, a potential collaboration, or
            the beginning of a thoughtful conversation, my inbox is always
            open.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          <a
            href="mailto:deshmukhsanika25@gmail.com"
            className="block w-fit text-lg text-text-primary transition-colors hover:text-accent"
          >
            deshmukhsanika25@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/deshmukh-sanika/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit text-lg text-text-primary transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}