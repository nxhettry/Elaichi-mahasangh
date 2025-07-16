import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nepali Cardamom Foundation",
  description:
    "A platform dedicated to the promotion and support of Nepali cardamom farmers.",
};

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
