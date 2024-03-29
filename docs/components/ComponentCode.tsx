import classNames from "classnames";
import { ComponentViewContext } from "./ComponentView";
import { SyntaxHighlighter } from "./SyntaxHighlighter";

type ComponentCodeProps = {
  language: string;
};

export const ComponentCode = ({ language }: ComponentCodeProps) => {
  const code: { [key: string]: string } = {
    html: `<div class="tham tham-e-squeeze tham-w-6">
  <div class="tham-box">
    <div class="tham-inner" />
  </div>
</div>
  
<script>
const tham = document.querySelector(".tham");
  
tham.addEventListener('click', () => {
  tham.classList.toggle('tham-active');
});
</script>`,
    tsx: `import classNames from 'classnames';

export default function Example() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={classNames(\`tham tham-e-squeeze tham-w-6\`, { 'tham-active': opened })}>
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}`,
  };

  return (
    <ComponentViewContext.Consumer>
      {({ language, setLanguage }) => (
        <div className="bg-slate-800/60 border border-slate-800 rounded-xl">
          <div className="flex font-semibold sm:hidden border-b border-slate-700/50">
            <div
              className={classNames("border-b-2 px-5 py-3", {
                "border-white text-white": language === "html",
                "border-transparent text-slate-500": language !== "html",
              })}
              onClick={() => setLanguage("html")}
            >
              HTML
            </div>
            <div
              className={classNames("border-b-2 px-5 py-3", {
                "border-white text-white": language === "tsx",
                "border-transparent text-slate-500": language !== "tsx",
              })}
              onClick={() => setLanguage("tsx")}
            >
              React
            </div>
          </div>
          <SyntaxHighlighter
            language={language}
            className="bg-transparent border-none"
          >
            {code[language]}
          </SyntaxHighlighter>
        </div>
      )}
    </ComponentViewContext.Consumer>
  );
};
