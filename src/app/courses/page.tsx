import Section from "@/components/layout/Section";

export default function CoursesPage() {
  return (
    <Section className="py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Courses
        </p>

        <h1 className="mt-4 font-heading text-5xl leading-tight text-text-primary">
          Learning designed with intention.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Courses, teaching material, and learning experiences developed around
          psychology, behaviour, work, and related ideas.
        </p>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-2xl leading-7 text-text-secondary">
            Courses and teaching material will appear here as they are
            developed.
          </p>
        </div>
      </div>
    </Section>
  );
}