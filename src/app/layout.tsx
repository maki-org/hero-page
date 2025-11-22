import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Maki.ai",
  description:
    "Stay organized with Maki.ai - your intelligent executive assistant for tasks, reminders, and calendar management",
  authors: [{ name: "Maki.ai" }],
  keywords: [
    "Maki.ai",
    "executive assistant",
    "task management",
    "reminders",
    "calendar management",
    "AI assistant",
  ],
  openGraph: {
    type: "website",
    title: "Maki.ai",
    description: "Your personal AI that listens, understands and acts",
    url: "https://www.heymaki.ai",
    siteName: "Maki.ai",
    images: [
      {
        url: "https://heymaki.ai/og-graph.png",
        alt: "Maki.ai",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/192x192-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="2128e87b-5abd-4c97-981e-a930cd5916e8"
      ></script>
    </html>
  );
}
