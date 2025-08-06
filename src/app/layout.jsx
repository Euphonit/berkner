import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniel's Student Hub",
  description: "My custom student hub",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="dark">
        <SidebarProvider>
          <AppSidebar />
          <main className="relative">
            <SidebarTrigger className="bg-black absolute top-2 left-2 z-50" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
