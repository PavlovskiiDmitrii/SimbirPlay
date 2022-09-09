import { Counter } from "../features/counter/Counter";
import { Main } from "../Pages/Main/Main";
import { AccrualHistory } from "../Pages/AccrualHistory/AccrualHistory";
import { Store } from "../Pages/Store/Store";
import { Rules } from "../Pages/Rules/Rules";
import { admimTypePaths } from "../variables"

export const paths = [
    {
      path: "",
      page: <div><Counter /><Main/></div>,
      linkText: "Главная",
      type: "basic",
    },
    {
      path: "accrualhistory",
      page: <AccrualHistory/>,
      linkText: "История начислений",
      type: "basic",
    },
    {
      path: "admin/accrualhistory",
      page: <div>admin/scoring</div>,
      linkText: "История начислений(АДМИН)",
      type: admimTypePaths,
    },
    {
      path: "store",
      page: <Store/>,
      linkText: "Магазин",
      type: "basic",
    },
    {
      path: "rules",
      page: <Rules/>,
      linkText: "Правила получения поощрений",
      type: "basic",
    },
    {
      path: "admin/rules",
      page: <div>admin/rules</div>,
      linkText: "Правила получения поощрений(АДМИН)",
      type: admimTypePaths,
    },
  ];