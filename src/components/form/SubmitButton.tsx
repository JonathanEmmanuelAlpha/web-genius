import React from "react";
import ProgressBar from "./ProgressBar";

export default function SubmitButton(props: {
  text: string;
  loading?: boolean;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-max flex items-center justify-center relative">
        <button
          className="bg-[--primary-color] px-8 py-2 text-white rounded"
          type="submit"
          value="Connection"
          disabled={props.loading}
        >
          {props.text}
        </button>
        {props.loading && (
          <div className="w-full h-full flex items-center justify-center rounded bg-slate-900 bg-opacity-80 absolute">
            <ProgressBar
              size={35}
              trackWidth={5}
              indicatorWidth={5}
              progress={25}
              spinnerMode
            />
          </div>
        )}
      </div>
    </div>
  );
}
