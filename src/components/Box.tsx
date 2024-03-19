import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Box({ className, children }: Props) {
  return <div className={`${className} rounded-10`}>{children}</div>;
}
