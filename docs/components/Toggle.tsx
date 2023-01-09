import classNames from "classnames";
import { ComponentViewContext } from "./ComponentView";

export const Toggle = () => (
  <ComponentViewContext.Consumer>
    {({ view, setView }) => (
      <div
        className="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200"
        onClick={() => setView(view === "demo" ? "code" : "demo")}
      >
        <button
          className={classNames({
            "flex focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-md focus:outline-none focus-visible:ring-offset-gray-100":
              view === "demo",
            "ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100":
              view === "code",
          })}
        >
          <span
            className={classNames({
              "p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium bg-white shadow-sm ring-1 ring-black ring-opacity-5":
                view === "demo",
            })}
          >
            Preview
          </span>
        </button>
        <button
          className={classNames({
            "flex focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-md focus:outline-none focus-visible:ring-offset-gray-100":
              view === "code",
            "ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100":
              view === "demo",
          })}
        >
          <span
            className={classNames({
              "p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium bg-white shadow-sm ring-1 ring-black ring-opacity-5":
                view === "code",
            })}
          >
            Code
          </span>
        </button>
      </div>
    )}
  </ComponentViewContext.Consumer>
);
