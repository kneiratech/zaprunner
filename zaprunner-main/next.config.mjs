/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta la web como sitio estático (carpeta out/) para Azure Static Web Apps
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
