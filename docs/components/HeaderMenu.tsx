import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";

export const HeaderMenu = () => (
  <div className="flex items-center">
    <Toggle />
    <div className="hidden sm:block w-px h-6 bg-slate-700/60 ml-6"></div>
    <Dropdown />
  </div>
);
