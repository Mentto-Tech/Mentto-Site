import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    linkHref: string;
    linkText?: string;
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    linkHref,
    linkText = "Saiba mais",
    color
}: FeatureCardProps & { color?: string }) {
    const style = color ? ({
        '--color-primary': color,
        '--color-primary-border': `color-mix(in srgb, ${color}, white 80%)`
    } as React.CSSProperties) : undefined;

    return (
        <div
            style={style}
            className="group p-8 rounded-2xl bg-[var(--e-global-color-tertiary)] backdrop-blur-sm border border-white/10 hover:border-[var(--color-primary-border)] hover:bg-black/10 transition-all duration-300"
        >
            <div className="mb-6 inline-flex p-4 rounded-xl bg-[var(--e-global-color-tertiary)] text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
                {description}
            </p>

            <Link
                href={linkHref}
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
                {linkText}
                <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
    );
}
