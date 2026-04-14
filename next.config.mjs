/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `next build` and `next dev` both use `.next/`. Running a production build while the
  // dev server is up can leave the dev server serving HTML that points at missing chunks
  // (CSS/JS 404, unstyled page). After a build, stop dev, run `npm run dev:clean`, or
  // delete `.next` and restart `npm run dev`.
  async redirects() {
    return [{ source: '/scout', destination: '/scout-fuel', permanent: true }];
  },
};

export default nextConfig;
