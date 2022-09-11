import { Main } from "../Pages/Main/Main";
import { AccrualHistory } from "../Pages/AccrualHistory/AccrualHistory";
import { Store } from "../Pages/Store/Store";
import { Rules } from "../Pages/Rules/Rules";
import { Sistem } from "../Pages/Sistem/Sistem";

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
    linkText: "Как получить SimbirCoin?",
    type: "basic",
  },
  {
    path: "sistem",
    page: <Sistem />,
    linkText: "О системе",
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
