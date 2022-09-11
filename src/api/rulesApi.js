import axios from "axios";

export const defaultRulesTypes = ["ecology", "work", "sport"];

const defaultRules = [
  {
    id: 1,
    type: defaultRulesTypes[0],
    text: "Посадить дерево",
    price: 100,
  },
  {
    id: 2,
    type: defaultRulesTypes[1],
    text: "Привести друга",
    price: 100,
  },
  {
    id: 3,
    type: defaultRulesTypes[1],
    text: "Получить похвалу на проекте",
    price: 100,
  },
  {
    id: 4,
    type: defaultRulesTypes[0],
    text: "Сортировка мусора",
    price: 100,
  },
  {
    id: 5,
    type: defaultRulesTypes[3],
    text: "Выиграть соревнования по шахматам",
    price: 100,
  },
];

export async function fetchRules(id) {
  const { data } = await axios.get(`http://simbir-play.site/promo/list`);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data }), 500)
  );
}