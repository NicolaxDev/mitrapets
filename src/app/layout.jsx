import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata = {
  title: "Mitra pets",
  description: "Las segundas oportunidades ocurren",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <body className="antialiased">
          {children}
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}
