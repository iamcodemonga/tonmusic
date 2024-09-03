import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tonmusic - open music on telegram",
  description: "Play and experience good music from your favourite artists on telegram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <head>
          <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
