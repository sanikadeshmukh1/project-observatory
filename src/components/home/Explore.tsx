import Link from "next/link";
import Section from "@/components/layout/Section";

const sections = [
  {
    title: "Projects",
    description: "Things I've built, created, or helped bring to life.",
    href: "/projects",
  },
  {
    title: "Research",
    description: "Investigations into questions that matter.",
    href: "/research",
  },
  {
    title: "Writing",
    description: "Long-form essays, reflections, and explainers.",
    href: "/writing",
  },
  {
    title: "Frameworks",
    description: "Structures designed to make complexity clearer.",
    href: "/frameworks",
  },
  {
    title: "Courses",
    description: "Learning experiences designed for curious minds.",
    href: "/courses",
  },
  {
    title: "Resources",
    description: "Templates, guides, and practical tools to use and adapt.",
    href: "/resources",
  },
];

export default function Explore() {
  return (
    <Section className="bg-surface py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Explore
        </p>

        <h2 className="mt-4 font-heading text-4xl leading-tight text-text-primary">
          Explore the Observatory
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Every section offers a different perspective. Explore the one that
          interests you most.
        </p>

        <div className="mt-10 divide-y divide-border">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group flex flex-col gap-2 py-5 transition-colors md:flex-row md:items-center md:justify-between"
            >
              <h3 className="font-heading text-xl text-text-primary transition-transform duration-200 group-hover:translate-x-1">
                {section.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-text-secondary">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}