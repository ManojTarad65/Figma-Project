import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Neurodiversion",
    description: "A production-ready Next.js application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable,
                montserrat.variable
            )}>
                {children}
            </body>
        </html>
    );
}
