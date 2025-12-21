import { Poppins, Hind_Siliguri } from "next/font/google"; // ১. আমাদের ফন্ট ইম্পোর্ট
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// ২. Poppins (ইংরেজি) কনফিগারেশন
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // ভেরিয়েবল নাম
});

// ৩. Hind Siliguri (বাংলা) কনফিগারেশন
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind", // ভেরিয়েবল নাম
});

export const metadata = {
  title: "NeonStudio Agency",
  description: "Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ৪. এখানে দেখুন: inter.className এর বদলে আমাদের ভেরিয়েবলগুলো বসানো হয়েছে */}
      <body className={`${poppins.variable} ${hindSiliguri.variable} flex flex-col min-h-screen text-white bg-black`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}