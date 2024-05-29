import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./global.css";
import thumbnail from "../../public/Images/thumbnail.png";

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
      {/* <head>
        <meta property="og:image" content="../../public/Images/thumbnail.png" />
      </head> */}
      <body>
        <HeaderComponent dictionary={dictionary} />
        <div className="relative xl:pt-[126px]">{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Patepharm",
  openGraph: {
    title: "Patepharm",
    description:
      "Patekpharm Pte. Ltd is Your Reliable Distributor for Essential Medications. Ensuring precision and efficiency in pharmaceutical distribution for individuals and healthcare providers",
    url: "https://patepharm.com",
    siteName: "Patepharm",
    images: [
      {
        url: "https://patepharm.com/Images/thumbnail.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
