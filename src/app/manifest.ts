import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Kandle Direct Publishing",
        short_name: "Kandle DP",
        description: "High-end book publishing services for the modern author.",
        start_url: "/",
        display: "standalone",
        background_color: "#0B0B0B",
        theme_color: "#EA580C",
        icons: [
            {
                src: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
