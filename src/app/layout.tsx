import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";
import { ScrollReset } from "@/components/scroll-reset";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const aref = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abdulrahman Mohammed · Senior React Native + Expo developer",
  description:
    "Senior React Native and Expo developer based in Cairo. Five years shipping production iOS and Android apps. Open to senior mobile roles and contracts.",
  metadataBase: new URL("https://abdulrahmandev.vercel.app"),
  openGraph: {
    title: "Abdulrahman Mohammed · Senior React Native + Expo developer",
    description:
      "Five years shipping production iOS and Android apps. Open to senior mobile roles and contracts.",
    type: "website",
    locale: "en_US",
    siteName: "abdulrahmandev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrahman Mohammed · Senior React Native + Expo developer",
    description:
      "Five years shipping production iOS and Android apps. Open to senior mobile roles and contracts.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jetbrains.variable} ${aref.variable}`}
    >
      <body>
        <ScrollReset />
        <MotionProvider>{children}</MotionProvider>
        {/* impeccable-live-start */}
        {process.env.NODE_ENV === "development" && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="http://localhost:8400/live.js" />
        )}
        {/* impeccable-live-end */}
      </body>
    </html>
  );
}
