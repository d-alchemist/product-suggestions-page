import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      type="button"
      className="bg-pink-primary px-6 py-3 rounded-10 text-sm font-semibold text-[#F2F4FE] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {children}
    </button>
  );
}
