import classNames from "classnames";
import { useState } from "react";

type ComponentDemoProps = {
  name: string;
};

export const ComponentDemo = ({ name }: ComponentDemoProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-8 py-12 flex items-center justify-center">
        <div
          className={classNames(`tham tham-e-${name} tham-w-8`, {
            "tham-active": opened,
          })}
          onClick={() => setOpened(!opened)}
        >
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};
