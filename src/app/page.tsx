export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1A1A1A]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-8 text-center">
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#8A6A3F]">
          Project Observatory
        </p>

        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Observe.
          <br />
          Understand.
          <br />
          Build.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-[#5A5A5A]">
          Observe deeply. Understand clearly. Build thoughtfully.
        </p>
      </section>
    </main>
  );
}