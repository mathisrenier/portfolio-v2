import { index, links } from "@/content";

export default function About({ params }: { params: { id: string } }) {
  return (
    <main>
      <section className="pt-14">
        <h1
          className="leading-[0.8]"
          style={{ fontSize: "clamp(32px,200px,20vw)" }}
        >
          {links.title}
        </h1>
        <h3 className="mt-8 mb-4 text-lg lg:text-xl">{links.subtitle}</h3>
      </section>

      <section>
        {links.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="mt-8 mb-4 text-xs lg:text-sm">
              {category.name}
              <span className="pl-1 align-super text-[0.60rem]">{`(${category.list.length})`}</span>
            </h3>
            {category.list.map((item, itemIndex) => (
                <a href={item.href} key={itemIndex} className="py-1 grid grid-cols-12 text-base lg:text-lg hover:text-white hover:bg-black">
                    <p className="col-span-6">{`n°${(itemIndex + 1).toString().padStart(3, "0")}`}</p>
                    <p className="col-span-6">{item.name}</p>
                </a>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
