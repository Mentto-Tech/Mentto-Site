import Image from "next/image";

interface CaseCardProps {
    imageSrc: string;
    imageAlt: string;
    location: string;
    title: string;
    description: string;
    linkHref: string;
}

export default function CaseCard({
    imageSrc,
    imageAlt,
    location,
    title,
    description,
    linkHref,
}: CaseCardProps) {
    return (
        <div className="group rounded-2xl overflow-hidden bg-tertiary shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="relative h-48 w-full">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                    {location}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-200 text-base mb-6">
                    {description}
                </p>
                <a href={linkHref} target="_blank" className="text-primary font-bold text-sm hover:underline">
                    Saiba mais
                </a>
            </div>
        </div>
    );
}
