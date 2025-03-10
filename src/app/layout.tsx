import "./globals.css";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "UofT Cardiovascular Disease Student Association",
  description:
    "Cardiovascular Disease Student Association - Spreading awareness about heart disease since 1952",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
