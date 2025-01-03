interface ToggleThemeProps {
    className?: string;
};

interface SubHeadingProps {
    name: string;
    className?: string;
};

interface CodeDisplayProps {
    language: string;
    code: string;
};

interface CustomTextProps {
    className?: string;
    children: React.ReactNode;
};

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
    className?: string;
};

interface CustomPageProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

interface CustomComponentProps {
    children: React.ReactNode;
    className?: string;
    id: string;
};

interface CustomInputProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

interface CustomTextAreaPropsTypes {
    name: string;
    placeholder: string;
    className?: string;
    rows?: number;
    cols?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

interface ContactFormTypes {
    name: string;
    email: string;
    suggestions: string;
};

interface Technologies {
    title: string,
    link: string
    // subtopics?: Technologies[];
};

interface Topic {
    title: string;
    link: string;
    subtopics?: Topic[];
};

interface TableOfContentsProps {
  text: string;
  topics: Topic[];
};