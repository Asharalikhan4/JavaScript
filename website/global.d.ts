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
};

interface CustomComponentProps {
    children: React.ReactNode;
    className?: string;
    id: string;
};