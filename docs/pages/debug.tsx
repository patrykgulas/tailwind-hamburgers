import classNames from "classnames";
import { useState } from "react";

function DebugPage() {
  const sizes = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex">
      {sizes.map((size) => (
        <div className="flex flex-col space-y-4 bg-gray-200 p-4 m-4 items-center">
          <div className="text-xs font-medium">{size}</div>
          <div className="flex items-center justify-center flex-1">
            <div
              key={size}
              className={classNames(`tham tham-e-squeeze tham-w-${size}`, {
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
      ))}
    </div>
  );
}

export function getStaticProps() {
  return {
    notFound: process.env.NODE_ENV === "production",
    props: {},
  };
}

export default DebugPage;
