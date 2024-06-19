import "../assets/scss/style.scss";

export const metadata = {
  title: "LEE.cg",
  description: "create next.js portfolio by.LEE.cg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}


