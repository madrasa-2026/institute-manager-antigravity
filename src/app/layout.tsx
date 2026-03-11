import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Antigravity - School Management System",
        template: "%s | Antigravity",
    },
    description:
        "Comprehensive educational institution management ERP with student, teacher, academic, accounting, and attendance modules.",
    keywords: [
        "school management",
        "education ERP",
        "student management system",
        "teacher management",
        "school accounting",
        "attendance tracking",
        "fee management",
        "academic management",
    ],
    authors: [{ name: "Antigravity Team" }],
    creator: "Antigravity",
    publisher: "Antigravity",
    metadataBase: new URL("https://antigravity.example.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://antigravity.example.com",
        siteName: "Antigravity",
        title: "Antigravity - School Management System",
        description:
            "Comprehensive educational institution management ERP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Antigravity School Management",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Antigravity - School Management System",
        description: "Comprehensive educational institution management ERP",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-code",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
        { media: "(prefers-color-scheme: dark)", color: "#4F46E5" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
