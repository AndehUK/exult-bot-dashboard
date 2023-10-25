import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import { Toaster } from "sonner";

import { ThemeProvider } from "~/components/providers/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Exult Bot",
  description: "Bringing joy through the world's digital playground.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${font.className}`}>
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="exult-software-theme"
          >
            <Toaster position="top-center" />
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
