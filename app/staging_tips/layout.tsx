import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Staging Tips",
    description:
        "Staging tips to prepare your home for real estate photography — kitchens, bathrooms, bedrooms, living rooms, halls and dusk.",
    alternates: { canonical: "/staging_tips" },
};

export default function StagingTipsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
