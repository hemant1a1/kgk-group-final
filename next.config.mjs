/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['reinventmedia.in', 'img.youtube.com'],
    },

    // ✅ Optimize fonts
    experimental: {
        optimizeCss: true,     // reduce CSS size
        optimizePackageImports: ['lucide-react', 'lodash'], // replace with your heavy libs
    },

    // ✅ Long cache headers for static assets
    async headers() {
        return [
        {
            source: "/:all*(svg|jpg|png|gif|ico|webp|avif)",
            headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
            },
            ],
        },
        ];
    },
};
export default nextConfig;
