import { Html, Head, Main, NextScript } from "next/document";
import { monitoFont } from "@/themes/theme";

export default function Document() {
  return (
    <Html lang="en" className={monitoFont.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
