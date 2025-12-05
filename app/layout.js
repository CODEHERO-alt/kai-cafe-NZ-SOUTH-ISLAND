import "./globals.css";

export const metadata = {
  title: "Kai Cafe",
  description: "Fresh coffee & cafe experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
