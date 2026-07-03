import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koona Manoj Kumar — Frontend Developer",
  description:
    "CS Engineering student, frontend developer, and IoT enthusiast from Hyderabad. Building digital experiences that matter.",
  keywords: [
    "Manoj Kumar",
    "Koona Manoj Kumar",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Hyderabad",
    "SHE SHIELD",
  ],
  authors: [{ name: "Koona Manoj Kumar" }],
  openGraph: {
    title: "Koona Manoj Kumar — Frontend Developer",
    description: "CS Engineering student & frontend developer from Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
