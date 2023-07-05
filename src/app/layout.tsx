import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

// SEO
export const metadata = {
  title: "The Movie Database (TMDB)",
  description:
    "The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.",
  keywords: [
    "Movies",
    "TV Shows",
    "Streaming",
    "Reviews",
    "API",
    "Actors",
    "Actresses",
    "Photos",
    "User Ratings",
    "Synopsis",
    "Trailers",
    "Teasers",
    "Credits",
    "Cast",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
