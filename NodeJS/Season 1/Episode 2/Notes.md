## S1/E2 - JavaScript on Server

-  **Server :** A server is a computer or system that provides data, services, resources, or programs to other computers, known as clients, over a network. Servers play a crucial role in client-server architecture, where the server processes requests from clients and returns the necessary information or services, enabling functionalities like web hosting, file sharing, and database management.

- **IP Address :** An  IP address (Internet Protocol address) is a unique number that identifies every device connected to the internet. It functions like a postal address, allowing devices to locate and communicate with one another over the network. IP addresses can be either IPv4 or IPv6, with IPv4 being the most commonly used format (e.g., 192.168.1.1) and IPv6 providing a larger address space to accommodate the growing number of devices online.

**V8 Engine :** 
- The  **V8**  JavaScript engine is written in  **C++**.
- [V8 Github Repo](https://github.com/v8/v8)
- V8 can be embedded into any C++ program, which is a crucial feature. This means developers can leverage V8’s powerful JavaScript execution capabilities within C++ applications, making it versatile for various use cases, including game development and server-side scripting.
- ![V8 Engine](./images/Screenshot%202024-08-15%20at%202.12.44 PM.png)

**Code Flow :**
- **JavaScript (JS) → V8 (C++) → Machine Code**
- This flow illustrates how high-level JavaScript code is processed by the V8 engine, which compiles it into machine code that the CPU can execute. This process allows for efficient execution of JavaScript, making it suitable for performance-critical applications.

**NodeJS :**
- Node.js is a C++ application with V8 embedded into it.
- It enables the execution of JavaScript code on the server side, allowing developers to build scalable and high-performance web applications using a single programming language for both client and server.

**ECMAScript :**
- ECMAScript is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as the JavaScript standard. The standardization of ECMAScript ensures that JavaScript remains consistent across different implementations and environments.
- JS engines (such as V8, SpiderMonkey, Chakra, etc.) follow these ECMAScript standards, which outline the syntax, semantics, and features of the language.

**V8 and Node.js :**
- V8 engines must adhere to ECMAScript standards, ensuring compatibility and consistent behavior across different environments.
- While Node.js uses the V8 engine, it has additional capabilities (often referred to as “superpowers”) that allow it to perform actions such as: Making API calls on servers, Connecting to databases.
- These features distinguish Node.js as a JavaScript runtime, which extends its functionality beyond what V8 can provide alone. Node.js includes built-in modules for handling HTTP requests, file system operations, and other essential server-side functionalities.

**Low-Level Code :** Low-level code refers to programming languages or code that is closer to machine language and hardware, providing little abstraction from the computer’s architecture. It allows for fine-grained control over system resources, making it essential for system programming and performance-critical applications.

**Key Points About Low-Level Code :**
- **Machine Language :** The most basic form of low-level code, consisting of binary (0s and 1s) instructions that the computer’s CPU can directly execute. This is the only language that CPUs can understand natively.
- **Assembly Language :** A step above machine language, assembly language uses symbolic representations (mnemonics) for operations and memory addresses, making it somewhat easier for humans to read and write. Each assembly instruction corresponds to a specific machine language instruction, and it allows programmers to write code that is closely tied to the hardware.