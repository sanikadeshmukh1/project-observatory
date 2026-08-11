import Link from "next/link";
import Section from "@/components/layout/Section";

export default function ResumePage() {
  return (
    <Section className="py-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          ✦ Resume
        </p>

        <div className="mt-4">
          <h1 className="font-heading text-5xl leading-tight text-text-primary">
            Sanika Deshmukh
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
            Human Resources · Psychology · Research · Strategy
          </p>
        </div>

        <div className="mt-10">
          <a
            href="/sanika-deshmukh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center border border-border px-6 py-4 text-sm text-text-primary transition-colors hover:border-text-primary sm:w-auto"
          >
            Download 1-page resume →
          </a>
        </div>

        <div className="mt-20 space-y-20">
          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Professional profile
            </h2>

            <div className="mt-6 max-w-3xl space-y-6 text-lg leading-8 text-text-secondary">
              <p>
                My work sits at the intersection of human resources, psychology,
                research, and strategy. I am particularly interested in people
                and systems: how individuals think and behave, how organisations
                work, how decisions get shaped, and how those systems can be
                made better.
              </p>

              <p>
                Alongside my PGDM in Human Resources, I continue to work across
                research, projects, teaching, and independent learning. I enjoy
                moving between disciplines and turning ideas into something
                useful.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Education
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Welingkar Institute of Management
                  </h3>

                  <p className="text-sm text-text-secondary">
                    2025–2027
                  </p>
                </div>

                <p className="mt-2 text-text-secondary">
                  PGDM · Human Resources
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Amity University Mumbai
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary sm:mt-0">
                    Undergraduate
                  </p>
                </div>

                <p className="mt-2 text-text-secondary">
                  B.A. (Hons.) Applied Psychology · Minor in English Literature
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Experience
            </h2>

            <div className="mt-8 space-y-10">
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Restless Dreamers LLP
                  </h3>

                  <p className="text-sm text-text-secondary">
                    Senior Partner
                  </p>
                </div>

                <p className="mt-3 max-w-3xl leading-7 text-text-secondary">
                  Working across programmes, people, curriculum, and new
                  offerings as part of a growing organisation focused on
                  learning and development.
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Adani Airport Holdings Ltd
                  </h3>

                  <p className="text-sm text-text-secondary">
                    HR Intern
                  </p>
                </div>

                <p className="mt-3 max-w-3xl leading-7 text-text-secondary">
                  Worked on employee research, survey analysis, legislative
                  research, POSH-related work, and HR documentation.
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    LTM
                  </h3>

                  <p className="text-sm text-text-secondary">
                    People Partner Intern
                  </p>
                </div>

                <p className="mt-3 max-w-3xl leading-7 text-text-secondary">
                  Worked alongside people-partnering functions with exposure to
                  HR business partner activities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-heading text-3xl text-text-primary">
                Selected work
              </h2>

              <Link
                href="/projects"
                className="text-sm text-accent transition-opacity hover:opacity-70"
              >
                Explore projects →
              </Link>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Project Observatory
                </h3>

                <p className="mt-2 max-w-3xl leading-7 text-text-secondary">
                  A personal digital observatory bringing together work,
                  research, ideas, and experiments across psychology, business,
                  strategy, and education.
                </p>

                <Link
                  href="/projects/project-observatory"
                  className="mt-3 inline-block text-sm text-accent transition-opacity hover:opacity-70"
                >
                  View project →
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Selected research
                </h3>

                <p className="mt-2 max-w-3xl leading-7 text-text-secondary">
                  Exploratory research examining wellbeing, work, psychology,
                  and human systems.
                </p>

                <Link
                  href="/research"
                  className="mt-3 inline-block text-sm text-accent transition-opacity hover:opacity-70"
                >
                  View research →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Teaching & leadership
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Teaching & learning design
                </h3>

                <p className="mt-2 max-w-3xl leading-7 text-text-secondary">
                  Experience developing and delivering learning experiences
                  across psychology, behaviour, and related subjects.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Leadership
                </h3>

                <p className="mt-2 max-w-3xl leading-7 text-text-secondary">
                  Interested in building teams, developing people, and
                  understanding how thoughtful systems can help organisations
                  work better.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-3xl text-text-primary">
              Areas of interest
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
              Human Resources · HR Strategy · Organisational Behaviour ·
              Psychology · Research · Systems Thinking · Learning & Development
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}