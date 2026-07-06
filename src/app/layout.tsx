import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoMarkt — Car Dealership",
  description: "Demo landing page — AutoMarkt — Car Dealership",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
