

import "@/assets/css/globals.css";
import Layout from "@/components/Layout";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";

export const metadata = {
  title: "KGK Group - Inspired to Shine",
  description: "Discover KGK Group: Global leaders in gems, jewellery, and more.",
  alternates: {
    canonical: "https://kgk-group-new.vercel.app",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  themeColor: "#000000",

  // ✅ Open Graph
  openGraph: {
    title: "KGK Group - Inspired to Shine",
    description: "Discover KGK Group: Global leaders in gems, jewellery, and more.",
    url: "https://kgk-group-new.vercel.app",
    siteName: "KGK Group",
    images: [
      {
        url: "https://kgk-group-new.vercel.app/og-image.jpg", // <-- Replace with your actual image
        width: 1200,
        height: 630,
        alt: "KGK Group - Inspired to Shine",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "KGK Group - Inspired to Shine",
    description: "Discover KGK Group: Global leaders in gems, jewellery, and more.",
    images: ["https://kgk-group-new.vercel.app/og-image.jpg"], // same as OG
    creator: "@kgk_group", // optional, if you have Twitter handle
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-body text-paragraph">
        <div id="modal-root"></div>
        <GoogleTranslateLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
