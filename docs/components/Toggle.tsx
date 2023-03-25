import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";
import { ComponentViewContext } from "./ComponentView";

export const Toggle = () => (
  <ComponentViewContext.Consumer>
    {({ view, setView }) => (
      <div
        className="group p-0.5 rounded-lg flex bg-slate-800/90"
        onClick={() => setView(view === "demo" ? "code" : "demo")}
      >
        <Option active={view === "demo"}>Preview</Option>
        <Option active={view === "code"}>Code</Option>
      </div>
    )}
  </ComponentViewContext.Consumer>
);

type OptionProps = PropsWithChildren & { active: boolean };
const Option: FunctionComponent<OptionProps> = ({ active, children }) => (
  <button
    className={classNames({
      "flex items-center rounded-md py-[0.4375rem] px-4 text-sm font-semibold bg-slate-700/90 shadow text-slate-200":
        active,
      "flex items-center rounded-md py-[0.4375rem] px-4 text-sm font-semibold text-slate-500":
        !active,
    })}
  >
    <span>{children}</span>
  </button>
);
