import Card from "@/components/article/Card";

export default function Home() {
  return (
    <div
      className="
      ideal-h max-w-[1168px] mx-auto my-0 px-4 py-8
      flex flex-wrap items-center justify-center gap-8
    "
    >
      <Card
        id="X4875rscSSKJf4f"
        thumbnail="/images/tests/1.png"
        title="Lorem ipsum dolor amet"
        description="Lorem ipsum dolor set alet consectetur adiscipim elit"
        pubAt="Avril 2023"
        readers={124}
      />
      <Card
        id="X4875rscSSKJf4f"
        thumbnail="/images/tests/2.jpg"
        title="Lorem ipsum dolor amet"
        description="Lorem ipsum dolor set alet consectetur adiscipim elit"
        pubAt="Avril 2023"
        readers={124}
      />
      <Card
        id="X4875rscSSKJf4f"
        thumbnail="/images/tests/3.jpg"
        title="Lorem ipsum dolor amet"
        description="Lorem ipsum dolor set alet consectetur adiscipim elit"
        pubAt="Avril 2023"
        readers={124}
      />
    </div>
  );
}
