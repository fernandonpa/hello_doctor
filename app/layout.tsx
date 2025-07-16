import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

//  Replace `export const metadata` with this function
export function generateMetadata(): Metadata {
  return {
    title: "CarePulse",
    description:
      "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
    icons: {
      icon: "/assets/icons/logo-icon.svg",
    },
    // Add Sentry trace data here
    other: {
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
