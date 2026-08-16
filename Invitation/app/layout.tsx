import type { Metadata } from "next";
import { Inter, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Д.Түмэнтөгөлдөр | Сэвлэг үргээх ёслолын урилга",
  description: "Сэвлэг үргээх ёслолын урилга",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${inter.variable} ${greatVibes.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-beige-50 text-brown-900">
        <main className="flex-1 max-w-md mx-auto w-full bg-white/50 shadow-2xl relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
