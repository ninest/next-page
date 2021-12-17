import CodeBlock from "../CodeBlock";

const substitutedComponents = {
  /* Code */
  pre: (props: any) => {
    const language = props.children.props["data-language"];
    const code = props.children.props.children ?? "";

    console.log(language);

    return (
      <div className="mobile-full-bleed">
        <CodeBlock language={language} code={code}></CodeBlock>
      </div>
    );
  },
};  

export default substitutedComponents;
