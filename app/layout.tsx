import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/Aeonik-Full-Family-Desktop/Aeonik-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

const aeonikMono = localFont({
  src: [
    {
      path: "../public/assets/AeonikMono-Essentials-Desktop/AeonikMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/AeonikMono-Essentials-Desktop/AeonikMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/AeonikMono-Essentials-Desktop/AeonikMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik-mono",
});

export const metadata: Metadata = {
  title: "ayon - Personal Health Coach",
  description: "Launching soon on Kickstarter - Your personal health coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonik.variable} ${aeonikMono.variable} font-aeonik antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
