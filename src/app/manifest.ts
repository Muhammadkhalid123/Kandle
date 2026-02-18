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
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
