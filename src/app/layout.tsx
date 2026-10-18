import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { ContentProvider } from "@/context/content-context";
import { Toaster } from "sonner";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHAIDS | Department of Artificial Intelligence & Data Science (ACPCE)",
  description: "Official digital platform for the Department of Artificial Intelligence & Data Science at A. C. Patil College of Engineering, Navi Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoNarrow.variable} antialiased dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ContentProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScroll>
          <Toaster position="top-right" theme="dark" richColors />
        </ContentProvider>
      </body>
    </html>
  );
}
