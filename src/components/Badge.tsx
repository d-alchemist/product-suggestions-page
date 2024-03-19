import { ReactNode } from "react";

type Props = {
  selected: boolean;
  children: ReactNode;
};
export default function Badge({ selected, children }: Props) {
  return (
    <span
      className={`${
        selected
          ? "bg-primary text-light-primary"
          : "bg-light-primary text-primary"
      } inline-flex items-center px-5 rounded-10 py-2 text-13 font-semibold`}
    >
      {children}
    </span>
  );
}
