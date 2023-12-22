export default function Input(props: {
  id: string;
  value: string;
  type: React.HTMLInputTypeAttribute | undefined;
  label: string;
  required: boolean;
  maxChar?: number;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}) {
  return (
    <div className={"my-3 min-w-[320px] " + props.className}>
      <div className="shadow rouded bg-white px-4 py-2 rounded">
        <div className="bg-slate-50 w-max text-slate-600 p-1.5 text-sm mb-1 rounded-md flex items-center gap-1 text-start">
          <label className="cursor-pointer" htmlFor={props.id}>
            {props.label}
          </label>
          <strong className="text-red-400">*</strong>
        </div>
        <input
          className="w-full border-none text-slate-700 outline-none bg-inherit"
          type={props.type}
          onChange={props.onChange}
          id={props.id}
        />
      </div>
      {props.maxChar && (
        <div className="flex justify-end text-sm text-slate-600 mt-1">
          <span>
            {props.value.length} /{props.maxChar}
          </span>
        </div>
      )}
    </div>
  );
}
