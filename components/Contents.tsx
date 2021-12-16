import { useEffect, useState } from "react";
import clsx from "clsx";

interface Heading {
  slug: string;
  text: string;
  level: number;
}

const Contents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // setHeadings([]);
    const article = document.getElementsByTagName("article")[0];
    if (article)
      for (let e of article.children as any) {
        // TODO: improve
        const element: HTMLElement = e;

        if (["H2", "H3", "H4"].includes(element.tagName)) {
          const heading: Heading = {
            slug: element.id,
            text: element.innerText,
            level: parseInt(element.tagName[1]) - 1,
          };

          setHeadings((previousHeadings) => [...previousHeadings, heading]);
        }
      }
  }, []);

  return (
    <>
      <ul>
        {headings &&
          headings.map((heading) => (
            <li
              key={heading.slug}
              className={clsx(
                "block p-xs text-gray-dark text-sm",
                "hover:text-blue-400"
              )}
            >
              <a
                className={clsx({
                  "ml-base": heading.level === 2,
                  "ml-lg": heading.level === 3,
                })}
                href={`#${heading.slug}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contents;
