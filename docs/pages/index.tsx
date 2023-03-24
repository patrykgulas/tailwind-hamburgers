import classNames from "classnames";
import Head from "next/head";
import Script from "next/script";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ComponentView, GithubLogo, NPMLogo } from "../components";

function HomePage() {
  const variants = [
    {
      name: "Slider",
      class: "slider",
    },
    {
      name: "Squeeze",
      class: "squeeze",
    },
    {
      name: "Arrow",
      class: "arrow",
    },
    {
      name: "Arrow Alt",
      class: "arrow-alt",
    },
    {
      name: "Arrow Turn",
      class: "arrow-turn",
    },
    {
      name: "Spin",
      class: "spin",
    },
  ];
  const sizeClasses = [
    {
      class: "tham-w-4",
      properties: {
        height: "16px",
        width: "10px",
      },
    },
    {
      class: "tham-w-5",
      properties: {
        height: "20px",
        width: "12.5px",
      },
    },
    {
      class: "tham-w-6",
      properties: {
        height: "24px",
        width: "15px",
      },
    },
    {
      class: "tham-w-7",
      properties: {
        height: "28px",
        width: "17.5px",
      },
    },
    {
      class: "tham-w-8",
      properties: {
        height: "32px",
        width: "20px",
      },
    },
    {
      class: "tham-w-9",
      properties: {
        height: "36px",
        width: "22.5px",
      },
    },
    {
      class: "tham-w-10",
      properties: {
        height: "40px",
        width: "25px",
      },
    },
    {
      class: "tham-w-11",
      properties: {
        height: "44px",
        width: "27.5px",
      },
    },
    {
      class: "tham-w-12",
      properties: {
        height: "48px",
        width: "30px",
      },
    },
  ];

  return (
    <div>
      <Head>
        <title>Tailwind Hamburgers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Patryk Gulas" />
        <meta
          name="description"
          content="Hamburger menus built with Tailwind CSS"
        />
        <meta
          name="keywords"
          content="menu, hamburger, hamburgers, tailwind, tailwindcss"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-31LVJCGZFZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-31LVJCGZFZ');
        `}
      </Script>
      <div className="bg-gray-100 h-16 flex items-center justify-between">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between px-4">
          <div className="font-semibold">Tailwind Hamburgers</div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <a
              className="hover:bg-gray-200 p-2 rounded-md h-12 w-12 flex items-center justify-center"
              href="https://github.com/patrykgulas/tailwind-hamburgers"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo className="h-6 w-auto" />
            </a>
            <a
              className="hover:bg-gray-200 p-2 rounded-md h-12 w-12 flex items-center justify-center"
              href="https://www.npmjs.com/package/tailwind-hamburgers"
              target="_blank"
              rel="noreferrer"
            >
              <NPMLogo className="h-9 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="prose sm:prose-sm md:prose-md lg:prose-lg mx-auto my-6 sm:my-12 px-4">
        <h2>Getting started</h2>

        <h3>Installation</h3>

        <div>
          <SyntaxHighlighter language="markup" style={dracula}>
            {`npm install tailwind-hamburgers --save`}
          </SyntaxHighlighter>
        </div>
        <div className="text-gray-600">or</div>
        <div>
          <SyntaxHighlighter language="markup" style={dracula}>
            {`yarn add tailwind-hamburgers`}
          </SyntaxHighlighter>
        </div>

        <h3>Add a plugin to Tailwind</h3>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`// tailwind.config.js
module.exports = {
  plugins: [require('tailwind-hamburgers')],
}`}
        </SyntaxHighlighter>

        <h2>Components</h2>

        <div className="grid grid-cols-1 gap-8">
          {variants.map((variant) => (
            <ComponentView
              title={variant.name}
              name={variant.class}
              key={variant.class}
            />
          ))}
        </div>

        <h2>Customization</h2>

        <h3>Size</h3>

        <p>
          You can set a size of hamburger menu by adding class to element with{" "}
          <b>tham</b> class.
        </p>

        <table className="w-full text-left border-collapse">
          <thead className="border-none">
            <tr>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 p-0">
                <div className="py-2 pr-2 border-b border-slate-200">Class</div>
              </th>
              <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 p-0">
                <div className="py-2 border-b border-slate-200">Properties</div>
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            {sizeClasses.map((size) => (
              <tr key={size.class}>
                <td className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-gray-600 whitespace-nowrap">
                  {size.class}
                </td>
                <td className="flex space-x-6 py-2 pl-2 font-mono text-xs leading-6 text-gray-400 whitespace-pre">
                  <span>height: {size.properties.height};</span>
                  <span>width: {size.properties.width};</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Color</h3>

        <p>
          You can set a color of hamburger menu by adding class to element with{" "}
          <b>tham-inner</b> class name. For example: bg-indigo-500,
          bg-green-300, bg-gray-900.
        </p>

        <a
          className="text-sm"
          href="https://tailwindcss.com/docs/background-color"
          target="_blank"
        >
          See full documentation about background colors
        </a>
      </div>

      <div className="bg-gray-100 p-8 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center space-x-2">
          <div>
            Built by{" "}
            <a
              className="hover:underline"
              href="https://twitter.com/patrykgulas"
              target="_blank"
              rel="noreferrer"
            >
              <b>@patrykgulas</b>
            </a>
          </div>
          <div>·</div>
          <div>
            <a
              className="hover:underline"
              href="https://patrykgulas.com/"
              rel="noreferrer"
              target="_blank"
            >
              patrykgulas.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
