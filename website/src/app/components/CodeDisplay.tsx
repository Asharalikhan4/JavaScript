import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeDisplay: FC<CodeDisplayProps> = ({ language, code }) => {
  return (
    <div className="bg-gray-900 p-2 rounded-md">
      <SyntaxHighlighter language={language} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;