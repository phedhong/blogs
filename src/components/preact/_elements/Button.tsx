import type { JSX } from "preact";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-2 py-1 border-gray-500 border-2 rounded hover:bg-gray-200 transition-colors"
    />
  );
}
