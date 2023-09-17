import { index } from "@/content";

export default function Page({ params }: { params: { id: string } }) {
  const project =
    index.showcase.projects.find((x) => x.key === params.id) || null;

  if (!project) {
    return (
      <main className="pt-14">
        <p
          className="leading-[0.8]"
          style={{ fontSize: "clamp(32px,200px,20vw)" }}
        >
          This project does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="pt-14">
      <div className="grid grid-cols-12 justify-stretch items-start gap-x-6">
        <section className="col-span-12 md:col-span-6">
          <h1 className="text-7xl">{project.name}</h1>
        </section>

        <section className="mt-8 col-span-12 md:col-span-6">
          <div className="grid grid-cols-12 justify-stretch items-start content-start gap-x-6">
            {project.details?.map((value, index) => (
              <>
                <div className="col-span-2" key={`${index}_left`}>
                  <p className="text-end text-sm translate-y-2">{value.left}</p>
                </div>
                <div className="col-span-10" key={`${index}_right`}>
                  <p className="text-3xl whitespace-break-spaces">
                    {value.right}
                  </p>
                </div>
              </>
            ))}
          </div>

          <div className="grid grid-cols-12 justify-stretch items-start content-start gap-x-6">
            <div className="col-span-2"></div>
            <div className="mt-14 col-span-10">
              <a
                href={project.callToAction?.href}
                className="text-sm hover:underline"
              >
                {project.callToAction?.text}
              </a>
            </div>
          </div>

        </section>

        <section className="nt-14 col-span-12 md:col-span-4">
          hello hihi
        </section>
      </div>
    </main>
  );
}
