import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Professional Publishing Services`,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
            type: "website",
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServicePage({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
