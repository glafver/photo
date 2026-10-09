import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacts",
    description:
        "Contact Glafira Veretennikova for real estate photography in Malmö, Lund and Skåne. Book via SE360 or reach out directly.",
    alternates: { canonical: "/contacts" },
};

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
