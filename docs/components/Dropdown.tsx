import { ComponentViewContext } from "./ComponentView";

export const Dropdown = () => {
  return (
    <ComponentViewContext.Consumer>
      {({ language, setLanguage }) => (
        <div className="relative hidden sm:block ml-2.5">
          <select
            className="bg-transparent text-gray-900 rounded-lg border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium focus:shadow-none focus-visible:ring-2 focus-visible:ring-teal-500 appearance-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="html">HTML</option>
            <option value="tsx">React</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 8 6"
            width="8"
            height="6"
            fill="none"
            className="absolute inset-y-0 right-3.5 h-full pointer-events-none"
          >
            <path
              d="M7 1.5l-3 3-3-3"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </ComponentViewContext.Consumer>
  );
};
