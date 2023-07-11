import Card from "@/components/home/card";

export default async function DefaultHomeCards() {
    return (
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
            <Card
              key={title}
              title={title}
              description={description}
              demo={demo}
              large={large}
            />
          ))}
          </div>
    )
}

const features = [
    {
      title: "Beautiful, reusable components",
      large: true,
      demo: <h1>t</h1>
    },
    {
      title: "Performance first",
      description:
        "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance."
    }
  ];