import Head from "next/head";
import Script from "next/script";
import { ComponentView } from "../components";
import { LandingHeader } from "../components/LandingHeader";
import { LandingHero } from "../components/LandingHero";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";

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
      name: "Spin",
      class: "spin",
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

      <LandingHeader />
      <LandingHero />

      <div
        className={`
          prose 
          prose-invert 
          text-slate-400 
          prose-headings:scroll-mt-28 
          prose-headings:font-display 
          prose-headings:font-normal 
          lg:prose-headings:scroll-mt-[8.5rem] 
          prose-lead:text-slate-400 
          prose-a:font-semibold 
          prose-a:text-sky-400 
          prose-a:no-underline 
          [--tw-prose-background:theme(colors.slate.900)] 
          prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] 
          hover:prose-a:[--tw-prose-underline-size:6px] 
          prose-pre:rounded-xl 
          prose-pre:bg-slate-800/60 
          prose-pre:shadow-none 
          prose-pre:ring-1 
          prose-pre:ring-slate-300/10 
          prose-hr:border-slate-800 
          min-w-0 
          max-w-2xl 
          mx-auto 
          my-6 
          sm:my-12 
          px-4
        `}
      >
        <h2 id="getting-started">Getting started</h2>

        <h3>Installation</h3>

        <div>
          <SyntaxHighlighter language="shell">
            {`npm install tailwind-hamburgers -S`}
          </SyntaxHighlighter>
        </div>

        <h3>Add a plugin to Tailwind</h3>

        <SyntaxHighlighter language="javascript">
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

        <div className="max-w-full overflow-x-auto">
          <table className="w-full text-left border-collapse m-0">
            <thead className="border-none">
              <tr>
                <th className="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                  <div className="py-2 border-b border-slate-700">Class</div>
                </th>
                <th className="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                  <div className="py-2 border-b border-slate-700">
                    Properties
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="align-baseline">
              {sizeClasses.map((size) => (
                <tr key={size.class}>
                  <td className="min-w-[130px] py-2 font-mono font-medium text-xs leading-6 text-slate-500 whitespace-nowrap">
                    {size.class}
                  </td>
                  <td className="flex space-x-6 px-0 py-2 font-mono text-xs leading-6 text-slate-400 whitespace-pre">
                    <span>height: {size.properties.height};</span>
                    <span>width: {size.properties.width};</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

      <div className="p-8 text-center text-sm text-slate-500">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center space-y-1 sm:space-y-0 sm:space-x-1 flex-col sm:flex-row">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <div>Created with</div> <div>☕</div> <div>in hand by</div>
            </div>
            <a
              className="hover:underline"
              href="https://twitter.com/patrykgulas"
              target="_blank"
              rel="noreferrer"
            >
              <b>@patrykgulas</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
