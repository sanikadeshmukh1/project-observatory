import Section from "@/components/layout/Section";

export default function Hero() {
  return (
    <Section className="pt-32 pb-28">
      <div className="max-w-3xl">
        <div className="mb-10">
          <h1 className="font-heading text-4xl leading-tight text-text-primary md:text-5xl">
            <span className="mr-3 align-middle text-xl text-accent">✦</span>
            Welcome to Project Observatory
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            No single project, resume, or portfolio could fully represent the
            way I work or think. Each one offers a glimpse, but never the whole
            picture.
          </p>

          <p>That's why I built Project Observatory.</p>

          <p>
            Think of it as an observatory for the way I think. A place where the
            different parts of my work come together.
          </p>

          <p>
            Whether you're here out of curiosity, to explore my work, or simply
            passing through, I hope you leave with a clearer understanding of
            who I am, how I approach problems, and the kind of work I create.
          </p>
        </div>
      </div>
    </Section>
  );
}