import axios from "axios";

const defaultItems = [
  {
    id: 1,
    name: "Simbir-Куртка",
    price: 100,
  },
  {
    id: 2,
    name: "Simbir-Носки",
    price: 200,
  },
  {
    id: 3,
    name: "Simbir-Кружка",
    price: 100,
  },
  {
    id: 4,
    name: "Simbir-стакан",
    price: 100,
  },
];

export async function fetchStoreItem() {
    const { data } = await axios.get(`http://simbir-play.site/merch/list`);
    return data;
}
