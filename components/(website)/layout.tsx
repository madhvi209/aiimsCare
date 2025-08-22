"use client";

import Header from "@/components/(website)/header";
import Footer from "@/components/(website)/footer";
import Floating from "@/components/(website)/floatingButton";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Floating/>
        </div>
    );
}
