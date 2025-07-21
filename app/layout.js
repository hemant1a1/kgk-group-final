
import "@/assets/css/globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "KGK Group",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-body text-paragraph">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
