import { useState } from "react";

// Custom hook for code execution
const useCodeExecutor = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const executeCode = (code: string) => {
    // Clear previous outputs
    setOutput([]);
    setError(null);

    try {
      // function to capture console.log outputs
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(String).join(' '));
        originalConsoleLog(...args);
      };

      // Use Function constructor to execute code in a safe context
      const result = new Function('console', code + '\nreturn null;')(console);

      // Restore original console.log
      console.log = originalConsoleLog;

      // Set outputs
      setOutput(logs);
    } catch (err) {
      // Handle any runtime errors
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return { output, error, executeCode };
};

export default useCodeExecutor;