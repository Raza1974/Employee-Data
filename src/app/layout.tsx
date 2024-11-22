
import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css"; // Import your global styles

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Employee Management System",
  description: "A system to manage employees and their details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> {/* Header component */}
        <main>{children}</main> {/* Main content */}
        <Footer /> {/* Footer component */}
      </body>
    </html>
  );
}
