"use client";
import { FC, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { FaTerminal } from "react-icons/fa";

import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import useCodeExecutor from "@/hooks/useCodeExecutor";

const Page: FC = () => {

    const [code, setCode] = useState(`// Write your JavaScript code here
        console.log("Hello, World!");
    `);

    const { output, error, executeCode } = useCodeExecutor();

    const handleEditorChange = (value?: string) => {
        setCode(value || '');
    };

    const handleRunCode = () => {
        executeCode(code);
    };

    return (
        <CustomPage>
            <Heading level={1} text="IDE (JavaScript Playground)" />
            <div className="flex flex-col md:flex-row h-screen">
                {/* Code Editor Section */}
                <div className="w-full md:w-1/2 bg-gray-100 p-4 dark:bg-gray-900">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">JavaScript Playground</h2>
                        <button
                            onClick={handleRunCode}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Run Code
                        </button>
                    </div>
                    <Editor
                        height="80vh"
                        defaultLanguage="javascript"
                        value={code}
                        onChange={handleEditorChange}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: true },
                            fontSize: 14,
                            lineNumbers: 'on',
                            scrollBeyondLastLine: true,
                            tabSize: 1,
                            insertSpaces: true,

                        }}
                    />
                </div>

                {/* Output Console Section */}
                <div className="w-full md:w-1/2 bg-gray-100 p-4 overflow-auto dark:bg-gray-900">
                    <div className="flex items-center mb-4">
                        <FaTerminal className="mr-2" />
                        <h2 className="text-xl font-bold">Console Output</h2>
                    </div>

                    {/* Output Display */}
                    <div className="bg-black p-4 rounded-lg h-[80vh] overflow-y-auto">
                        {error ? (
                            <pre className="text-red-400">{error}</pre>
                        ) : (
                            output.map((line, index) => (
                                <div key={index} className="text-green-400">
                                    {line}
                                </div>
                            ))
                        )}
                        {output.length === 0 && !error && (
                            <div className="text-gray-500">
                                Run some code to see the output...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CustomPage>
    );
};

export default Page;