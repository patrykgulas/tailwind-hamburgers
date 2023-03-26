import { FunctionComponent, PropsWithChildren } from "react";
import { Prism as PrismHighlighter } from "react-syntax-highlighter";
import { coldarkDark as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren & {
  language: string;
  className?: string;
};

export const SyntaxHighlighter: FunctionComponent<Props> = ({
  children,
  language,
  className,
}) => (
  <div
    className={twMerge(
      "bg-slate-800/60 border border-slate-800 rounded-xl",
      className
    )}
  >
    <PrismHighlighter
      customStyle={{
        background: "transparent",
        margin: 0,
        borderRadius: 0,
        border: "none",
        boxShadow: "none",
      }}
      language={language}
      style={style}
    >
      {children}
    </PrismHighlighter>
  </div>
);
