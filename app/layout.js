import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🎬 Baby Click Cartoons - Fun Hindi Cartoons for Kids",
  description: "Interactive cartoon app for children featuring Chhota Bheem, Motu Patlu, Shinchan, and Doraemon. Click any character to watch random episodes instantly!",
  keywords: "Hindi cartoons, kids cartoons, baby app, Chhota Bheem, Motu Patlu, Shinchan, Doraemon, children entertainment, cartoon videos",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
  themeColor: "#8B5CF6",
  authors: [{ name: "Baby Click Cartoons" }],
  creator: "Baby Click Cartoons",
  publisher: "Baby Click Cartoons",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "🎬 Baby Click Cartoons - Fun Hindi Cartoons for Kids",
    description: "Interactive cartoon app for children featuring popular Hindi cartoons. Safe, fun, and educational!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "🎬 Baby Click Cartoons",
    description: "Fun Hindi cartoons for kids - Click and watch!",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
