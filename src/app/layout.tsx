import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
    title: "Deepfake Ethics Case Study",
    description: "Exploring the ethical, legal, and social impacts of deepfake technology.",
    icons: [{ rel: "icon", url: "/face.ico" }],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
        <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
        </html>
    );
}