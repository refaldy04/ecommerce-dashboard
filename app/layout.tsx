import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const source = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reshop Admin",
  description: "Admin for Reshop App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={source.className}>
        <Topbar />
        <div className="grid grid-cols-5">
          <Sidebar />
          <div className="col-span-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
