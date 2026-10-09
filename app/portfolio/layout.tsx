import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Browse Glafira Veretennikova's real estate photography portfolio — kitchens, bedrooms, bathrooms, living rooms, halls, exterior and dusk shots in Malmö and Lund.",
    alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
