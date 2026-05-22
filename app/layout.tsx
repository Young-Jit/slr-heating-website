import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SLR Heating & Cooling | Hollywood, CA — AC Repair, Furnace & HVAC Services",
  description:
    "5.0★ rated HVAC contractor serving Hollywood, Valley Village, North Hollywood & LA. Same-day AC repair, furnace service, installations. Licensed & insured. 24/7 emergency. Call (818) 823-4006.",
  keywords:
    "AC repair Hollywood CA, HVAC contractor Los Angeles, furnace repair North Hollywood, air conditioning Valley Village, heating repair LA, emergency AC repair, HVAC installation Los Angeles",
  openGraph: {
    title: "SLR Heating & Cooling | 5.0★ Rated HVAC in Los Angeles",
    description:
      "Same-day AC repair, furnace service & HVAC installation. 90+ Google reviews. Licensed, insured, background-checked. Call (818) 823-4006.",
    type: "website",
    locale: "en_US",
    url: "https://slrheatingandcooling.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
