import { Geist, Geist_Mono } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from 'sonner'; // ✅ Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coffee and Canvas",
  description: "Made for you All",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ConvexClientProvider>
              {children}
              <Toaster /> {/* ✅ Add this line */}
            </ConvexClientProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
