const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_LOGIN_URL || 'https://app.firstsavvy.com/login';
const APP_SIGNUP_URL =
  process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.firstsavvy.com/signup';
const APP_CHILD_LOGIN_URL =
  process.env.NEXT_PUBLIC_CHILD_LOGIN_URL || 'https://app.firstsavvy.com/child-login';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/login',
        destination: APP_LOGIN_URL,
        permanent: false,
      },
      {
        source: '/signup',
        destination: APP_SIGNUP_URL,
        permanent: false,
      },
      {
        source: '/kid-login',
        destination: APP_CHILD_LOGIN_URL,
        permanent: false,
      },
      {
        source: '/child-login',
        destination: APP_CHILD_LOGIN_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
