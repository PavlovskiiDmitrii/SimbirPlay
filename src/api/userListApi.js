import axios from "axios";

const defaultUsers = [
  {
    id: 1,
    name: "Дима Павловский",
    simbirCoins: 100,
    ratingPoints: 100,
  },
  {
    id: 2,
    name: "Александра Двойникова",
    simbirCoins: 150,
    ratingPoints: 150,
  },
  {
    id: 3,
    name: "Артур Багдасарян",
    simbirCoins: 1510,
    ratingPoints: 1510,
  },
  {
    id: 4,
    name: "Илья Кузмичёв",
    simbirCoins: 1510,
    ratingPoints: 1510,
  },
];

export async function fetchUserList(direction = "Frontend") {
  const { data } = await axios.get(`http://simbir-play.site/user/list`);
  console.log(data);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: defaultUsers }), 500)
  );
}