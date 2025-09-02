

import "@/assets/css/globals.css";
import Layout from "@/components/Layout";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";

export const metadata = {
  title: "KGK Group",
  description: "",
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
