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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full overflow-hidden">
            <body
                className={cn(
                    "h-full overflow-hidden bg-background font-sans antialiased",
                    inter.variable,
                    montserrat.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}

