import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function shareContent(title: string, text: string, url: string = typeof window !== 'undefined' ? window.location.href : '') {
    if (typeof navigator === 'undefined') return;

    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        try {
            await navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Error copying to clipboard:', err);
        }
    }
}
