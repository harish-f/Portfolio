import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harish Ram Baghavath",
  description: "Hello there 👋 I'm Harish, a student currently studying at School of Science and Technology. Check out some of my projects here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
