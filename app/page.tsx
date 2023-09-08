import { validateHeaderValue } from "http";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "index", href: "/" },
  { name: "about", href: "/" },
  { name: "links", href: "/" },
];

export default function Home() {
  return (
    <>
      <header>
        <div className="h-5 flex items-end">
          <Link href="/" className="text-xs">
            mlr
          </Link>
        </div>
        <nav className="absolute inset-0 mt-4 flex items-end justify-center w-1/2 mx-auto h-5">
          <ul className="flex flex-row text-xs ">
            {navItems.map((item, index, array) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
                {index < array.length - 1 && <span>,&nbsp;&nbsp;</span>}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="pt-14">
          <h1
            className="leading-[0.8]"
            style={{ fontSize: "clamp(32px,200px,20vw)" }}
          >
            mathis leo renier
            <span
              className="align-super pl-1 sm:pl-2 md:pl-3"
              style={{ fontSize: "clamp(16px,48px,4vw)" }}
            >
              (mæti:s)
            </span>
          </h1>

          <div className="mt-14 text-xl lg:text-2xl grid grid-cols-12 justify-stretch items-start gap-x-6">
            <div className="col-span-4 lg:col-span-6">
              <p className="text-end">i am</p>
            </div>
            <div className="col-span-8 lg:col-span-6">
              <p className="w-11/12 md:w-1/2">
                a full stack developer interested in quantitative finance
              </p>
            </div>
          </div>
          <div className="mt-2 text-xs lg:text-sm grid grid-cols-12 justify-stretch items-start gap-x-6 gap-y-1">
            <div className="col-span-4 lg:col-span-6">
              <p className="text-end">location</p>
            </div>
            <div className="col-span-8 lg:col-span-6">
              <p className="w-11/12 md:w-1/2">
                45.5019° N, 73.5674° W <br />
                montreal / canada
              </p>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <p className="text-end">work</p>
            </div>
            <div className="col-span-8 lg:col-span-6">
              <p className="w-11/12 md:w-1/2">
                algo portfolio analytics at morgan stanley
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-xs lg:text-sm">
            selected projects
            <span className="pl-1 align-super text-[0.60rem]">(12)</span>
          </h3>

          <div className="mt-4 grid grid-cols-12 gap-x-4 gap-y-9">
            <div className="col-span-6">
              <div className="aspect-square bg-black"></div>
              <p className="pt-2 text-xs lg:text-sm">01</p>
              <p className="pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl">serene keys</p>
              <p className="pt-1 text-xs lg:text-sm">/ 2023</p>
            </div>

            <div className="col-span-6">
              <div className="aspect-square bg-black"></div>
              <p className="pt-2 text-xs lg:text-sm">01</p>
              <p className="pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl">serene keys</p>
              <p className="pt-1 text-xs lg:text-sm">/ 2023</p>
            </div>

            <div className="col-span-6">
              <div className="aspect-square bg-black"></div>
              <p className="pt-2 text-xs lg:text-sm">01</p>
              <p className="pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl">serene keys</p>
              <p className="pt-1 text-xs lg:text-sm">/ 2023</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
