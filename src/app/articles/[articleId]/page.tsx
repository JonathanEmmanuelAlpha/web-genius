import { NextPage } from "next";

const Article: NextPage = async () => {
  return (
    <div className="ideal-h max-w-[680px] mx-auto my-0 px-8 py-8 bg-slate-50">
      <h1 className="title-impact text-4xl leading-[3rem] text-slate-800">
        JavaScript programming language a step buy step guide 2024
      </h1>

      <div className="my-4 flex items-center gap-4 text-slate-600">
        <img
          className="w-14 h-14 rounded-full"
          src="/images/avatars/user7.jpg"
          alt="Avater - 7"
        />
        <div>
          <span>John doe</span>
          <div className="flex gap-x-8">
            <span>8min de lectures</span>
            <span>14 Avril 2023</span>
          </div>
        </div>
      </div>

      <img className="w-full" src="/images/tests/2.jpg" alt="Thumbnail" />
    </div>
  );
};

export default Article;
