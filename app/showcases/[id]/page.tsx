import Image from "next/image";
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
        <section className="col-span-12 md:col-span-6 order-last md:order-first">
          <h1 className="text-6xl lg:text-7xl hidden md:block">
            {project.name}
          </h1>
          <div className="mt-14 md:mt-8 flex flex-col justify-between gap-4">
            {project.images?.map((value, index) => (
              <Image
                key={index}
                src={value || "https://source.unsplash.com/800x800/?marmot"}
                width={800}
                height={800}
                alt={`Picture of the ${project.name} project`}
              />
            ))}
          </div>
        </section>

        <section className="col-span-12 md:col-span-6 order-first md:order-last">
          <h1 className="text-6xl lg:text-7xl md:hidden">{project.name}</h1>
          <div className="mt-8 grid grid-cols-12 justify-stretch items-start content-start gap-x-6">
            {project.details?.map((value, index) => (
              <>
                <div className="col-span-2" key={`${index}_left`}>
                  <p className="text-end text-xs lg:text-sm translate-y-2">
                    {value.left}
                  </p>
                </div>
                <div className="col-span-10" key={`${index}_right`}>
                  <p className="text-2xl lg:text-3xl whitespace-break-spaces">
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
                className="text-xs lg:text-sm hover:underline"
              >
                {project.callToAction?.text}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
