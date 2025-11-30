import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "./Componants/Navbar/Navbar";

const exo_font = Exo_2({
  variable: "--exo_font",
  subsets: ["latin"],
});


export const metadata = {
  title: "Devit BD",
  description: "Software Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${exo_font.variable} antialiased `}
      >
        <Navbar />

          {children}
      </body>
    </html>
  );
}
