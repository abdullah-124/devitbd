import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "./Componants/Navbar/Navbar";
import Footer from "./Componants/Footer/Footer";

const exo_font = Exo_2({
  variable: "--exo_font",
  subsets: ["latin"],
});


export const metadata = {
  title: "DevIT BD",
  description: "Software Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">

      <body
        className={`${exo_font.className} antialiased `}
      >
        <Navbar />

          {children}
        <Footer />
      </body>
    </html>
  );
}
