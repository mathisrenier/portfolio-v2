import Image from "next/image";
import { about } from "@/content";

export default function About({ params }: { params: { id: string } }) {
  return (
    <main>
      <section className="pt-14">
        <h1
          className="leading-[0.8]"
          style={{ fontSize: "clamp(32px,200px,20vw)" }}
        >
          {about.title}
        </h1>
      </section>

      <div className="grid grid-cols-12 justify-stretch items-start gap-x-6">
        <section className="col-span-12 md:col-span-6 order-last md:order-first">
          <div className="mt-14 flex flex-col justify-between gap-4 ">
            <Image
              src={
                about.image || "https://source.unsplash.com/800x800/?portrait"
              }
              width={800}
              height={800}
              alt="Picture of me"
            />
          </div>
        </section>

        <section className="col-span-12 md:col-span-6 order-first md:order-last">
          <div className="mt-14 grid grid-cols-12 justify-stretch items-start content-start gap-x-6">
            {about.descriptions.map((value, index) => (
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
        </section>
      </div>
    </main>
  );
}
