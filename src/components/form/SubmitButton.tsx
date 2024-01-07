import React from "react";
import ProgressBar from "./ProgressBar";

export default function SubmitButton(props: {
  text: string;
  loading?: boolean;
  cannotSubmit?: boolean;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-max flex items-center justify-center relative">
        <button
          className="bg-[--primary-color] px-8 py-2 text-white rounded"
          type={props.cannotSubmit ? "button" : "submit"}
          value="Connection"
          disabled={props.loading}
          onClick={props.handleClick}
        >
          {props.text}
        </button>
        {props.loading && (
          <div className="flex items-center justify-center roundedabsolute">
            <ProgressBar
              size={35}
              trackWidth={5}
              indicatorWidth={5}
              progress={25}
              spinnerMode
              indicatorColor="#fff"
            />
          </div>
        )}
      </div>
    </div>
  );
}
