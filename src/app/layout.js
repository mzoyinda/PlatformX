import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlatformX",
  description: "Gathering of youths engaging in thoughtful conversations on pressing societalissues, rooted in values and aiming for meaningful impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
