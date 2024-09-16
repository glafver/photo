/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.cloud.google.com', 'storage.googleapis.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig; 