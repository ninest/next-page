import { HTMLAttributes } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import nightOwlTheme from "prism-react-renderer/themes/nightOwl";
import clsx from "clsx";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  language: string;
  code: string;
}

const CodeBlock = ({ language, code = "", ...props }: CodeBlockProps) => {
  const isPcode = language === "pcode";
  // If it's pseudoscope, make it a light theme, otherwise the dark theme
  const theme = isPcode ? null : nightOwlTheme;

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={isPcode ? "python" : (language as Language)}
      theme={theme!}
      /* 
  Pseudoscope is super similar in syntax to Python, so latch onto 
  its tokenization  
  */
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            "p-md font-mono text-xs overflow-x-auto md:rounded-md",
            {
              "bg-gray-200": isPcode,
              "bg-gray-900": !isPcode,
            },
            className
          )}
          style={style}
        >
          {tokens.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  /* Comments in pcode should be lighter */
                  const isComment = token.types.includes("comment");
                  return (
                    <span
                      {...getTokenProps({ token, key })}
                      className={clsx({
                        "text-gray-500 italic font-medium":
                          isPcode && isComment,
                      })}
                    />
                  );
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
