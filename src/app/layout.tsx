import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {/* ↓ Suspenseいらなそう */}
            {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}

            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
