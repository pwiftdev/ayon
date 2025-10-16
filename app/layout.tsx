import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Assets/Aeonik-Full-Family-Desktop/Aeonik-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: 'swap',
  preload: true,
});

const aeonikMono = localFont({
  src: [
    {
      path: "../public/Assets/AeonikMono-Essentials-Desktop/AeonikMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Assets/AeonikMono-Essentials-Desktop/AeonikMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Assets/AeonikMono-Essentials-Desktop/AeonikMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik-mono",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "ayon - Personal Health Coach",
  description: "Launching soon on Kickstarter - Your personal health coach",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  // Performance optimizations
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Preconnect to external domains
  other: {
    'dns-prefetch': 'https://connect.facebook.net',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        
        {/* Meta Pixel Code - Optimized loading */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '850283090666946');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=850283090666946&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${aeonik.variable} ${aeonikMono.variable} font-aeonik antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
