import Section from "@/components/layout/Section";

export default function ContactPage() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Contact
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Let's have a conversation.
        </h1>

        <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            If something here sparked a question, you want to discuss an idea,
            or you'd simply like to get in touch, I'd be happy to hear from
            you.
          </p>

          <p>
            I'm particularly interested in conversations around people,
            organisations, psychology, strategy, research, learning, and
            interesting problems that don't fit neatly into one category.
          </p>
        </div>

        <div className="mt-12 space-y-6 border-t border-border pt-8">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">
              Email
            </p>

            <a
              href="mailto:deshmukhsanika25@gmail.com"
              className="mt-2 inline-block text-lg text-text-primary transition-opacity hover:opacity-60"
            >
              deshmukhsanika25@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">
              LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/deshmukh-sanika/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg text-text-primary transition-opacity hover:opacity-60"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}