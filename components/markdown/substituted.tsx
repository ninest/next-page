import CodeBlock from "@/components/code/CodeBlock";
import ExpandableCode from "@/components/code/ExpandableCode";
import Alert from "@/components/Alert";

const substitutedComponents = {
  /* Code */
  pre: (props: any) => {
    const language = props.children.props["data-language"];
    const code = props.children.props.children ?? "";

    return (
      <div className="mobile-full-bleed">
        <CodeBlock language={language} code={code}></CodeBlock>
      </div>
    );
  },

  /* Expandable code */
  ExpandableCode: (props: any) => {
    return (
      <ExpandableCode
        {...props}
        className="mobile-full-bleed"
      ></ExpandableCode>
    );
  },

  /* General alerts */
  Alert: (props: any) => {
    return <Alert {...props} className="mobile-full-bleed"></Alert>;
  },
};

export default substitutedComponents;
