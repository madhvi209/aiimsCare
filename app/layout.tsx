import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/(website)/layout";

export const metadata: Metadata = {
  title: "AIIMS Care",
  description: "Hospital-Grade Home Care Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
