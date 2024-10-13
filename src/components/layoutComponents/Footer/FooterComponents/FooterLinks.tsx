import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  {
    title: "קידום רשתות חברתיות ",
    items: [
      { title: "קידום ב-Facebook", url: "קידום ב-Facebook" },
      { title: "קידום ב-Instagram", url: "קידום ב-Instagram" },
      { title: "קידום ב-Tik Tok", url: "קידום ב-Tik Tok" },
    ],
  },
  {
    title: "עיצובים",
    items: [
      { title: "עיצוב UI/UX", url: "עיצוב UIUX" },
      { title: "עיצוב ממשק משתמש", url: "עיצוב ממשק משתמש" },
      { title: "עיצוב אפליקציות", url: "עיצוב אפליקציות" },
    ],
  },
  {
    title: "פיתוח אתרים חדשים",
    items: [
      { title: "בניית אתרים", url: "/בניית אתרים" },
      { title: "בניית אתר תדמית", url: "/בניית אתר תדמית" },
      { title: "בניית אתר מסחר", url: "בניית אתר מסחר" },
      { title: "בניית אתר חדש", url: "בניית אתר חדש" },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return <FooterSection columns={footerData} />;
};

export default FooterLinks;
