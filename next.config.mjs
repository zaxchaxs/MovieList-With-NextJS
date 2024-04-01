/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns:[
            {
                hostname: "image.tmdb.org",
            }
        ]
    }
};

export default nextConfig;
