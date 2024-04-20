import { Ubuntu, Source_Code_Pro, Source_Sans_3 } from "next/font/google";

export const ubuntu = Ubuntu({ subsets: ["latin"], display: 'swap', weight: '400', variable: '--font-ubuntu' });
export const sourceCode = Source_Code_Pro({ subsets: ["latin"], display: 'swap', variable: '--font-source-mono' });
export const sourceSans = Source_Sans_3({ subsets: ["latin"], display: 'swap' });
export const variables = `${ubuntu.variable} ${sourceCode.variable}`;
