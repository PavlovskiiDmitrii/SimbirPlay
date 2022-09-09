import { Main } from "../Pages/Main/Main";
import { AccrualHistory } from "../Pages/AccrualHistory/AccrualHistory";
import { Store } from "../Pages/Store/Store";
import { Rules } from "../Pages/Rules/Rules";

export const pathsLinks = [
  {
    path: "",
    page: <Main />,
    linkText: "Главная",
    type: "basic",
  },
  {
    path: "store",
    page: <Store />,
    linkText: "Магазин",
    type: "basic",
  },
  {
    path: "rules",
    page: <Rules />,
    linkText: "Правила получения поощрений",
    type: "basic",
  },
];

export const pathsContent = [
  ...pathsLinks,
  {
    path: "accrualhistory/:id",
    page: <AccrualHistory />,
    linkText: "История начислений",
    type: "basic",
  },
];
