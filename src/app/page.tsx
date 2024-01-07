import { NextPage } from "next";

import Card from "@/components/article/Card";

const Home: NextPage = async () => {
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
        title="A complete beginner guide on SOLID design principles"
        pubAt="Septembre 2023"
        readers={512}
      />
      <Card
        id="X4875rscSSKJf4f"
        thumbnail="/images/tests/2.jpg"
        title="JavaScript programming language a step buy step guide 2024"
        pubAt="Avril 2023"
        readers={789}
      />
      <Card
        id="X4875rscSSKJf4f"
        thumbnail="/images/tests/3.jpg"
        title="Lorem ipsum dolor set alet consectetur adiscipim elit"
        pubAt="Mai 2023"
        readers={478}
      />
    </div>
  );
};

export default Home;
