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
      title: "Why protein?",
      large: true,
      demo:
      <div style={{padding: 25}}>
      <p>
            Protein is the key nutrient and building block for muscle. A high protein diet has been linked to a decrease in appetite, helping with weight loss and calorie deficits in both ways.
        </p>
      </div>
    },
    {
      title: "Why track and target protein goals?",
      demo:
      <div style={{padding: 25}}>
      <p>
      It is recommended to eat around 0.8 - 1 gram of protein per pound of body weight for both muscle gain and fat loss. This target is not easy to hit every day, thus it is important to stay on top of your health goal.
      </p>
      </div>
    }
  ];