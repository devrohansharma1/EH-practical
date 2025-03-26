import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        <div className="flex-grow"> {/* Removed explicit padding-top as we handle it in the child elements */}
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
