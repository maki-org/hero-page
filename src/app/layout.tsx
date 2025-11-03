export const metadata = {
  title: "Maki – Your Personal Assistant",
  description: "Record. Remember. Recognize. Reorganize.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


