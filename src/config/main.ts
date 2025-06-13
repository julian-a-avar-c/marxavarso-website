import { config as productsConfig } from "@/config/pages/products";
import { config as servicesConfig } from "@/config/pages/services";

export type Card = {
  icon: string | null;
  title: string;
  description: string;
};

export type Page = {
  name: string;
  href: string;
  title?: string;
};

type ContactInfo = {
  icon?: string;
  value?: string;
  href?: string;
};

type Config = {
  title: string;
  shortTitle: string;
  links: {
    [type in
      | "site"
      | "linkedin"
      | "instagram"
      | "phone"
      | "email"
      | "location"]: ContactInfo;
  };
  nav: {
    services: typeof servicesConfig.services;
    products: {
      liquidLubricants: typeof productsConfig.products.liquidLubricants;
      greases: typeof productsConfig.products.greases;
    };
  };
  partners: { src: string; alt: string }[];
};

const config: Config = {
  title: "Process & Automation Consultancy Solutions",
  shortTitle: "PACS LLC",
  links: {
    site: {
      icon: "fa6-solid:globe",
      href: "https://pacsllc.net",
    },
    linkedin: {
      icon: "fa6-brands:linkedin",
      value: "pacsllc",
      href: "https://www.linkedin.com/company/pacsllc/",
    },
    instagram: {
      icon: "fa6-brands:instagram",
      value: "pacs_llc",
      href: "https://www.instagram.com/pacs_llc/",
    },
    phone: {
      icon: "fa6-solid:phone",
      value: "+1 (848) 330-6536",
      href: "tel:+18483306536",
    },
    email: {
      icon: "fa6-solid:envelope",
      value: "info@pacsllc.net",
      href: "mailto:info@pacsllc.net",
    },
    location: {
      icon: "fa6-solid:map-location",
      value: "NY / NJ",
    },
  },
  nav: {
    services: servicesConfig.services,
    products: {
      liquidLubricants: productsConfig.products.liquidLubricants,
      greases: productsConfig.products.greases,
    },
  },
  partners: [
    {
      src: "/images/partners/new/soulintec.png",
      alt: "Soulintex",
    },
    {
      src: "/images/partners/new/ist.png",
      alt: "IST",
    },
    {
      src: "/images/partners/new/precisioncontrol.png",
      alt: "Precision Control",
    },
    {
      src: "/images/partners/new/redsea.png",
      alt: "Red Sea",
    },
    {
      src: "/images/partners/new/home.png",
      alt: "Home",
    },
    {
      src: "/images/partners/new/fluidsolutions.png",
      alt: "Fluid Solutions",
    },
    {
      src: "/images/partners/new/petroplus.png",
      alt: "Petroplus",
    },
    {
      src: "/images/partners/new/kogaz.png",
      alt: "Kogaz",
    },
  ],
};

export { config };
