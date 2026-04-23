import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David — Head of Software Engineering",
  description:
    "Senior technology leader with 5+ years directing software engineering teams at scale. Head of Software Engineering at Sainsbury's Group / Argos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
