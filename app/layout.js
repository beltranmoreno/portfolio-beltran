import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beltran's Portfolio",
  description: "Welcome to the land beyond the sea.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="gradient fixed inset-0"></div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
