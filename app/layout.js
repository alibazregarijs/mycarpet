import Provider from "@/components/Provider";
import globals from "../styles/globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="">{children}</body>
      </Provider>
    </html>
  );
}
