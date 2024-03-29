import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { navBar, footer } from "@/content";

const soehneHalbfett = localFont({
  src: "./test-soehne-halbfett.woff2",
  display: "swap",
  variable: "--font-soehne-halbfett",
});

export const metadata: Metadata = {
  title: "Mathis Renier",
  description: "Mathis Renier's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${soehneHalbfett.variable} px-3 py-4 mx-auto bg-white font-sans selection:bg-black selection:text-white max-w-screen-2xl`}
      >
        <header>
          <div className="h-5 flex items-end">
            <Link href={navBar.logo.href} className="text-xs lg:text-sm">
              {navBar.logo.name}
            </Link>
          </div>
          <nav className="absolute inset-0 mt-4 flex items-end justify-center w-1/2 mx-auto h-5">
            <ul className="flex flex-row text-xs ">
              {navBar.navItems.map((item, index, array) => (
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
        {children}

        <footer>
          <div className="mt-24 text-xs lg:text-sm grid grid-cols-12 justify-stretch items-start gap-x-6 gap-y-1">
            <div className="col-span-6 lg:col-span-8">
              <p className="text-end">contact</p>
            </div>
            <div className="col-span-6 lg:col-span-4">
              {footer.contacts.map((value, index) => (
                <a
                  className="block hover:underline"
                  href={value.href}
                  key={index}
                >
                  {value.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 text-xs lg:text-sm grid grid-cols-12 justify-stretch items-start gap-x-6 gap-y-1">
            <div className="col-span-6">
              <p className="text-end">{footer.copyright.left}</p>
            </div>
            <div className="col-span-6">
              <p>{footer.copyright.right}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
