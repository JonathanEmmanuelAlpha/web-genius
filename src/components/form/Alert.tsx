import React from "react";

export default function Alert(props: {
  type: "danger" | "success" | "warning";
  message: string;
}) {
  return (
    <div
      className={`
        "w-full px-4 py-2 my-3 "
        ${
          props.type === "danger"
            ? "bg-red-200 bg-opacity-50 text-red-900"
            : props.type === "warning"
            ? "bg-orange-200 bg-opacity-50 text-orange-900"
            : props.type === "success"
            ? "bg-green-200 bg-opacity-50 text-green-900"
            : ""
        }
  `}
    >
      <div className="flex items-center">
        {props.type === "danger" && (
          <span className="bg-red-600 uppercase text-[10px] text-center mr-2 font-semibold px-1 py-0.5 rounded text-white">
            Error !
          </span>
        )}
        {props.type === "success" && (
          <span className="bg-green-600 uppercase text-[10px] text-center mr-2 font-semibold px-1 py-0.5 rounded text-white">
            Success !
          </span>
        )}
        {props.type === "warning" && (
          <span className="bg-orange-600 uppercase text-[10px] text-center mr-2 font-semibold px-1 py-0.5 rounded text-white">
            Warning !
          </span>
        )}

        <span>{props.message}</span>
      </div>
    </div>
  );
}
