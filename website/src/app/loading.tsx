export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="w-16 h-16 border-4 dark:border-violet-500 border-[#005B41] border-t-transparent rounded-full animate-spin"
                role="status"
                aria-label="Loading"
            ></div>
        </div>
    )
};