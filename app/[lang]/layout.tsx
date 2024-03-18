import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./global.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <HeaderComponent dictionary={dictionary} />
        <div className="relative xl:pt-[160px]">{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
