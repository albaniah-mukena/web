import type { ReactNode } from "react";
import type { BrandName } from "./brands/brand-name-type.ts";

import ShopeeIcon from "./brands/shopee-icon.tsx";
import WebshopIcon from "./brands/webshop-icon.tsx";
import LazadaIcon from "./brands/lazada-icon.tsx";
import WhatsappIcon from "./brands/whatsapp-icon.tsx";
import TokopediaIcon from "./brands/tokopedia-icon.tsx";
import DefaultIcon from "./brands/default-icon.tsx";

type Props = {
  url: string;
  label: string;
  sublabel?: string;
  brandName: BrandName;
};

const selectIconBrand = (brandname: BrandName): ReactNode => {
  switch (brandname) {
    case "webshop":
      return <WebshopIcon width={23} height={23} color="#374151" />;
    case "whatsapp":
      return <WhatsappIcon width={23} height={23} color="#374151" />;
    case "shopee":
      return <ShopeeIcon width={23} height={23} color="#374151" />;
    case "lazada":
      return <LazadaIcon width={23} height={23} color="#374151" />;
    case "tokopedia":
      return <TokopediaIcon width={23} height={23} color="#374151" />;
    default:
      return <DefaultIcon width={23} height={23} color="#374151" />;
  }
};

export default function LinkTreeBtn({
  url,
  label,
  sublabel,
  brandName,
}: Props) {
  return (
    <a
      href={url}
      className="py-2 md:py-3 px-3 md:px-4 inline-flex justify-between items-center text-sm md:text-base font-semibold rounded-full border-2 border-gray-200 shadow-md tracking-wide text-gray-700 bg-white hover:border-[#c59c75] disabled:opacity-50 disabled:pointer-events-none"
    >
      <div className="text-center w-full">
        {label}
        <p className="tracking-normal text-xs normal-case text-gray-500">
          {sublabel}
        </p>
      </div>
      <div className="border border-gray-700 rounded-full p-1">
        {selectIconBrand(brandName)}
      </div>
    </a>
  );
}
