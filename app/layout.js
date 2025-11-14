import { Inter, Cutive } from "next/font/google";
import "./globals.css";

export const cutive = Cutive({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cutive.className} relative`}>
        <div className="gradient fixed inset-0"></div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
