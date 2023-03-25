import { createContext, useState } from "react";
import { ComponentCode } from "./ComponentCode";
import { ComponentDemo } from "./ComponentDemo";
import { HeaderMenu } from "./HeaderMenu";

type ComponentViewProps = {
  title: string;
  name: string;
};

export const ComponentViewContext = createContext<{
  view: string;
  setView: (view: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}>({
  view: "",
  setView: () => {},
  language: "",
  setLanguage: () => {},
});

export const ComponentView = ({ title, name }: ComponentViewProps) => {
  const [view, setView] = useState<string>("demo");
  const [language, setLanguage] = useState<string>("html");

  return (
    <ComponentViewContext.Provider
      value={{ view, setView, language, setLanguage }}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="font-medium">{title}</div>
          <HeaderMenu />
        </div>
        <div className="mt-4">
          {view === "demo" && <ComponentDemo name={name} />}
          {view === "code" && <ComponentCode language={language} />}
        </div>
      </div>
    </ComponentViewContext.Provider>
  );
};
