import React from "react";

export default function ContainerBackground({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) {
  return (
    <div
      className={`absolute  px-4 w-full -translate-x-1/2 left-1/2 ${classNames}`}
    >
      {children}
    </div>
  );
}
