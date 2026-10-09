import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Journey",
    description:
        "Six years, over 1,000 homes and 18,000+ photos — Glafira Veretennikova's journey as a real estate photographer in Malmö and Skåne.",
    alternates: { canonical: "/journey" },
};

export default function JourneyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
