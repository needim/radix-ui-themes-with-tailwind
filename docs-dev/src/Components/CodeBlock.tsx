import React, { ReactNode } from "react";
import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import bash from "refractor/lang/bash";
import { cn } from "../utils";

Refractor.registerLanguage(ts);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(bash);

export function CodeBlock({
  className,
  children,
  value,
  ...props
}: React.ComponentPropsWithoutRef<typeof Refractor> & {
  children?: ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col">
      <Refractor
        className={cn(
          "!rounded-none rounded-b-none !bg-gray-100 Pre",
          className
        )}
        value={value}
        {...props}
      />
      <div className="p-4 border bg-panel-translucent">{children}</div>
    </div>
  );
}
