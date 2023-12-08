import { JSX } from "preact";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      class={`px-3 py-2 rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${props.class ?? ""
        }`}
    />
  );
}
