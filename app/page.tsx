import Image from "next/image";
import Link from "next/link";
import { index } from "@/content";

export default function Home() {
  return (
    <>
      <main>
        <section className="pt-14">
          <h1
            className="leading-[0.8]"
            style={{ fontSize: "clamp(32px,200px,20vw)" }}
          >
            {index.title}
            {index.titleSuperscript && (
              <span
                className="align-super pl-1 sm:pl-2 md:pl-3"
                style={{ fontSize: "clamp(16px,48px,4vw)" }}
              >
                {index.titleSuperscript}
              </span>
            )}
          </h1>

          <div className="mt-14 text-xl lg:text-2xl grid grid-cols-12 justify-stretch items-start gap-x-6">
            {index.subtitle.bold.map((value, index) => (
              <>
                <div className="col-span-4 lg:col-span-6" key={`${index}_left`}>
                  <p className="text-end">{value.left}</p>
                </div>
                <div
                  className="col-span-8 lg:col-span-6"
                  key={`${index}_right`}
                >
                  <p className="w-11/12 md:w-1/2 whitespace-break-spaces">
                    {value.right}
                  </p>
                </div>
              </>
            ))}
          </div>

          <div className="mt-2 text-xs lg:text-sm grid grid-cols-12 justify-stretch items-start gap-x-6 gap-y-1">
            {index.subtitle.thin.map((value, index) => (
              <>
                <div className="col-span-4 lg:col-span-6" key={`${index}_left`}>
                  <p className="text-end">{value.left}</p>
                </div>
                <div
                  className="col-span-8 lg:col-span-6"
                  key={`${index}_right`}
                >
                  <p className="w-11/12 md:w-1/2 whitespace-break-spaces">
                    {value.right}
                  </p>
                </div>
              </>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-24">
          <h3 className="text-xs lg:text-sm">
            {index.showcase.heading}
            <span className="pl-1 align-super text-[0.60rem]">{`(${index.showcase.projects.length})`}</span>
          </h3>

          <div className="mt-4 grid grid-cols-12 gap-x-4 gap-y-9">
            {index.showcase.projects.map((value, index) => (
              <div className="col-span-6 lg:col-span-4" key={index}>
                <Link
                  className="block aspect-square bg-black"
                  href={`/showcases/${value.key}`}
                >
                  <Image
                    src={
                      value.coverImage ||
                      "https://source.unsplash.com/800x800/?marmot"
                    }
                    width={800}
                    height={800}
                    alt={`Picture of the ${value.name} project`}
                    className="aspect-square bg-cover hover:opacity-80"
                  />
                </Link>
                <p className="pt-2 text-xs lg:text-sm">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <p className="pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl">
                  {value.name}
                </p>
                <p className="pt-1 text-xs lg:text-sm">{value.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
