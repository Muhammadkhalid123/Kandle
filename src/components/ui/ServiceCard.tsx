import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    className?: string;
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative bg-canvas p-8 rounded-2xl border border-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flame to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 bg-flame/10 rounded-full flex items-center justify-center text-flame mb-6 group-hover:bg-flame group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-flame transition-colors">{title}</h3>
            <p className="text-ink/60 text-sm leading-relaxed mb-4">{description}</p>

            <span className="inline-flex items-center text-sm font-semibold text-flame opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </span>
        </Link>
    );
}
