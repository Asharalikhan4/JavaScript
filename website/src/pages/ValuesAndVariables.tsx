"use client";
import React, { FC, useState } from "react";
import CodeDisplay from "@/components/CodeDisplay";
import Heading from "@/components/Heading";

const ValuesAndVariables: FC = () => {

    const [code, setCode] = useState<string>(`const greeting: string = 'Hello, world!';`);

    const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    return (
        <div className="space-y-2">
            <Heading name="Values and Variables" />
            <div>
                {/* <h1 className="text-2xl font-bold mb-4">Code Display with Syntax Highlighting</h1>
                <textarea
                    className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
                    rows={6}
                    value={code}
                    onChange={handleCodeChange}
                ></textarea> */}
                <CodeDisplay language="typescript" code={code} />
            </div>
            <div className="font-medium">Here,</div>
            <div>- &quot;Hello, world!&quot; is the <span className="font-medium italic">value</span> (type String) and it&apos;s enclosed inside the quotation mark.</div>
            <div>- greeting is the <span className="font-medium italic">variable</span> which is holding the value.</div>
        </div>
    );
};

export default ValuesAndVariables;