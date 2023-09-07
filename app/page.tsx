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
            mathis
          </Link>
        </div>
        <nav className="absolute inset-0 mt-4 flex items-end justify-center w-1/2 mx-auto h-5">
          <ul className="flex flex-row text-xs ">
            {navItems.map((item, index, array) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
                {index < array.length - 1 && <span>,&nbsp;</span>}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="pt-14">
          {/* <h1 className="leading-[0.8]" style={{fontSize: 'clamp(32px,13vw,90px)'}}>mathis leo renier</h1> */}
          <h1
            className="leading-[0.8]"
            style={{ fontSize: "clamp(32px,400px,28vw)" }}
          >
            mathis
          </h1>
        </section>
      </main>
    </>
  );
}
