import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Head from "next/head";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const metadata = {
  title: "Mitra pets",
  description: "Las segundas oportunidades ocurren",
};

const fullConfig = resolveConfig(tailwindConfig);

export default function RootLayout({ children }) {
  const accentColor = fullConfig.theme.colors.accent;

  return (
    <html lang="en">
      <Head>
        {/* Chrome, Edge, Opera */}
        <meta name="theme-color" content={accentColor} />

        {/* Safari iOS */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>

      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <body className="antialiased">{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}
