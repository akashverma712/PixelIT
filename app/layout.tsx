import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Orbitron } from "next/font/google";
import StairsTransition from "./components/StairsTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "PixelIT",
  description: "Every Pixel Matters",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} ${orbitron.variable} antialiased`}
      >
         
          <ThemeProvider>
          <StairsTransition>
            {children}
          </StairsTransition>
         </ThemeProvider>
        
      </body>
    </html>
  );
}
