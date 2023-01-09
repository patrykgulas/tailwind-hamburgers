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
        <p className="mt-2">Available values are:</p>

        <ul>
          <li>
            <b>tham-w-4</b>
          </li>
          <li>
            <b>tham-w-6</b>
          </li>
          <li>
            <b>tham-w-8</b>
          </li>
          <li>
            <b>tham-w-12</b>
          </li>
        </ul>

        <h3>Color</h3>

        <p>
          You can set a color of hamburger menu by adding class to element with{" "}
          <b>tham-inner</b> class name. For example: bg-indigo-500,
          bg-green-300, bg-gray-900.
        </p>
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
