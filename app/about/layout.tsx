import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Glafira Veretennikova, a real estate photographer based in Malmö, Sweden, combining photography with frontend development.",
    alternates: { canonical: "/about" },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
