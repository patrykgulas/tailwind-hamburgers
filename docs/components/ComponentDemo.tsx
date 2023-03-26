import classNames from "classnames";
import { useState } from "react";

type ComponentDemoProps = {
  name: string;
};

export const ComponentDemo = ({ name }: ComponentDemoProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative">
      <div className="relative bg-slate-800/30 ring-1 ring-white/10 rounded-xl">
        <div className="absolute -top-px left-10 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/40 to-sky-300/0" />
        <div className="absolute -bottom-px left-16 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0" />
        <div className="px-8 py-12 flex items-center justify-center">
          <div
            className={classNames(`tham tham-e-${name} tham-w-8`, {
              "tham-active": opened,
            })}
            onClick={() => setOpened(!opened)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
