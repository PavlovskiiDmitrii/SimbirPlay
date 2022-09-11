import axios from "axios";

export async function fetchAddNewStoreItem(name, price) {
  console.log(222222222)
  const { data } = await axios.post(
    `http://simbir-play.site/merch/create`,
    {
      name: name,
      price: price
    },
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
  );

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data.result }), 500)
  );
}
